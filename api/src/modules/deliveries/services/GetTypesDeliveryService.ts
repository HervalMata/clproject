import {inject, injectable} from "tsyringe";
import {TypesDelivery} from "../entities/TypesDelivery";
import {ITypesDeliveryRepository} from "../repositories/ITypesDeliveryRepository";

interface IRequest {
    id: string;
}

@injectable()
class GetTypesDeliveryService {

    constructor(
        @inject("TypesDeliveryRepository")
        private typesDeliveryRepository: ITypesDeliveryRepository
    ) {
    }

    async execute({id}: IRequest): Promise<TypesDelivery> {
        return await this.typesDeliveryRepository.findById(id);
    }
}

export {GetTypesDeliveryService};