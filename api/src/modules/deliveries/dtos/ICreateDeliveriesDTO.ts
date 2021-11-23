interface ICreateDeliveriesDTO {
    id?: string;
    code: string;
    type_delivery_id: string;
    status_delivery_id?: string;
    is_free_cost?: boolean;
    cost: number;
    prize: number;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country?: string;
}

export { ICreateDeliveriesDTO };