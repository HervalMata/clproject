import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

@injectable()
class GetOfferProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.findOffer(true,  true);
    }
}

export { GetOfferProductsService };