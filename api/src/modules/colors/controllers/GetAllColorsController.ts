import { Request, Response } from "express";
import {container} from "tsyringe";
import {GetAllColorsService} from "../services/GetAllColorsService";

class GetAllColorsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllColorsService = container.resolve(GetAllColorsService);
        const all = await getAllColorsService.execute();
        return res.json(all);
    }
}

export { GetAllColorsController };