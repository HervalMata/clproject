import {Request, Response} from "express";
import { container } from "tsyringe";
import { CreateUsersProfileService } from "../services/CreateUsersProfileService";

class CreateUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;
        const avatar = req.file.filename;
        const { cpf, birth_date, phone_number } = req.body;
        const createUsersProfileService = container.resolve(CreateUsersProfileService);
        await createUsersProfileService.execute({ user_id: id, cpf, birth_date, phone_number, avatar });
        return res.status(201).send();
    }
}

export { CreateUsersProfileController };