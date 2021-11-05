import {Request, Response} from "express";
import { container } from "tsyringe";
import { GetUserService } from "../services/GetUserService";

class GetUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getUsersProfileService = container.resolve(GetUserService);
        await getUsersProfileService.execute({ id: id as string });
        return res.status(200).send();
    }
}

export { GetUserController };