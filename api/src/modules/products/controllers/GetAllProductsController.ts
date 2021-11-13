import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllProductsService} from "../services/GetAllProductsService";

class GetAllProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllProductsService = container.resolve(GetAllProductsService);
        const all = await getAllProductsService.execute();
        return res.json(all);
    }
}

export { GetAllProductsController };