import {IUsersProfileRepository} from "../IUsersProfileRepository";
import {UsersProfile} from "../../entities/UsersProfile";
import { ICreateUsersProfileDTO } from "../../dtos/ICreateUsersProfileDTO";

class UsersProfileRepositoryInMemory implements IUsersProfileRepository {
    users_profile: UsersProfile[] = [];

    async create({user_id, cpf, birth_date, phone_number, avatar}: ICreateUsersProfileDTO): Promise<void> {
        const usersProfile = new UsersProfile();
        Object.assign(usersProfile, {
            user_id, cpf, birth_date, phone_number, avatar
        })
        this.users_profile.push(usersProfile);
    }

    async findByCpf(cpf: string): Promise<UsersProfile> {
        return this.users_profile.find((usersProfile) => usersProfile.cpf === cpf);
    }

    async findById(id: string): Promise<UsersProfile> {
        return this.users_profile.find((usersProfile) => usersProfile.id === id);
    }

    async findByUserId(user_id: string): Promise<UsersProfile> {
        return this.users_profile.find((usersProfile) => usersProfile.user_id === user_id);
    }

    async update(user_id: string, phone_number: string, avatar: string): Promise<void> {
        const usersProfileIndex = this.users_profile.findIndex((usersProfile) => usersProfile.user_id === user_id);
        this.users_profile[usersProfileIndex].phone_number = phone_number;
        this.users_profile[usersProfileIndex].avatar = avatar;
    }

}

export { UsersProfileRepositoryInMemory };