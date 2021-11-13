import {IProductsRepository} from "../IProductsRepository";
import {ICreateProductDTO} from "../../dtos/ICreateProductDTO";
import {Product} from "../../entities/Product";
import {getRepository, Repository } from "typeorm";

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async create({ id, name, description, stock, price, category_id, colors, materials }: ICreateProductDTO): Promise<void> {
        const product = this.repository.create({ id, name, description, stock, price, category_id, colors, materials });
        await this.repository.save(product);
    }

    async findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        const productsQuery = await this.repository
            .createQueryBuilder("p")
            .where("p.available = :available", { available: true });

        if (name) {
            productsQuery.andWhere("p.name = :name", { name });
        }

        if (category_id) {
            productsQuery.andWhere("p.category_id = :category_id", { category_id });
        }

        return await productsQuery.getMany();
    }

    async findById(id: string): Promise<Product> {
        return await this.repository.findOne(id);
    }

    async findByIdAndAvailability(id: string, availability: boolean): Promise<Product> {
        return await this.repository.findOne({
            where: [{ id: id }, {availability: true}]
        });
    }

    async findByName(name: string): Promise<Product> {
        return await this.repository.findOne(name);
    }

    async findProductByCategory(category_id: string): Promise<Product[]> {
        return await this.repository.find({
            where: { category_id }
        });
    }

    async list(): Promise<Product[]> {
        return await this.repository.find();
    }

    async update({id, name, description}: ICreateProductDTO): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ name: name, description: description })
            .where("id = :id")
            .setParameters({ id }).execute();
    }

    async updateAvailability(product_id: string, availability: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ available: availability, })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

    async updateOffer(product_id: string, is_offer: boolean, offer_price: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ is_offer: is_offer, offer_price: offer_price })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

    async updatePrice(product_id: string, price: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ price: price, })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

    async updateStock(product_id: string, stock: number): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ stock: stock, })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

    async updateFeatured(product_id: string, featured: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ is_featured:featured, })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

}

export { ProductsRepository };