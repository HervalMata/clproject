import {ICreateProductDTO} from "../dtos/ICreateProductDTO";
import {Product} from "../entities/Product";

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<void>;
    findByName(name: string): Promise<Product>;
    findById(id: string): Promise<Product>;
    findProductByCategory(category_id: string, available: boolean): Promise<Product[]>;
    findAvailable(name?: string, category_id?: string): Promise<Product[]>;
    updateAvailability(product_id: string, available: boolean): Promise<void>;
    updateStock(product_id: string, stock: number): Promise<void>;
    updatePrice(product_id: string, price: number): Promise<void>;
    updateFeatured(product_id: string, featured: boolean): Promise<void>;
    updateOffer(product_id: string, isOffer: boolean, offer_price: number): Promise<void>;
    update(id: string, name: string, description: string): Promise<void>;
    list(): Promise<Product[]>;
    findByIdAndAvailability(id: string, available: boolean): Promise<Product>;
    findFeatured(is_featured: boolean, available: boolean): Promise<Product[]>;
    findOffer(is_offer: boolean, available: boolean): Promise<Product[]>;
}

export { IProductsRepository };