import {inject, injectable} from "tsyringe";
import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

@injectable()
class GetAvailableCategoriesService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {
    }

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.findActivate(true);
    }
}

export { GetAvailableCategoriesService };