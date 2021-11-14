import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {ColorsRepository} from "../../colors/repositories/implementations/ColorsRepository";
import {Product} from "../entities/Product";
import {ProductNotExistsError} from "../errors/ProductNotExistsError";

interface IRequest {
    product_id: string;
    colors_id: string[];
}

@injectable()
class CreateColorsProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository,
        @inject("ColorsRepository")
        private colorsRepository: ColorsRepository
    ) {}

    async execute({ product_id, colors_id }: IRequest): Promise<Product> {
        const productExists = await this.productsRepository.findById(product_id);
        if (!productExists) {
            throw new ProductNotExistsError();
        }
        productExists.colors = await this.colorsRepository.findByIds(
            colors_id
        );

        await this.productsRepository.create(productExists);

        return productExists;
    }
}

export { CreateColorsProductService };