import {IStatusPaymentRepository} from "../IStatusPaymentRepository";
import {ICreateStatusPaymentDTO} from "../../dtos/ICreateStatusPaymentDTO";
import {StatusPayment} from "../../entities/StatusPayment";
import {getRepository, Repository} from "typeorm";

class StatusPaymentRepository implements IStatusPaymentRepository {
    private repository: Repository<StatusPayment>;

    constructor() {
        this.repository = getRepository(StatusPayment);
    }

    async create(data: ICreateStatusPaymentDTO): Promise<void> {
        const {id, status_payment} = data;
        const statusPayment = this.repository.create({id, status_payment});
        await this.repository.save(statusPayment);
    }

    async findById(id: string): Promise<StatusPayment> {
        return await this.repository.findOne(id);
    }

    async findByStatusPayment(status_payment: string): Promise<StatusPayment> {
        return await this.repository.findOne({status_payment});
    }

    async list(): Promise<StatusPayment[]> {
        return await this.repository.find();
    }

}

export {StatusPaymentRepository};