import {inject, injectable} from "tsyringe";
import {IStatusOrderRepository} from "../repositories/IStatusOrderRepository";
import {ICreateStatusOrderDTO} from "../dtos/ICreateStatusOrderDTO";
import {StatusOrderExistentError} from "../errors/StatusOrderExistentError";

@injectable()
class CreateStatusOrderService {

    constructor(
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {
    }

    async execute({status_order}: ICreateStatusOrderDTO): Promise<void> {
        const status_order_existent = await this.statusOrderRepository.findByStatusOrder(status_order);
        if (status_order_existent) {
            throw new StatusOrderExistentError();
        }
        await this.statusOrderRepository.create({status_order});
    }
}

export {CreateStatusOrderService};