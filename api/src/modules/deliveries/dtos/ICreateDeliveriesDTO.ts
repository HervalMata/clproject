import {StatusDelivery, Type } from "../entities/Delivery";

interface ICreateDeliveriesDTO {
    id?: string;
    code: string;
    type: Type;
    status?: StatusDelivery;
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