import {inject, injectable} from "tsyringe";
import {IWishlistsRepository} from "../repositories/IWishlistsRepository";
import {Wishlist} from "../entities/Wishlist";

interface IRequest {
    user_id: string;
}

@injectable()
class GetWishlistByUserService {

    constructor(
        @inject("WishlistsRepository")
        private wishlistsRepository: IWishlistsRepository
    ) {}

    async execute({ user_id }: IRequest): Promise<Wishlist> {
        return await this.wishlistsRepository.findWishlistByUser(user_id);
    }
}

export { GetWishlistByUserService };