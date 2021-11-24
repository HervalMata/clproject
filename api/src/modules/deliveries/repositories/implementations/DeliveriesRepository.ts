import {IDeliveriesRepository} from "../IDeliveriesRepository";
import {ICreateDeliveriesDTO} from "../../dtos/ICreateDeliveriesDTO";
import {Delivery} from "../../entities/Delivery";
import {getRepository, Repository} from "typeorm";

class DeliveriesRepository implements IDeliveriesRepository {
    private repository: Repository<Delivery>;

    constructor() {
        this.repository = getRepository(Delivery);
    }

    async create(data: ICreateDeliveriesDTO): Promise<Delivery> {
        const {
            id,
            type_delivery_id,
            status_delivery_id,
            cost,
            prize,
            street,
            number,
            complement,
            district,
            postal_code,
            city,
            state,
            code,
            country
        } = data;
        const delivery = this.repository.create({
            id,
            type_delivery_id,
            status_delivery_id,
            cost,
            prize,
            street,
            number,
            complement,
            district,
            postal_code,
            city,
            state,
            code,
            country
        });

        return await this.repository.save(delivery);
    }

    async findById(id: string): Promise<Delivery> {
        return await this.repository.findOne({
            where: {id},
            relations: ['statusDelivery', 'typesDelivery']
        });
    }

    async findByPostalCode(postal_code: string): Promise<Delivery> {
        return await this.repository.findOne({
            where: {postal_code},
            relations: ['statusDelivery', 'typesDelivery']
        });
    }

    async findByStatus(status_delivery_id: string): Promise<Delivery[]> {
        return await this.repository.find({
            where: {status_delivery_id},
            relations: ['statusDelivery', 'typesDelivery']
        });
    }

    async findByType(type_delivery_id: string): Promise<Delivery[]> {
        return await this.repository.find({
            where: {type_delivery_id},
            relations: ['statusDelivery', 'typesDelivery']
        });
    }

    async list(): Promise<Delivery[]> {
        return await this.repository.find({
            relations: ['statusDelivery', 'typesDelivery']
        });
    }

    async update(id: string, postal_code: string, type_delivery_id: string, prize: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({postal_code: postal_code, type_delivery_id: type_delivery_id, prize: prize})
            .where("id = :id").setParameters({id})
            .execute();
    }

    async updateCost(id: string, is_free_cost: boolean, cost: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ is_free_cost: is_free_cost, cost: cost })
            .where("id = :id").setParameters({ id })
            .execute();
    }

    async updateStatus(id: string, status_delivery_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({status_delivery_id: status_delivery_id})
            .where("id = :id").setParameters({id})
            .execute();
    }

}

export { DeliveriesRepository };