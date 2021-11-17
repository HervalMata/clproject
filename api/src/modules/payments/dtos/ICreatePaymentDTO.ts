import { Method, Status } from "../entities/Payment";

interface ICreatePaymentDTO {
    id?: string;
    method: Method;
    status: Status;
    value: number;
    installments: number;
    taxes: number;
    discount?: number;
    total: number;
}

export { ICreatePaymentDTO };