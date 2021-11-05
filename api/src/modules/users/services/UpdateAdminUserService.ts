import {inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
    id: string;
    is_admin: boolean;
}

@injectable()
class UpdateAdminUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {
    }

    async execute({  id, is_admin }: IRequest): Promise<void> {
        return await this.usersRepository.activeAdmin(
            id,
            is_admin
        );
    }
}

export { UpdateAdminUserService };