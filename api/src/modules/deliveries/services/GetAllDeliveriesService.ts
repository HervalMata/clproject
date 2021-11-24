import {inject, injectable} from "tsyringe";
import {IDeliveriesRepository} from "../repositories/IDeliveriesRepository";
import {Delivery} from "../entities/Delivery";

@injectable()
class GetAllDeliveriesService {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository
    ) {
    }

    async execute(): Promise<Delivery[]> {
        return await this.deliveriesRepository.list();
    }
}

export {GetAllDeliveriesService};