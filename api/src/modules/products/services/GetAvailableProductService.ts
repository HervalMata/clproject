import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    name?: string;
    category_id?: string;
}

@injectable()
class GetAvailableProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ name, category_id }: IRequest): Promise<Product[]> {
        return await this.productsRepository.findAvailable(name, category_id);
    }
}

export { GetAvailableProductService };