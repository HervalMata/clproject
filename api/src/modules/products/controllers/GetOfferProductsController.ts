import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetOfferProductsService} from "../services/GetOfferProductsService";

class GetOfferProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getOfferProductsService = container.resolve(GetOfferProductsService);
        const offer_products = await getOfferProductsService.execute({ is_offer: true });
        return res.status(200).json(offer_products);
    }
}

export { GetOfferProductsController };