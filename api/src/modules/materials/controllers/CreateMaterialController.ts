import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateMaterialService} from "../services/CreateMaterialService";

class CreateMaterialController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createMaterialService = container.resolve(CreateMaterialService);
        await createMaterialService.execute({ name });
        return res.status(201).send();
    }
}

export { CreateMaterialController };