import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateOfferProductService} from "../services/UpdateOfferProductService";

class UpdateOfferProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { is_offer, offer_price } = req.body;
        const updateOfferProductService = container.resolve(UpdateOfferProductService);
        await updateOfferProductService.execute({product_id: id, is_offer, offer_price});
        return res.status(204).send();
    }
}

export { UpdateOfferProductController };