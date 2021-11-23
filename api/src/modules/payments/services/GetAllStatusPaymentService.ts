import {inject, injectable} from "tsyringe";
import {IStatusOrderRepository} from "../../orders/repositories/IStatusOrderRepository";
import {StatusOrder} from "modules/orders/entities/StatusOrder";

@injectable()
class GetAllStatusPaymentService {

    constructor(
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {
    }

    async execute(): Promise<StatusOrder[]> {
        return await this.statusOrderRepository.list();
    }
}

export {GetAllStatusPaymentService};