import {Request, Response} from "express";
import { container } from "tsyringe";
import { GetAllUsersService } from "../services/GetAllUsersService";

class GetAllUsersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsersService = container.resolve(GetAllUsersService);

        const all = await listUsersService.execute();

        return res.json(all);
    }
}

export { GetAllUsersController };