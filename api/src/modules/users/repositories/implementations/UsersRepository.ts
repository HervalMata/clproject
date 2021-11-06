import {getRepository, Repository } from "typeorm";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import {IUsersRepository} from "../IUsersRepository";

class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async activeAdmin(id: string, is_admin: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({is_admin: is_admin})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async activeSeller(id: string, is_seller: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({is_seller: is_seller})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async create(data: ICreateUsersDTO): Promise<User> {
        const { id, name, email, password, } = data;
        const user = this.repository.create({
            id, name, email, password,
        });
        return await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({email});
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async list(): Promise<User[]> {
        return await this.repository.find();
    }

}

export { UsersRepository };