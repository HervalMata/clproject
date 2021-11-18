import {ICreateDeliveriesDTO} from "../dtos/ICreateDeliveriesDTO";
import {Delivery, StatusDelivery, Type} from "../entities/Delivery";

interface IDeliveriesRepository {
    create(data: ICreateDeliveriesDTO): Promise<Delivery>;
    findById(id: string): Promise<Delivery>;
    findByType(type: Type): Promise<Delivery[]>;
    findByStatus(status: StatusDelivery): Promise<Delivery[]>;
    list(): Promise<Delivery[]>;
    update(id: string, postal_code: string, type: Type, prize: number): Promise<void>;
    updateCost(id: string, is_free_cost: boolean, cost: number): Promise<void>;
    updateStatus(id: string, status: StatusDelivery): Promise<void>;
    findByPostalCode(postal_code: string): Promise<Delivery>;
}

export { IDeliveriesRepository };