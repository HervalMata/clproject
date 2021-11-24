import {inject, injectable} from "tsyringe";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {IDeliveriesRepository} from "../repositories/IDeliveriesRepository";
import {IStatusDeliveryRepository} from "../repositories/IStatusDeliveryRepository";

interface IRequest {
    id: string;
    status_delivery_id: string;
}

@injectable()
class UpdateStatusDeliveryService {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,
        @inject("DayjsDateProvider")
        private dateProvider: DayjsDateProvider,
        @inject("StatusDeliveryRepository")
        private statusDeliveryRepository: IStatusDeliveryRepository
    ) {
    }

    async execute({id, status_delivery_id}: IRequest): Promise<void> {
        const statusDelivery = await this.statusDeliveryRepository.findById(status_delivery_id);
        const status_delivery = statusDelivery.status_delivery;
        const delivery = await this.deliveriesRepository.findById(id);
        if (status_delivery === "deliver_the_carrier") {
            delivery.deliver_the_carrier_date = this.dateProvider.dateNow();
        } else if (status_delivery === "on_way") {
            delivery.on_way_date = this.dateProvider.dateNow();
        } else if (status_delivery === "delivered") {
            delivery.delivered_date = this.dateProvider.dateNow();
        }
        await this.deliveriesRepository.updateStatus(id, status_delivery_id);
    }
}

export {UpdateStatusDeliveryService};