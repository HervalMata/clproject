import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetMaterialService} from "../services/GetMaterialService";

class GetMaterialController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getMaterialService = container.resolve(GetMaterialService);
        const color = await getMaterialService.execute({id});
        return res.status(200).json(color);
    }
}

export { GetMaterialController };