import { Request, Response } from "express";
import {container} from "tsyringe";
import {GetColorService} from "../services/GetColorService";

class GetColorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getColorService = container.resolve(GetColorService);
        const color = await getColorService.execute({id});
        return res.status(200).json(color);
    }
}

export { GetColorController };