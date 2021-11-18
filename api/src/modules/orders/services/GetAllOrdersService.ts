import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {Order} from "../entities/Order";

@injectable()
class GetAllOrdersService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository
    ) {}

    async execute(): Promise<Order[]> {
        return await this.ordersRepository.list();
    }
}

export { GetAllOrdersService };