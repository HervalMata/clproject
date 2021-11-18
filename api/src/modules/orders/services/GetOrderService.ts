import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {Order} from "../entities/Order";

interface IRequest {
    id: string;
}

@injectable()
class GetOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository
    ) {}

    async execute({ id }: IRequest): Promise<Order> {
        return await this.ordersRepository.findById(id);
    }
}

export { GetOrderService };