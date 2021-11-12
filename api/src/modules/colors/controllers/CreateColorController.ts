import { Request, Response } from "express";
import {container} from "tsyringe";
import { CreateColorService } from "../services/CreateColorService";

class CreateColorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createColorService = container.resolve(CreateColorService);
        await createColorService.execute({ name });
        return res.status(201).send();
    }
}

export { CreateColorController };