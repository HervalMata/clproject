import { ICreateCategoriesDTO } from "../dtos/ICreateCategoriesDTO";
import { Category } from "../entities/Category";

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoriesDTO): Promise<void>;
    activate(id: string, isActive: boolean): Promise<void>;
    findActivate(isActive: boolean): Promise<Category[]>;
    findByID(id: string): Promise<Category>;
}

export { ICategoryRepository };