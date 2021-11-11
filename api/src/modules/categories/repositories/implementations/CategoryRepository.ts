import { ICreateCategoriesDTO } from "../../dtos/ICreateCategoriesDTO";
import { Category } from "../../entities/Category";
import {getRepository, Repository } from "typeorm";
import {ICategoryRepository} from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async activate(id: string, isActive: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({isActive: isActive})
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

    async create({name, description}: ICreateCategoriesDTO): Promise<void> {
        const category = this.repository.create({
            name, description
        });

        await this.repository.save(category);
    }

    async findActivate(isActive: boolean): Promise<Category[]> {
        const categoriesQuery = await this.repository
            .createQueryBuilder("c")
            .where("c.isActive = :isActive", {
                isActive: true
            });
        return await categoriesQuery.getMany();
    }

    async findByID(id: string): Promise<Category> {
        return await this.repository.findOne(id);
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({name});
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

}

export { CategoryRepository };