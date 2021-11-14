import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    id?: string;
    name?: string;
    description?: string;
}

@injectable()
class UpdateProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, name, description }: IRequest): Promise<void> {
        return await this.productsRepository.update(id, name, description)
    }
}

export { UpdateProductService };