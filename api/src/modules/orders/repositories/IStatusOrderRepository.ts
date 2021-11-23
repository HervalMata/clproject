import {ICreateStatusOrderDTO} from "../dtos/ICreateStatusOrderDTO";
import {StatusOrder} from "../entities/StatusOrder";


interface IStatusOrderRepository {
    create(data: ICreateStatusOrderDTO): Promise<void>;

    list(): Promise<StatusOrder[]>;

    findById(id: string): Promise<StatusOrder>;

    findByStatusOrder(status_order: string): Promise<StatusOrder>;
}

export {IStatusOrderRepository};