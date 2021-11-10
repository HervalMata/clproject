import { ICreateAddressDTO } from "modules/address/dtos/ICreateAddressDTO";
import { Address } from "modules/address/entities/Address";
import {IAddressRepository} from "../IAddressRepository";

class AddressRepositoryInMemory implements IAddressRepository {
    private address: Address[] = [];

    async create({ id, user_id, type, street,
                     number, postal_code, district, city, state, complement, country}: ICreateAddressDTO): Promise<void> {
        const address = new Address();
        Object.assign(address, {
            id, user_id, type, street,
            number, postal_code, district, city, state, complement, country
        });
        this.address.push(address);
    }

    async findById(id: string): Promise<Address> {
        return this.address.find((address) => address.id === id);
    }

    async findByUserId(user_id: string): Promise<Address[]> {
        return this.address.filter((address) => address.user_id === user_id);
    }

    async update({ id, user_id, type, street,
                     number, postal_code, district, city, state, complement, country}: ICreateAddressDTO): Promise<void> {
        const addressIndex = this.address.findIndex((address) => address.id === id);
        this.address[addressIndex].type = type;
        this.address[addressIndex].street = street;
        this.address[addressIndex].number = number;
        this.address[addressIndex].complement = complement;
        this.address[addressIndex].postal_code = postal_code;
        this.address[addressIndex].district = district;
        this.address[addressIndex].city = city;
        this.address[addressIndex].state = state;
        this.address[addressIndex].country = "BRA";
    }

}

export { AddressRepositoryInMemory };