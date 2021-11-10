import {Request, Response} from "express";
import { container } from "tsyringe";
import { UpdateUsersProfileService } from "../services/UpdateUsersProfileService";

class UpdateUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const { phone_number } = req.body;
        const avatar = req.file?.filename;
        const updateUsersProfileService = container.resolve(UpdateUsersProfileService);
        await updateUsersProfileService.execute({
            user_id,
            phone_number,
            avatar,
        });
        return res.status(200).send();
    }
}

export { UpdateUsersProfileController };