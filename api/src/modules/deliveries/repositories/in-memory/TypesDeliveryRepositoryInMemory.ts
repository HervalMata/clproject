import {ITypesDeliveryRepository} from "../ITypesDeliveryRepository";
import {TypesDelivery} from "../../entities/TypesDelivery";
import {ICreateTypesDeliveryDTO} from "../../dtos/ICreateTypesDeliveryDTO";

class TypesDeliveryRepositoryInMemory implements ITypesDeliveryRepository {
    typesDelivery: TypesDelivery[] = [];

    async create(data: ICreateTypesDeliveryDTO): Promise<void> {
        const {type_delivery} = data;
        const typesDelivery = new TypesDelivery();
        Object.assign(typesDelivery, {type_delivery});
        this.typesDelivery.push(typesDelivery);
    }

    async findById(id: string): Promise<TypesDelivery> {
        return this.typesDelivery.find((typesDelivery) => typesDelivery.id === id);
    }

    async findByTypeDelivery(type_delivery: string): Promise<TypesDelivery> {
        console.log(type_delivery)
        return this.typesDelivery.find((typesDelivery) => typesDelivery.type_delivery === type_delivery);
    }

    async list(): Promise<TypesDelivery[]> {
        return this.typesDelivery;
    }

}

export {TypesDeliveryRepositoryInMemory};