import "reflect-metadata"
import {inject, injectable} from "tsyringe";
import {User} from "../entities/User";
import {IUsersRepository} from "../repositories/IUsersRepository";

interface IRequest {
    id: string;
}

@injectable()
class GetUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id }: IRequest): Promise<User> {
        return await this.usersRepository.findById(id);
    }
}

export { GetUserService };