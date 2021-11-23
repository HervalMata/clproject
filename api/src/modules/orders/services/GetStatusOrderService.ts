import {inject, injectable} from "tsyringe";
import {IStatusOrderRepository} from "../repositories/IStatusOrderRepository";
import {StatusOrder} from "../entities/StatusOrder";

interface IRequest {
    id: string;
}

@injectable()
class GetStatusOrderService {

    constructor(
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {
    }

    async execute({id}: IRequest): Promise<StatusOrder> {
        return await this.statusOrderRepository.findById(id);
    }
}

export {GetStatusOrderService};