import { ProductImage } from "../entities/ProductImage";

interface IProductImagesRepository {
    create(product_id: string, image_name: string): Promise<ProductImage>;
}

export { IProductImagesRepository };