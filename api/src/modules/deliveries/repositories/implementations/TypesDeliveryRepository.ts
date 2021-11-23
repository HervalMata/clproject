import {ICreateTypesDeliveryDTO} from "../../dtos/ICreateTypesDeliveryDTO";
import {TypesDelivery} from "../../entities/TypesDelivery";
import {ITypesDeliveryRepository} from "../ITypesDeliveryRepository";
import {getRepository, Repository} from "typeorm";

class TypesDeliveryRepository implements ITypesDeliveryRepository {
    private repository: Repository<TypesDelivery>;

    constructor() {
        this.repository = getRepository(TypesDelivery);
    }

    async create(data: ICreateTypesDeliveryDTO): Promise<void> {
        const {id, type_delivery} = data;
        const typeDelivery = this.repository.create({id, type_delivery});
        await this.repository.save(typeDelivery);
    }

    async findById(id: string): Promise<TypesDelivery> {
        return await this.repository.findOne(id);
    }

    async findByTypeDelivery(type_delivery: string): Promise<TypesDelivery> {
        return await this.repository.findOne({type_delivery});
    }

    async list(): Promise<TypesDelivery[]> {
        return await this.repository.find();
    }

}

export {TypesDeliveryRepository};