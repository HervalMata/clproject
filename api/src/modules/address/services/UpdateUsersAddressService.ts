import {inject, injectable} from "tsyringe";
import {Type} from "../entities/Address";
import { IAddressRepository } from "../repositories/IAddressRepository";

interface IRequest {
    id: string;
    type: Type;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country: string;
}

@injectable()
class UpdateUsersAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ id, type, street,
                      number, postal_code, district, city, state, complement, country
                  }: IRequest): Promise<void> {
        const usersAddress = await this.addressRepository.findById(id);
        return await this.addressRepository.update({
            id, user_id: usersAddress.user_id, type, street,
            number, postal_code, district, city, state, complement, country
        });
    }
}

export { UpdateUsersAddressService };