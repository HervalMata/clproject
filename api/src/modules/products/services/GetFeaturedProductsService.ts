import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    is_featured: boolean;
}

@injectable()
class GetFeaturedProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ is_featured }: IRequest): Promise<Product[]> {
        return await this.productsRepository.findFeatured(is_featured);
    }
}

export { GetFeaturedProductsService };