import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import {IUsersRepository} from "../IUsersRepository";
import { v4 as uuidV4 } from "uuid";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async activeAdmin(id: string, is_admin: boolean): Promise<void> {
        const userIndex = this.users.findIndex((user) => user.id === id);
        this.users[userIndex].is_admin = is_admin;
    }

    async activeSeller(id: string, is_seller: boolean): Promise<void> {
        const userIndex = this.users.findIndex((user) => user.id === id);
        this.users[userIndex].is_seller = is_seller;
    }

    async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
        const user = new User();
        Object.assign(user, {
            name, email, password,
        });
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

    async list(): Promise<User[]> {
        return this.users;
    }

}

export { UsersRepositoryInMemory };