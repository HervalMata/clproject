import {ICreateDeliveriesDTO} from "../dtos/ICreateDeliveriesDTO";
import {Delivery, Status, Type} from "../entities/Delivery";

interface IDeliveriesRepository {
    create(data: ICreateDeliveriesDTO): Promise<void>;
    findById(id: string): Promise<Delivery>;
    findByType(type: Type): Promise<Delivery[]>;
    findByStatus(status: Status): Promise<Delivery[]>;
    list(): Promise<Delivery[]>;
    update(data: ICreateDeliveriesDTO): Promise<void>;
    updateStatus(id: string, status: Status): Promise<void>;
    findByPostalCode(postal_code: string): Promise<Delivery>;
}

export { IDeliveriesRepository };