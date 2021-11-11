import {ICategoryRepository} from "../ICategoryRepository";
import {ICreateCategoriesDTO} from "../../dtos/ICreateCategoriesDTO";
import {Category} from "../../entities/Category";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async activate(id: string, isActive: boolean): Promise<void> {
        const categoryIndex = this.categories.findIndex((category) => category.id === id);
        this.categories[categoryIndex].isActive = isActive;
    }

    async create({name, description}: ICreateCategoriesDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name, description
        });

        this.categories.push(category);
    }

    async findActivate(isActive: boolean): Promise<Category[]> {
        return this.categories.filter((category) => {
            if (category.isActive === true) {
                return category;
            }
            return null;
        });
    }

    async findByID(id: string): Promise<Category> {
        return this.categories.find((category) => category.id === id);
    }

    async findByName(name: string): Promise<Category> {
        return this.categories.find((category) => category.name === name);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }

}

export { CategoryRepositoryInMemory };