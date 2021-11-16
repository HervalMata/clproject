import {ICreateWishlistDTO} from "../dtos/ICreateWishlistDTO";
import {Wishlist} from "../entities/Wishlist";

interface IWishlistsRepository {
    create(data: ICreateWishlistDTO): Promise<void>;
    findWishlistByUser(user_id: string): Promise<Wishlist>;
    delete(id: string): Promise<any>;
    findById(id: string ): Promise<Wishlist>;
}

export { IWishlistsRepository };