import {ICreateUsersDTO} from "../dtos/ICreateUsersDTO";
import {User} from "../entities/User";

interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    list(): Promise<User[]>;
    activeAdmin(id: string, is_admin: boolean): Promise<void>;
    activeSeller(id: string, is_seller: boolean): Promise<void>;
}

export { IUsersRepository };