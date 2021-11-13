import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetProductService} from "../services/GetProductService";

class GetProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getProductService = container.resolve(GetProductService);
        const product = await getProductService.execute({id});
        return res.status(200).json(product);
    }
}

export { GetProductController };