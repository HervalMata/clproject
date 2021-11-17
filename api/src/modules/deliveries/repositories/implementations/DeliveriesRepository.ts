import {IDeliveriesRepository} from "../IDeliveriesRepository";
import {ICreateDeliveriesDTO} from "../../dtos/ICreateDeliveriesDTO";
import {Delivery, Status, Type} from "../../entities/Delivery";
import {getRepository, Repository} from "typeorm";

class DeliveriesRepository implements IDeliveriesRepository {
    private repository: Repository<Delivery>;

    constructor() {
        this.repository = getRepository(Delivery);
    }

    async create({ id, type, status, cost, prize, street, number, complement, district, postal_code, city, state }: ICreateDeliveriesDTO): Promise<void> {
        const delivery = this.repository.create({ id, type, status, cost, prize, street, number, complement, district, postal_code, city, state });
        await this.repository.save(delivery);
    }

    async findById(id: string): Promise<Delivery> {
        return await this.repository.findOne(id);
    }

    async findByPostalCode(postal_code: string): Promise<Delivery> {
        return await this.repository.findOne(postal_code);
    }

    async findByStatus(status: Status): Promise<Delivery[]> {
        return await this.repository.find({ status });
    }

    async findByType(type: Type): Promise<Delivery[]> {
        return await this.repository.find({ type });
    }

    async list(): Promise<Delivery[]> {
        return await this.repository.find();
    }

    async update({id, type, cost, prize, postal_code}: ICreateDeliveriesDTO): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ postal_code: postal_code, type: type, cost: cost, prize: prize })
            .where("id = :id").setParameters({ id })
            .execute();
    }

    async updateStatus(id: string, status: Status): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ status: status })
            .where("id = :id").setParameters({ id })
            .execute();
    }

}

export { DeliveriesRepository };