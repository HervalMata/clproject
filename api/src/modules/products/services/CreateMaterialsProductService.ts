import {inject, injectable} from "tsyringe";
import {IProductsRepository} from "../repositories/IProductsRepository";
import {Product} from "../entities/Product";
import {ProductNotExistsError} from "../errors/ProductNotExistsError";
import {MaterialsRepository} from "../../materials/repositories/implemntations/MaterialsRepository";

interface IRequest {
    product_id: string;
    materials_id: string[];
}

@injectable()
class CreateMaterialsProductService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository,
        @inject("MaterialsRepository")
        private materialsRepository: MaterialsRepository
    ) {}

    async execute({ product_id, materials_id }: IRequest): Promise<Product> {
        const productExists = await this.productsRepository.findById(product_id);
        if (!productExists) {
            throw new ProductNotExistsError();
        }
        productExists.materials = await this.materialsRepository.findByIds(
            materials_id
        );

        await this.productsRepository.create(productExists);

        return productExists;
    }
}

export { CreateMaterialsProductService };