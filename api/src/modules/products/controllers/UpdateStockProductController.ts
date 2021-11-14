import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateStockProductService} from "../services/UpdateStockProductService";

class UpdateStockProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { stock } = req.body;
        const updateStockProductService = container.resolve(UpdateStockProductService);
        await updateStockProductService.execute({product_id: id, stock});
        return res.status(204).send();
    }
}

export { UpdateStockProductController };