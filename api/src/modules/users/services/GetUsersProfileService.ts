import {inject, injectable} from "tsyringe";
import { UsersProfile } from "../entities/UsersProfile";
import { IUsersProfileRepository } from "../repositories/IUsersProfileRepository";

interface IRequest {
    user_id: string;
}

@injectable()
class GetUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<UsersProfile> {
        return await this.usersProfileRepository.findByUserId(user_id);
    }
}

export { GetUsersProfileService };