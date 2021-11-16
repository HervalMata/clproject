import {IProductsRepository} from "../IProductsRepository";
import {ICreateProductDTO} from "../../dtos/ICreateProductDTO";
import {Product} from "../../entities/Product";

class ProductsRepositoryInMemory implements IProductsRepository {
    products: Product[] = [];

    async create({name, description, stock, price, category_id, colors, materials}: ICreateProductDTO): Promise<void> {
        const product = new Product();
        Object.assign(product, {
            name, description, stock, price, category_id, colors, materials
        });
        this.products.push(product);
    }

    async findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        let availableProducts = this.products.filter((product) => product.available);

        if (!name && !category_id) return availableProducts;

        availableProducts = availableProducts.filter((product) => {
            if (product.name === name) return true;
            if (product.category_id === category_id) return true;
            return false;
        });

        return availableProducts;
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

    async findFeatured(is_featured: boolean, available: boolean): Promise<Product[]> {
        return this.products.filter((products) => {
            if (products.is_featured === true && products.available === true) {
                return products;
            }
            return null;
        });
    }

    async findOffer(is_offer: boolean, available: boolean): Promise<Product[]> {
        return this.products.filter((products) => {
            if (products.is_offer === true && products.available === true) {
                return products;
            }
            return null;
        });
    }

    async findProductByCategory(category_id: string, available: boolean): Promise<Product[]> {
        return this.products.filter((products) => {
            if (products.category_id === category_id && products.available === true) {
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

    async updateFeatured(product_id: string, is_featured: boolean): Promise<void> {
        const productIndex = this.products.findIndex((product) => product.id === product_id);
        this.products[productIndex].is_featured = is_featured;
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

    async findByIds(ids: string[]): Promise<Product[]> {
        return this.products.filter((product) =>
            ids.includes(product.id)
        );
    }

}

export { ProductsRepositoryInMemory };