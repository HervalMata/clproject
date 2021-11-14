import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateAvailableProductService} from "../services/UpdateAvailableProductService";

class UpdateAvailableProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { available } = req.body;
        const updateAvailableProductService = container.resolve(UpdateAvailableProductService);
        await updateAvailableProductService.execute({product_id: id, available});
        return res.status(204).send();
    }
}

export { UpdateAvailableProductController };