import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    is_offer: boolean;
}

@injectable()
class GetOfferProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ is_offer }: IRequest): Promise<Product[]> {
        return await this.productsRepository.findOffer(is_offer,  true);
    }
}

export { GetOfferProductsService };