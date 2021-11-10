import {inject, injectable} from "tsyringe";
import { Address } from "../entities/Address";
import { IAddressRepository } from "../repositories/IAddressRepository";

interface IRequest {
    user_id: string;
}

@injectable()
class GetUsersAddressService {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<Address> {
        return await this.addressRepository.findByUserId(user_id);
    }
}

export { GetUsersAddressService };