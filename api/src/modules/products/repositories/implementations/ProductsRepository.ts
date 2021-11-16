import {IProductsRepository} from "../IProductsRepository";
import {ICreateProductDTO} from "../../dtos/ICreateProductDTO";
import {Product} from "../../entities/Product";
import {getRepository, Repository } from "typeorm";

class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async create(data : ICreateProductDTO): Promise<void> {
        const { id, name, description, stock, price, category_id, colors, materials } = data;
        const product = this.repository.create({ id, name, description, stock, price, category_id, colors, materials });
        await this.repository.save(product);
    }

    async findAvailable(name?: string, category_id?: string): Promise<Product[]> {
        const productsQuery = await this.repository
            .createQueryBuilder("p")
            .leftJoinAndSelect("p.colors", "color")
            .leftJoinAndSelect("p.materials", "material")
            .where("p.available = :available", { available: true });

        if (name) {
            productsQuery.andWhere("p.name = :name", { name });
        }

        if (category_id) {
            productsQuery.andWhere("p.category_id = :category_id", { category_id });
        }
        console.log(productsQuery)
        return await productsQuery.getMany();
    }

    async findById(id: string): Promise<Product> {
        return await this.repository.findOne({
            where: { id: id },
            relations: ['colors', 'materials'],
        });
    }

    async findByIdAndAvailability(id: string, available: boolean): Promise<Product> {
        return await this.repository.findOne({
            where: [{ id: id }, {available: true}],
            relations: ['colors', 'materials'],
        });
    }

    async findByName(name: string): Promise<Product> {
        return await this.repository.findOne({name});
    }

    async findProductByCategory(category_id: string, available: boolean): Promise<Product[]> {
        return await this.repository.find({
            where: { category_id, available: true },
            relations: ['colors', 'materials'],
        });
    }

    async list(): Promise<Product[]> {
        return await this.repository.find({
            relations: ['colors', 'materials']
        });
    }

    async update(id, name, description): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ name: name, description: description })
            .where("id = :id")
            .setParameters({ id }).execute();
    }

    async updateAvailability(product_id: string, available: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ available: available, })
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

    async updateFeatured(product_id: string, is_featured: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ is_featured: is_featured, })
            .where("id = :product_id")
            .setParameters({ product_id }).execute();
    }

    async findFeatured(is_featured: boolean, available: boolean): Promise<Product[]> {
        console.log(is_featured, available)
        return await this.repository.find(
            {
                where: {is_featured: true, available: true},
                relations: ['colors', 'materials'],
            });
    }

    async findOffer(is_offer: boolean, available: boolean): Promise<Product[]> {
        return await this.repository.find({
        where: { is_offer: true, available: true },
            relations: ['colors', 'materials'],
        });
    }

    async findByIds(ids: string[]): Promise<Product[]> {
        return await this.repository.findByIds(ids);
    }

}

export { ProductsRepository };