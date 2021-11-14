import {IProductsRepository} from "../IProductsRepository";
import {ICreateProductDTO} from "../../dtos/ICreateProductDTO";
import {Product} from "../../entities/Product";

class ProductsRepositoryInMemory implements IProductsRepository {
    products: Product[] = [];

    async create({id, name, description, stock, price, category_id, colors, materials}: ICreateProductDTO): Promise<void> {
        const product = new Product();
        Object.assign(product, {
            id, name, description, stock, price, category_id, colors, materials
        });
        this.products.push(product);
    }

    async findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        return this.products.filter((product) => {
            if (
                product.available === true &&
                (name ? product.name === name : true) &&
                (category_id ? product.category_id === category_id : true)
            ) {
                return product;
            }
            return null;
        });
    }

    async findById(id: string): Promise<Product> {
        return this.products.find((product) => product.id === id);
    }

    async findByIdAndAvailability(id: string, available: boolean): Promise<Product> {
        return this.products.find((product) => [product.id === id && product.available === true]);
    }

    async findByName(name: string): Promise<Product> {
        return this.products.find((product) => product.name === name);
    }

    async findFeatured(is_featured: boolean): Promise<Product[]> {
        return this.products.filter((product) => product.is_featured === true);
    }

    async findOffer(is_offer: boolean): Promise<Product[]> {
        return this.products.filter((product) => product.is_offer === true);
    }

    async findProductByCategory(category_id: string): Promise<Product[]> {
        return this.products.filter((products) => {
            if (products.category_id === category_id) {
                return products;
            }
            return null;
        });
    }

    async list(): Promise<Product[]> {
        return this.products;
    }

    async update(id: string, name: string, description: string): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === id);
        this.products[productIndex].name = name;
        this.products[productIndex].description = description;
    }

    async updateAvailability(product_id: string, available: boolean): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].available = available;
    }

    async updateFeatured(product_id: string, featured: boolean): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].is_featured = featured;
    }

    async updateOffer(product_id: string, is_offer: boolean, offer_price: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].is_offer = is_offer;
        this.products[productIndex].offer_price = offer_price;
    }

    async updatePrice(product_id: string, price: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].price = price;
    }

    async updateStock(product_id: string, stock: number): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].stock = stock;
    }

}

export { ProductsRepositoryInMemory };