import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {StatusOrder} from "../entities/Order";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

interface IRequest {
    id: string;
    status: StatusOrder;
}

@injectable()
class UpdateStatusOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("DateProvider")
        private dateProvider: DayjsDateProvider
    ) {}
    
    async execute({ id, status }: IRequest): Promise<void> {
        await this.ordersRepository.updateStatus(id, status);
        const order = await this.ordersRepository.findById(id);
        if (status === StatusOrder.payed) {
            order.payed_date = this.dateProvider.dateNow();
        } else if (status === StatusOrder.cancelled) {
            order.cancelled_date = this.dateProvider.dateNow();
        } else if (status === StatusOrder.finished) {
            order.finished_date = this.dateProvider.dateNow();
        }
        await this.ordersRepository.create(order);
    }
}

export { UpdateStatusOrderService };