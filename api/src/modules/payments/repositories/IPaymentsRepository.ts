import {ICreatePaymentDTO} from "../dtos/ICreatePaymentDTO";
import {Method, Payment, StatusPayment} from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentDTO): Promise<Payment>;
    list(): Promise<Payment[]>;
    findByStatus(status: StatusPayment): Promise<Payment[]>;
    findByMethod(method: Method): Promise<Payment[]>;
    updateStatus(id: string, status: StatusPayment): Promise<void>;
    findById(id: string): Promise<Payment>;
}

export { IPaymentsRepository };