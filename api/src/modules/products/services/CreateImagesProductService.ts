import {inject, injectable} from "tsyringe";
import {IProductImagesRepository} from "../repositories/IProductImagesRepository";

interface IRequest {
    product_id: string;
    images_name: string[];
}

@injectable()
class CreateImagesProductService {

    constructor(
        @inject("ProductImagesRepository")
        private productImagesRepository: IProductImagesRepository
    ) {}

    async execute({ product_id, images_name }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.productImagesRepository.create(product_id, image);
        });
    }
}

export { CreateImagesProductService };