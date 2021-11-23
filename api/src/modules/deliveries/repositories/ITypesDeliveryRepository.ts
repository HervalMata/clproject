import {ICreateTypesDeliveryDTO} from "../dtos/ICreateTypesDeliveryDTO";
import {TypesDelivery} from "../entities/TypesDelivery";

interface ITypesDeliveryRepository {
    create(data: ICreateTypesDeliveryDTO): Promise<void>;

    list(): Promise<TypesDelivery[]>;

    findById(id: string): Promise<TypesDelivery>;

    findByTypeDelivery(type_delivery: string): Promise<TypesDelivery>;
}

export {ITypesDeliveryRepository};