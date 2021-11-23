import {IDeliveriesRepository} from "../IDeliveriesRepository";
import {ICreateDeliveriesDTO} from "../../dtos/ICreateDeliveriesDTO";
import {Delivery} from "../../entities/Delivery";

class DeliveriesRepositoryInMemory implements IDeliveriesRepository {
    deliveries: Delivery[] = [];

    async create(data: ICreateDeliveriesDTO): Promise<Delivery> {
        const {
            code,
            type_delivery_id,
            status_delivery_id,
            is_free_cost,
            cost,
            prize,
            street,
            number,
            complement,
            district,
            postal_code,
            city,
            state,
            country
        } = data;
        const delivery = new Delivery();
        Object.assign(delivery, {
            code,
            type_delivery_id,
            status_delivery_id,
            is_free_cost,
            cost,
            prize,
            street,
            number,
            complement,
            district,
            postal_code,
            city,
            state,
            country
        });
        this.deliveries.push(delivery)
        return delivery;
    }

    async findById(id: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.id === id);
    }

    async findByPostalCode(postal_code: string): Promise<Delivery> {
        return this.deliveries.find((delivery) => delivery.postal_code === postal_code);
    }

    async findByStatus(status_delivery_id: string): Promise<Delivery[]> {
        return this.deliveries.filter((delivery) => delivery.status_delivery_id === status_delivery_id);
    }

    async findByType(type_delivery_id: string): Promise<Delivery[]> {
        return this.deliveries.filter((delivery) => delivery.type_delivery_id === type_delivery_id);
    }

    async list(): Promise<Delivery[]> {
        return this.deliveries;
    }

    async update(id: string, postal_code: string, type_delivery_id: string, prize: number): Promise<void> {
        const deliveryIndex = this.deliveries.findIndex((delivery) => delivery.id === id);
        ;
        this.deliveries[deliveryIndex].prize = prize;
        this.deliveries[deliveryIndex].postal_code = postal_code;
        this.deliveries[deliveryIndex].type_delivery_id = type_delivery_id;
    }

    async updateCost(id: string, is_free_cost: boolean, cost: number): Promise<void> {
        const deliveryIndex = this.deliveries.findIndex((delivery) => delivery.id === id);
        this.deliveries[deliveryIndex].is_free_cost = is_free_cost;
        this.deliveries[deliveryIndex].cost = cost;
    }

    async updateStatus(id: string, status_delivery_id: string): Promise<void> {
        const deliveryIndex = this.deliveries.findIndex((delivery) => delivery.id === id);
        this.deliveries[deliveryIndex].status_delivery_id = status_delivery_id;
    }

}

export { DeliveriesRepositoryInMemory };