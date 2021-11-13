import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetFeaturedProductsService} from "../services/GetFeaturedProductsService";

class GetFeaturedProductsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getFeaturedProductsService = container.resolve(GetFeaturedProductsService);
        const featured_products = await getFeaturedProductsService.execute({ is_featured: true });
        return res.status(200).json(featured_products);
    }
}

export { GetFeaturedProductsController };