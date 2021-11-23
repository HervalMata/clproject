interface ICreatePaymentDTO {
    id?: string;
    code: string;
    method_id: string;
    status_payment_id?: string;
    value: number;
    installments: number;
    taxes: number;
    discount?: number;
    total: number;
}

export { ICreatePaymentDTO };