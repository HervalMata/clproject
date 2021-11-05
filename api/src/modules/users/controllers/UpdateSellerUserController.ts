import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateSellerUserService} from "../services/UpdateSellerUserService";

class UpdateSellerUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { is_seller } = req.body;
        const activateSellerUsers = container.resolve(UpdateSellerUserService);
        const users = await activateSellerUsers.execute({
            id: id as string,
            is_seller: is_seller as boolean
        });
        return res.status(200).send();
    }
}

export { UpdateSellerUserController };