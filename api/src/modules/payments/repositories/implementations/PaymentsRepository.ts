import {IPaymentsRepository} from "../IPaymentsRepository";
import {ICreatePaymentDTO} from "../../dtos/ICreatePaymentDTO";
import {Method, Payment, Status} from "../../entities/Payment";
import {getRepository, Repository} from "typeorm";

class PaymentsRepository implements IPaymentsRepository {

    private repository: Repository<Payment>;

    constructor() {
        this.repository = getRepository(Payment);
    }

    async create(data: ICreatePaymentDTO): Promise<void> {
        const payment = this.repository.create(data);
        await this.repository.save(payment);
    }

    async findById(id: string): Promise<Payment> {
        return await this.repository.findOne(id);
    }

    async findByMethod(method: Method): Promise<Payment[]> {
        return await this.repository.find({ method });
    }

    async findByStatus(status: Status): Promise<Payment[]> {
        return await this.repository.find({ status });
    }

    async list(): Promise<Payment[]> {
        return await this.repository.find();
    }

    async updateStatus(id: string, status: Status): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ status: status })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

}

export { PaymentsRepository };