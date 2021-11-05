import {Request, Response} from "express";
import { container } from "tsyringe";
import { UpdateAdminUserService } from "../services/UpdateAdminUserService";

class UpdateAdminUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { is_admin } = req.body;
        const activateAdminUsers = container.resolve(UpdateAdminUserService);
        const users = await activateAdminUsers.execute({
            id: id as string,
            is_admin: is_admin as boolean
        });
        return res.status(200).send();
    }
}

export { UpdateAdminUserController };