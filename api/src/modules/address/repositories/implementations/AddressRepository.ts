import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { Address } from "../../entities/Address";
import {IAddressRepository} from "../IAddressRepository";
import {getRepository, Repository} from "typeorm";

class AddressRepository implements IAddressRepository {
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }

    async create(data: ICreateAddressDTO): Promise<void> {
        const {
            id, user_id, type, street,
            number, postal_code, district, city, state, complement, country
        } = data;
        const address = this.repository.create({
            id, user_id, type, street,
            number, postal_code, district, city, state, complement, country
        });
        await this.repository.save(address);
    }

    async findById(id: string): Promise<Address> {
        return await this.repository.findOne({id});
    }

    async findByUserId(user_id: string): Promise<Address[]> {
        return await this.repository.find({user_id});
    }

    async update({id, user_id, type, street,
                     number, postal_code, district, city, state, complement, country
                 }: ICreateAddressDTO): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({
                type: type,
                street: street,
                number: number,
                complement: complement,
                district: district,
                postal_code: postal_code,
                city: city,
                state: state,
                country: "Brasil"
            })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

}

export { AddressRepository };