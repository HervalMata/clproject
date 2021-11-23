import {ICreatePaymentDTO} from "../dtos/ICreatePaymentDTO";
import {Payment} from "../entities/Payment";

interface IPaymentsRepository {
    create(data: ICreatePaymentDTO): Promise<Payment>;

    list(): Promise<Payment[]>;

    findByStatus(status_payment_id: string): Promise<Payment[]>;

    findByMethod(method_id: string): Promise<Payment[]>;

    updateStatus(id: string, status_payment_id: string): Promise<void>;

    updateCoupon(id: string, total: number, discount: number): Promise<void>;

    findById(id: string): Promise<Payment>;
}

export { IPaymentsRepository };