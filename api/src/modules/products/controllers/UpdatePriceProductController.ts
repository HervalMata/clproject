import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdatePriceProductService} from "../services/UpdatePriceProductService";

class UpdatePriceProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { price } = req.body;
        const updatePriceProductService = container.resolve(UpdatePriceProductService);
        await updatePriceProductService.execute({product_id: id, price});
        return res.status(204).send();
    }
}

export { UpdatePriceProductController };