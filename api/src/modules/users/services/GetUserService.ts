import {inject, injectable} from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
    id: string;
}

@injectable()
class GetUserService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersRepository
    ) {}

    async execute({ id }: IRequest): Promise<User> {
        return await this.usersProfileRepository.findById(id);
    }
}

export { GetUserService };