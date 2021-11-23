import {ICreateStatusDeliveryDTO} from "../../dtos/ICreateStatusDeliveryDTO";
import {StatusDelivery} from "../../entities/StatusDelivery";
import {IStatusDeliveryRepository} from "../IStatusDeliveryRepository";
import {getRepository, Repository} from "typeorm";

class StatusDeliveryRepository implements IStatusDeliveryRepository {
    private repository: Repository<StatusDelivery>;

    constructor() {
        this.repository = getRepository(StatusDelivery);
    }

    async create(data: ICreateStatusDeliveryDTO): Promise<void> {
        const {id, status_delivery} = data;
        const statusDelivery = this.repository.create({id, status_delivery});
        await this.repository.save(statusDelivery);
    }

    async findById(id: string): Promise<StatusDelivery> {
        return await this.repository.findOne(id);
    }

    async findByStatusDelivery(status_delivery: string): Promise<StatusDelivery> {
        return await this.repository.findOne({status_delivery});
    }

    async list(): Promise<StatusDelivery[]> {
        return await this.repository.find();
    }

}

export {StatusDeliveryRepository};