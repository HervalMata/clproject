import {inject, injectable} from "tsyringe";
import { Product } from "../entities/Product";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    category_id: string;
}

@injectable()
class GetProductsByCategoryService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ category_id }: IRequest): Promise<Product[]> {
        return await this.productsRepository.findProductByCategory(category_id);
    }
}

export { GetProductsByCategoryService };