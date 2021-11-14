import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    product_id: string;
    price: number;
}

@injectable()
class UpdatePriceProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ product_id, price }: IRequest): Promise<void> {
        return await this.productsRepository.updatePrice(product_id, price);
    }
}

export { UpdatePriceProductService };