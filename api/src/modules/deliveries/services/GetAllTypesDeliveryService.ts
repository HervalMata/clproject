import {inject, injectable} from "tsyringe";
import {TypesDelivery} from "../entities/TypesDelivery";
import {ITypesDeliveryRepository} from "../repositories/ITypesDeliveryRepository";

@injectable()
class GetAllTypesDeliveryService {

    constructor(
        @inject("TypesDeliveryRepository")
        private typesDeliveryRepository: ITypesDeliveryRepository
    ) {
    }

    async execute(): Promise<TypesDelivery[]> {
        return await this.typesDeliveryRepository.list();
    }
}

export {GetAllTypesDeliveryService};