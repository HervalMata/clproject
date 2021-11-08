import {getRepository, Repository } from "typeorm";
import { ICreateUsersProfileDTO } from "../../dtos/ICreateUsersProfileDTO";
import { UsersProfile } from "../../entities/UsersProfile";
import {IUsersProfileRepository} from "../IUsersProfileRepository";

class UsersProfileRepository implements IUsersProfileRepository {
    private repository: Repository<UsersProfile>;

    constructor() {
        this.repository = getRepository(UsersProfile);
    }

    async create(data: ICreateUsersProfileDTO): Promise<void> {
        const { id, user_id, cpf, birth_date, phone_number, avatar } = data;
        const users_profile = this.repository.create({
            id, user_id, cpf, birth_date, phone_number, avatar
        });
        await this.repository.save(users_profile);
    }

    async findByCpf(cpf: string): Promise<UsersProfile> {
        return await this.repository.findOne(cpf);
    }

    async findById(id: string): Promise<UsersProfile> {
        return await this.repository.findOne(id);
    }

    async findByUserId(user_id: string): Promise<UsersProfile> {
        return await this.repository.findOne(user_id);
    }

    async update(user_id: string, phone_number: string, avatar: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ phone_number: phone_number, avatar: avatar})
            .where("user_id = :user_id")
            .setParameters({ user_id })
            .execute();
    }

}

export { UsersProfileRepository };