import {inject, injectable} from "tsyringe";
import {IStatusDeliveryRepository} from "../repositories/IStatusDeliveryRepository";
import {StatusDelivery} from "../entities/StatusDelivery";

interface IRequest {
    id: string;
}

@injectable()
class GetStatusDeliveryService {

    constructor(
        @inject("StatusDeliveryRepository")
        private statusDeliveryRepository: IStatusDeliveryRepository
    ) {
    }

    async execute({id}: IRequest): Promise<StatusDelivery> {
        return await this.statusDeliveryRepository.findById(id);
    }
}

export {GetStatusDeliveryService};