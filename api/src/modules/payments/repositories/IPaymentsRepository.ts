import {ICreatePaymentDTO} from "../dtos/ICreatePaymentDTO";
import {Method, Payment, Status} from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentDTO): Promise<void>;
    list(): Promise<Payment[]>;
    findByStatus(status: Status): Promise<Payment[]>;
    findByMethod(method: Method): Promise<Payment[]>;
    updateStatus(id: string, status: Status): Promise<void>;
    findById(id: string): Promise<Payment>;
}

export { IPaymentsRepository };