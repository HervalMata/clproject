import {IWishlistsRepository} from "../IWishlistsRepository";
import {ICreateWishlistDTO} from "../../dtos/ICreateWishlistDTO";
import {Wishlist} from "../../entities/Wishlist";
import {getRepository, Repository} from "typeorm";

class WishlistsRepository implements IWishlistsRepository {
    private repository: Repository<Wishlist>;

    constructor() {
        this.repository = getRepository(Wishlist);
    }

    async findById(id: string): Promise<Wishlist> {
        return await this.repository.findOne(id);
    }

    async create(data: ICreateWishlistDTO): Promise<void> {
        const { id, user_id, products } = data;
        const wishlist = this.repository.create({id, user_id, products});
        await this.repository.save(wishlist);
    }

    async delete(id: string): Promise<any> {
        await this.repository.delete(id);
    }

    async findWishlistByUser(user_id: string): Promise<Wishlist> {
        return await this.repository.findOne({
            where: {user_id: user_id},
            relations: ['products']
        });
    }

}

export { WishlistsRepository };