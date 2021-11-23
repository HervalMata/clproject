import {inject, injectable} from "tsyringe";
import {IStatusOrderRepository} from "../repositories/IStatusOrderRepository";
import {StatusOrder} from "../entities/StatusOrder";

@injectable()
class GetAllStatusOrderService {

    constructor(
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {
    }

    async execute(): Promise<StatusOrder[]> {
        return await this.statusOrderRepository.list();
    }
}

export {GetAllStatusOrderService};