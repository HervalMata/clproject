import {inject, injectable} from "tsyringe";
import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../repositories/IAddressRepository";

@injectable()
class CreateUsersAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ user_id, type, street,
                      number, postal_code, district, city, state, complement, country
                  }: ICreateAddressDTO): Promise<void> {
        await this.addressRepository.create({ user_id, type, street,
            number, postal_code, district, city, state, complement, country
        });
    }
}

export { CreateUsersAddressService };