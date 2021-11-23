import {ICreateStatusDeliveryDTO} from "../dtos/ICreateStatusDeliveryDTO";
import {StatusDelivery} from "../entities/StatusDelivery";

interface IStatusDeliveryRepository {
    create(data: ICreateStatusDeliveryDTO): Promise<void>;

    list(): Promise<StatusDelivery[]>;

    findById(id: string): Promise<StatusDelivery>;

    findByStatusDelivery(status_delivery: string): Promise<StatusDelivery>;
}

export {IStatusDeliveryRepository};