import {IPaymentsRepository} from "../IPaymentsRepository";
import {ICreatePaymentDTO} from "../../dtos/ICreatePaymentDTO";
import {Method, Payment, StatusPayment} from "../../entities/Payment";

class PaymentsRepositoryInMemory implements IPaymentsRepository {
    payments: Payment[] = [];

    async create(data: ICreatePaymentDTO): Promise<Payment> {
        const { code, method, status, value, installments, taxes, discount, total } = data;
        const payment = new Payment();
        Object.assign(payment, { code, method, status, value, installments, taxes, discount, total });
        this.payments.push(payment)
        return payment;
    }

    async findById(id: string): Promise<Payment> {
        return this.payments.find((payment) => payment.id === id);
    }

    async findByMethod(method: Method): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.method === method);
    }

    async findByStatus(status: StatusPayment): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.status === status);
    }

    async list(): Promise<Payment[]> {
        return this.payments;
    }

    async updateStatus(id: string, status: StatusPayment): Promise<void> {
        const paymentIndex = this.payments.findIndex((payment) => payment.id === id);
        this.payments[paymentIndex].status = status;
    }

}

export { PaymentsRepositoryInMemory };