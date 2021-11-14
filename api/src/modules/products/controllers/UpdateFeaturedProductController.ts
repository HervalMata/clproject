import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateFeaturedProductService} from "../services/UpdateFeaturedProductService";

class UpdateFeaturedProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { is_featured } = req.body;
        const updateFeaturedProductService = container.resolve(UpdateFeaturedProductService);
        await updateFeaturedProductService.execute({product_id: id, is_featured});
        return res.status(204).send();
    }
}

export { UpdateFeaturedProductController };