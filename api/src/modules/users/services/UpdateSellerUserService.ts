import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../repositories/IUsersRepository";

interface IRequest {
    id: string;
    is_seller: boolean;
}

@injectable()
class UpdateSellerUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {
    }

    async execute({  id, is_seller }: IRequest): Promise<void> {
        return await this.usersRepository.activeSeller(
            id,
            is_seller
        );
    }
}

export { UpdateSellerUserService };