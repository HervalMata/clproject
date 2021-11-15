import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

@injectable()
class GetFeaturedProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.findFeatured(true, true);
    }
}

export { GetFeaturedProductsService };