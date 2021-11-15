import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {ProductAlreadyExistsError} from "../errors/ProductAlreadyExistsError";

interface IRequest {
    name: string;
    description: string;
    stock: number;
    price: number;
    category_id: string;
}

@injectable()
class CreateProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ name, description, stock, price, category_id }: IRequest): Promise<void> {
        const productAlreadyExists = await this.productsRepository.findByName(name);
        if (productAlreadyExists) {
            throw new ProductAlreadyExistsError();
        }

        return await this.productsRepository.create({
            name, description, stock, price, category_id
        });
    }

}

export { CreateProductService };