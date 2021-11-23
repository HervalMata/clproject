import {StatusPayment} from "../../entities/StatusPayment";
import {ICreateStatusPaymentDTO} from "../../dtos/ICreateStatusPaymentDTO";
import {IStatusPaymentRepository} from "../IStatusPaymentRepository";

class StatusPaymentRepositoryInMemory implements IStatusPaymentRepository {
    statusPayment: StatusPayment[] = [];

    async create(data: ICreateStatusPaymentDTO): Promise<void> {
        const {status_payment} = data;
        const statusPayment = new StatusPayment();
        Object.assign(statusPayment, {status_payment});
        this.statusPayment.push(statusPayment);
    }

    async findById(id: string): Promise<StatusPayment> {
        // @ts-ignore
        return this.statusPayment.find((statusPayment) => statusPayment.id === id);
    }

    async findByStatusPayment(status_payment: string): Promise<StatusPayment> {
        // @ts-ignore
        return this.statusPayment.find((statusPayment) => statusPayment.status_payment === status_payment);
    }

    async list(): Promise<StatusPayment[]> {
        return this.statusPayment;
    }

}

export {StatusPaymentRepositoryInMemory};