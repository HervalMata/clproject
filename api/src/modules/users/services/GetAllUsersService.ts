//import 'reflect-metadata';
import {inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import {User} from "../entities/User";

@injectable()
class GetAllUsersService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.list();
        console.log(JSON.stringify(users));
        return users;

    }
}

export { GetAllUsersService };