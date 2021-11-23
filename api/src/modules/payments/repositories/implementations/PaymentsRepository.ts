import {IPaymentsRepository} from "../IPaymentsRepository";
import {ICreatePaymentDTO} from "../../dtos/ICreatePaymentDTO";
import {Payment} from "../../entities/Payment";
import {getRepository, Repository} from "typeorm";

class PaymentsRepository implements IPaymentsRepository {

    private repository: Repository<Payment>;

    constructor() {
        this.repository = getRepository(Payment);
    }

    async create(data: ICreatePaymentDTO): Promise<Payment> {
        const payment = this.repository.create(data);
        return await this.repository.save(payment);
    }

    async findById(id: string): Promise<Payment> {
        return await this.repository.findOne({
            where: {id},
            relations: ['statusPayment', 'methodsPayment']
        });
    }

    async findByMethod(method_id: string): Promise<Payment[]> {
        return await this.repository.find({
            where: {method_id},
            relations: ['statusPayment', 'methodsPayment']
        });
    }

    async findByStatus(status_payment_id: string): Promise<Payment[]> {
        return await this.repository.find({
            where: {status_payment_id},
            relations: ['statusPayment', 'methodsPayment']
        });
    }

    async list(): Promise<Payment[]> {
        return await this.repository.find({
            relations: ['statusPayment', 'methodsPayment']
        });
    }

    async updateStatus(id: string, status_payment_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({status_payment_id: status_payment_id})
            .where("id = :id")
            .setParameters({id})
            .execute();
    }

    async updateCoupon(id: string, total: number, discount: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({total: total, discount: discount})
            .where("id = :id")
            .setParameters({id})
            .execute();
    }

}

export { PaymentsRepository };