import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetProductsByCategoryService} from "../services/GetProductsByCategoryService";

class GetProductsByCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { category_id } = req.params;
        const getProductsByCategory = container.resolve(GetProductsByCategoryService);
        const productsByCategory = await getProductsByCategory.execute({
            category_id: category_id as string,
        });
        return res.status(200).json(productsByCategory);
    }
}

export { GetProductsByCategoryController };