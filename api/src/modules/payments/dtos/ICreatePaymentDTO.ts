import { Method, StatusPayment } from "../entities/Payment";

interface ICreatePaymentDTO {
    id?: string;
    code: string;
    method: Method;
    status: StatusPayment;
    value: number;
    installments: number;
    taxes: number;
    discount?: number;
    total: number;
}

export { ICreatePaymentDTO };