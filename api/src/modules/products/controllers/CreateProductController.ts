import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateProductService} from "../services/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, stock, price, category_id } = req.body;
        const createProductService = container.resolve(CreateProductService);
        const product = await createProductService.execute({
            name, description, stock, price, category_id
        });
        return res.status(201).json(product);
    }
}

export { CreateProductController };