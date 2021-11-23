import {IStatusDeliveryRepository} from "../IStatusDeliveryRepository";
import {StatusDelivery} from "../../entities/StatusDelivery";
import {ICreateStatusDeliveryDTO} from "../../dtos/ICreateStatusDeliveryDTO";

class StatusDeliveryRepositoryInMemory implements IStatusDeliveryRepository {
    statusDelivery: StatusDelivery[] = [];

    async create(data: ICreateStatusDeliveryDTO): Promise<void> {
        const {status_delivery} = data;
        const statusDelivery = new StatusDelivery();
        Object.assign(statusDelivery, {status_delivery});
        this.statusDelivery.push(statusDelivery);
    }

    async findById(id: string): Promise<StatusDelivery> {
        // @ts-ignore
        return this.statusDelivery.find((statusDelivery) => statusDelivery.id === id);
    }

    async findByStatusDelivery(status_delivery: string): Promise<StatusDelivery> {
        // @ts-ignore
        return this.statusDelivery.find((statusDelivery) => statusDelivery.status_delivery === status_delivery);
    }

    async list(): Promise<StatusDelivery[]> {
        return this.statusDelivery;
    }

}

export {StatusDeliveryRepositoryInMemory};