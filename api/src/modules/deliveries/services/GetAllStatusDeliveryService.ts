import {inject, injectable} from "tsyringe";
import {IStatusDeliveryRepository} from "../repositories/IStatusDeliveryRepository";
import {StatusDelivery} from "../entities/StatusDelivery";

@injectable()
class GetAllStatusDeliveryService {

    constructor(
        @inject("StatusDeliveryRepository")
        private statusDeliveryRepository: IStatusDeliveryRepository
    ) {
    }

    async execute(): Promise<StatusDelivery[]> {
        return await this.statusDeliveryRepository.list();
    }
}

export {GetAllStatusDeliveryService};