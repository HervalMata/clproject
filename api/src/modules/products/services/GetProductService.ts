import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";

interface IRequest {
    id: string;
}

@injectable()
class GetProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id }: IRequest): Promise<Product> {
        return await this.productsRepository.findById(id);
    }
}

export { GetProductService };