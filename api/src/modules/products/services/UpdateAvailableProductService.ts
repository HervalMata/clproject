import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    product_id: string;
    available: boolean;
}

@injectable()
class UpdateAvailableProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ product_id, available }: IRequest): Promise<void> {
        return await this.productsRepository.updateAvailability(product_id, available);
    }
}

export { UpdateAvailableProductService };