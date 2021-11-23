import {inject, injectable} from "tsyringe";
import {ITypesDeliveryRepository} from "../repositories/ITypesDeliveryRepository";
import {ICreateTypesDeliveryDTO} from "../dtos/ICreateTypesDeliveryDTO";
import {TypeDeliveryExistentError} from "../errors/TypeDeliveryExistentError";

@injectable()
class CreateTypesDeliveryService {

    constructor(
        @inject("TypesDeliveryRepository")
        private typesDeliveryRepository: ITypesDeliveryRepository
    ) {
    }

    async execute({type_delivery}: ICreateTypesDeliveryDTO): Promise<void> {
        const types_delivery_existent = await this.typesDeliveryRepository.findByTypeDelivery(type_delivery);
        if (types_delivery_existent) {
            throw new TypeDeliveryExistentError();
        }
        await this.typesDeliveryRepository.create({type_delivery});
    }
}

export {CreateTypesDeliveryService};