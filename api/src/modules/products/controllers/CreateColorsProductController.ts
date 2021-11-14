import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateColorsProductService} from "../services/CreateColorsProductService";

class CreateColorsProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { colors_id } = request.body;
        const createColorsProductService = container.resolve(CreateColorsProductService);
        const products = await createColorsProductService.execute({ product_id: id, colors_id });
        return response.json(products);
    }
}

export { CreateColorsProductController };