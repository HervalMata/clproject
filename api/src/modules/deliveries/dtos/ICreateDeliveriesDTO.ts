import {Status, Type } from "../entities/Delivery";

interface ICreateDeliveriesDTO {
    id?: string;
    type: Type;
    status: Status;
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