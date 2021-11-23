import {ICreateStatusOrderDTO} from "../../dtos/ICreateStatusOrderDTO";
import {StatusOrder} from "../../entities/StatusOrder";
import {IStatusOrderRepository} from "../IStatusOrderRepository";
import {getRepository, Repository} from "typeorm";

class StatusOrderRepository implements IStatusOrderRepository {
    private repository: Repository<StatusOrder>;

    constructor() {
        this.repository = getRepository(StatusOrder);
    }

    async create(data: ICreateStatusOrderDTO): Promise<void> {
        const {id, status_order} = data;
        const statusOrder = this.repository.create({id, status_order});
        await this.repository.save(statusOrder);
    }

    async findById(id: string): Promise<StatusOrder> {
        return await this.repository.findOne(id);
    }

    async findByStatusOrder(status_order: string): Promise<StatusOrder> {
        return await this.repository.findOne({status_order});
    }

    async list(): Promise<StatusOrder[]> {
        return await this.repository.find();
    }

}

export {StatusOrderRepository};