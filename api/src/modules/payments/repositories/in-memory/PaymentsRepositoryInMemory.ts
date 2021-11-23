import {IPaymentsRepository} from "../IPaymentsRepository";
import {ICreatePaymentDTO} from "../../dtos/ICreatePaymentDTO";
import {Payment} from "../../entities/Payment";

class PaymentsRepositoryInMemory implements IPaymentsRepository {
    payments: Payment[] = [];

    async create(data: ICreatePaymentDTO): Promise<Payment> {
        const {code, method_id, status_payment_id, value, installments, taxes, discount, total} = data;
        const payment = new Payment();
        Object.assign(payment, {code, method_id, status_payment_id, value, installments, taxes, discount, total});
        this.payments.push(payment)
        return payment;
    }

    async findById(id: string): Promise<Payment> {
        return this.payments.find((payment) => payment.id === id);
    }

    async findByMethod(method_id: string): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.method_id === method_id);
    }

    async findByStatus(status_payment_id: string): Promise<Payment[]> {
        return this.payments.filter((payment) => payment.status_payment_id === status_payment_id);
    }

    async list(): Promise<Payment[]> {
        return this.payments;
    }

    async updateStatus(id: string, status_payment_id: string): Promise<void> {
        const paymentIndex = this.payments.findIndex((payment) => payment.id === id);
        this.payments[paymentIndex].status_payment_id = status_payment_id;
    }

    async updateCoupon(id: string, total: number, discount: number): Promise<void> {
        const paymentIndex = this.payments.findIndex((payment) => payment.id === id);
        this.payments[paymentIndex].total = total;
        this.payments[paymentIndex].discount = discount;
    }

}

export { PaymentsRepositoryInMemory };