import {ProductImagesRepository} from "../implementations/ProductImagesRepository";
import {ProductImage} from "../../entities/ProductImage";

// @ts-ignore
class ProductImagesRepositoryInMemory implements ProductImagesRepository{

    productImages: ProductImage[] = [];

    async create(product_id: string, image_name: string): Promise<ProductImage> {
        const productImages = new ProductImage();
        Object.assign(productImages, {
            product_id, image_name,
        });

        this.productImages.push(productImages);
        return productImages;
    }

}

export { ProductImagesRepositoryInMemory };