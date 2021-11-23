import {ICreateStatusPaymentDTO} from "../dtos/ICreateStatusPaymentDTO";
import {StatusPayment} from "../entities/StatusPayment";

interface IStatusPaymentRepository {
    create(data: ICreateStatusPaymentDTO): Promise<void>;

    list(): Promise<StatusPayment[]>;

    findById(id: string): Promise<StatusPayment>;

    findByStatusPayment(status_payment: string): Promise<StatusPayment>;
}

export {IStatusPaymentRepository};