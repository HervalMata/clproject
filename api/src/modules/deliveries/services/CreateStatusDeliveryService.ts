import {inject, injectable} from "tsyringe";
import {IStatusDeliveryRepository} from "../repositories/IStatusDeliveryRepository";
import {StatusDeliveryExistentError} from "../errors/StatusDeliveryExistentError";
import {ICreateStatusDeliveryDTO} from "../dtos/ICreateStatusDeliveryDTO";

@injectable()
class CreateStatusDeliveryService {

    constructor(
        @inject("StatusDeliveryRepository")
        private statusDeliveryRepository: IStatusDeliveryRepository
    ) {
    }

    async execute({status_delivery}: ICreateStatusDeliveryDTO): Promise<void> {
        const status_delivery_existent = await this.statusDeliveryRepository.findByStatusDelivery(status_delivery);
        if (status_delivery_existent) {
            throw new StatusDeliveryExistentError();
        }
        await this.statusDeliveryRepository.create({status_delivery});
    }
}

export {CreateStatusDeliveryService};