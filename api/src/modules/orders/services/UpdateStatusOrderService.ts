import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";

import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {IStatusOrderRepository} from "../repositories/IStatusOrderRepository";

interface IRequest {
    id: string;
    status_order_id: string;
}

@injectable()
class UpdateStatusOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("DateProvider")
        private dateProvider: DayjsDateProvider,
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {
    }

    async execute({id, status_order_id}: IRequest): Promise<void> {
        const statusOrder = await this.statusOrderRepository.findById(status_order_id);
        const status_order = statusOrder.status_order;
        const order = await this.ordersRepository.findById(id);
        if (status_order === "payed") {
            order.payed_date = this.dateProvider.dateNow();
        } else if (status_order === "cancelled") {
            order.cancelled_date = this.dateProvider.dateNow();
        } else if (status_order === "finished") {
            order.finished_date = this.dateProvider.dateNow();
        }
        await this.ordersRepository.updateStatus(id, status_order_id);
    }
}

export { UpdateStatusOrderService };