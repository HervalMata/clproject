import {inject, injectable} from "tsyringe";
import {IWishlistsRepository} from "../repositories/IWishlistsRepository";
import {IProductsRepository} from "../../products/repositories/IProductsRepository";
import {WishlistNotExistError} from "../errors/WishlistNotExistError";

interface IRequest {
    id?: string;
    user_id: string;
    products_id: string[];
}

@injectable()
class CreateWishlistService {

    constructor(
        @inject("WishlistsRepository")
        private wishlistsRepository: IWishlistsRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ) {}

    async execute({ id, user_id, products_id }: IRequest): Promise<void> {
        const wishlist_old = await this.wishlistsRepository.findWishlistByUser(user_id);
        if (wishlist_old) {
            await this.wishlistsRepository.delete(wishlist_old.id);
        }
        await this.wishlistsRepository.create({id, user_id});
        const wishlist = await this.wishlistsRepository.findWishlistByUser(user_id);
        const wishlist_id = wishlist.id;
        const wishlistExists = await this.wishlistsRepository.findById(wishlist_id);
        if (!wishlistExists) {
            throw new WishlistNotExistError();
        }
        wishlistExists.products = await this.productsRepository.findByIds(
            products_id
        );

        //await this.wishlistsRepository.create(wishlistExists);
    }
}

export { CreateWishlistService };