import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllMaterialsService} from "../services/GetAllMaterialsService";

class GetAllMaterialsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllMaterialsService = container.resolve(GetAllMaterialsService);
        const all = await getAllMaterialsService.execute();
        return res.json(all);
    }
}

export { GetAllMaterialsController };