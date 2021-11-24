import {inject, injectable} from "tsyringe";
import {IDeliveriesRepository} from "../repositories/IDeliveriesRepository";
import {Delivery} from "../entities/Delivery";

interface IRequest {
    id: string;
}

@injectable()
class GetDeliveryService {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository
    ) {
    }

    async execute({id}: IRequest): Promise<Delivery> {
        return await this.deliveriesRepository.findById(id);
    }
}

export {GetDeliveryService};