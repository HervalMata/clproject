import {inject, injectable} from "tsyringe";
import { IUsersProfileRepository } from "../repositories/IUsersProfileRepository";
import {deleteFile} from "../../../utils/file";

interface IRequest {
    user_id: string;
    phone_number?: string;
    avatar?: string;
}

@injectable()
class UpdateUsersProfileService {

    constructor(
        @inject("UsersProfileRepository")
        private usersProfileRepository: IUsersProfileRepository
    ) {}

    async execute({ user_id, phone_number, avatar }: IRequest): Promise<void> {
        const usersProfile = await this.usersProfileRepository.findByUserId(user_id);

        if (avatar) {
            if (usersProfile.avatar) {
                await deleteFile(`./tmp/avatar/${usersProfile.avatar}`);
            }
            usersProfile.avatar = avatar;
        }

        return await this.usersProfileRepository.update(user_id, phone_number, usersProfile.avatar);
    }
}

export { UpdateUsersProfileService };