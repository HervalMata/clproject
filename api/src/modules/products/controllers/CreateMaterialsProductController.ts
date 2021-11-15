import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateMaterialsProductService} from "../services/CreateMaterialsProductService";

class CreateMaterialsProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { materials_id } = request.body;
        console.log(id, materials_id)
        const createMaterialsProductService = container.resolve(CreateMaterialsProductService);
        const products = await createMaterialsProductService.execute({ product_id: id, materials_id });
        return response.json(products);
    }
}

export { CreateMaterialsProductController };