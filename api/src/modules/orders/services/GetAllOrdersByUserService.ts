import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {Order} from "../entities/Order";

interface IRequest {
    user_id: string;
}

@injectable()
class GetAllOrdersByUserService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<Order[]> {
        return await this.ordersRepository.findByUser(user_id);
    }
}

export { GetAllOrdersByUserService };