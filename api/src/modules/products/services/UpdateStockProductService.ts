import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";

interface IRequest {
    product_id: string;
    stock: number;
}

@injectable()
class UpdateStockProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ product_id, stock }: IRequest): Promise<void> {
        return await this.productsRepository.updateStock(product_id, stock);
    }
}

export { UpdateStockProductService };