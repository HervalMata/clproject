import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    name?: string;
    category_id?: string;
}

@injectable()
class GetAvailableProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ name, category_id }: IRequest): Promise<Product[]> {
        console.log(name)
        return await this.productsRepository.findAvailable(name, category_id);
    }
}

export { GetAvailableProductsService };