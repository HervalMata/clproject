import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateWishlistService} from "../services/CreateWishlistService";

class CreateWishlistController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;
        const { products_id } = req.body;
        const createWishlistService = container.resolve(CreateWishlistService);
        await createWishlistService.execute({ user_id: id, products_id });
        return res.status(201).send();
    }
}

export { CreateWishlistController };