import {inject, injectable} from "tsyringe";
import {ICategoryRepository} from "../repositories/ICategoryRepository";

interface IRequest {
    id: string;
    isActive: boolean;
}

@injectable()
class UpdateActiveCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ id, isActive }: IRequest): Promise<void> {
        const category = this.categoryRepository.findByID(id);
        return await this.categoryRepository.activate(
            id,
            isActive
        );
    }
}

export { UpdateActiveCategoryService };