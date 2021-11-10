import {Request, Response} from "express";
import { container } from "tsyringe";
import { GetUsersProfileService } from "../services/GetUsersProfileService";

class GetUsersProfileController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;
        const getUsersProfileService = container.resolve(GetUsersProfileService);
        const get_profile = await getUsersProfileService.execute({ user_id: user_id });
        return res.status(200).json(get_profile);
    }
}

export {GetUsersProfileController };