import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    product_id: string;
    is_featured: boolean;
}

@injectable()
class UpdateFeaturedProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ product_id, is_featured }: IRequest): Promise<void> {
        return await this.productsRepository.updateAvailability(product_id, is_featured);
    }
}

export { UpdateFeaturedProductService };