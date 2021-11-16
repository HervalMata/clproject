import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetWishlistByUserService} from "../services/GetWishlistByUserService";

class GetWishlistByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;
        const getWishlistByUserService = container.resolve(GetWishlistByUserService);
        const wishlist = await getWishlistByUserService.execute({ user_id: id });
        return res.status(200).json(wishlist);
    }
}

export { GetWishlistByUserController };