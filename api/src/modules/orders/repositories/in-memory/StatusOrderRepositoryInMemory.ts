import {IStatusOrderRepository} from "../IStatusOrderRepository";
import {ICreateStatusOrderDTO} from "../../dtos/ICreateStatusOrderDTO";
import {StatusOrder} from "../../entities/StatusOrder";

class StatusOrderRepositoryInMemory implements IStatusOrderRepository {
    statusOrder: StatusOrder[] = [];

    async create(data: ICreateStatusOrderDTO): Promise<void> {
        const {status_order} = data;
        const statusOrder = new StatusOrder();
        Object.assign(statusOrder, {status_order});
        this.statusOrder.push(statusOrder);
    }

    async findById(id: string): Promise<StatusOrder> {

        return this.statusOrder.find((statusOrder) => statusOrder.id === id);
    }

    async findByStatusOrder(status_order: string): Promise<StatusOrder> {

        return this.statusOrder.find((statusOrder) => statusOrder.status_order === status_order);
    }

    async list(): Promise<StatusOrder[]> {
        return this.statusOrder;
    }

}

export {StatusOrderRepositoryInMemory};