import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateProductService} from "../services/UpdateProductService";

class UpdateProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name, description } = req.body;
        const updateProductService = container.resolve(UpdateProductService);
        await updateProductService.execute({id, name, description});
        return res.status(204).send();
    }
}

export { UpdateProductController };