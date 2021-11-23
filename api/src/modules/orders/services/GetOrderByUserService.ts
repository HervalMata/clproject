import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {Order} from "../entities/Order";

interface IRequest {
    id: string;
    user_id: string;
}

@injectable()
class GetOrderByUserService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository
    ) {}

    async execute({ id, user_id }: IRequest): Promise<Order> {
        console.log("2", user_id)
        return await this.ordersRepository.findByIdAndUser(id, user_id);
    }
}

export { GetOrderByUserService };