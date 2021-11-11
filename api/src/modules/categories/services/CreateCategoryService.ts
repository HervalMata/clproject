import {inject, injectable} from "tsyringe";
import {ICategoryRepository} from "../repositories/ICategoryRepository";
import {CategoryAlreadyExistsError} from "../errors/CategoryAlreadyExistsError";

interface IRequest {
    name: string,
    description: string;
}

@injectable()
class CreateCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new CategoryAlreadyExistsError();
        }
        await this.categoryRepository.create({name, description});
    }
}

export { CreateCategoryService };