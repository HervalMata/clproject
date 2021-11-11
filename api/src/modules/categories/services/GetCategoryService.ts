import {inject, injectable} from "tsyringe";
import {ICategoryRepository} from "../repositories/ICategoryRepository";
import {Category} from "../entities/Category";

interface IRequest {
    id: string;
}

@injectable()
class GetCategoryService {

    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ id }: IRequest): Promise<Category> {
        return await this.categoryRepository.findByID(id);
    }
}

export { GetCategoryService };