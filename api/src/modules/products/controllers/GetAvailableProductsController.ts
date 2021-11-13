import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAvailableProductsService} from "../services/GetAvailableProductsService";

class GetAvailableProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, category_id } = req.body;
        const getAvailableProductsService = container.resolve(GetAvailableProductsService);
        const products = await getAvailableProductsService.execute({ name, category_id });
        return res.status(200).json(products);
    }
}

export { GetAvailableProductsController };