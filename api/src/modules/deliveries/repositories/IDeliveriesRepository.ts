import {ICreateDeliveriesDTO} from "../dtos/ICreateDeliveriesDTO";
import {Delivery} from "../entities/Delivery";

interface IDeliveriesRepository {
    create(data: ICreateDeliveriesDTO): Promise<Delivery>;

    findById(id: string): Promise<Delivery>;

    findByType(type_delivery_id: string): Promise<Delivery[]>;

    findByStatus(status_delivery_id: string): Promise<Delivery[]>;

    list(): Promise<Delivery[]>;

    update(id: string, postal_code: string, type_delivery_id: string, prize: number): Promise<void>;

    updateCost(id: string, is_free_cost: boolean, cost: number): Promise<void>;

    updateStatus(id: string, status_delivery_id: string): Promise<void>;

    findByPostalCode(postal_code: string): Promise<Delivery>;
}

export { IDeliveriesRepository };