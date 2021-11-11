import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetCategoryService} from "../services/GetCategoryService";

class GetCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getCategoryService = container.resolve(GetCategoryService);
        const category = await getCategoryService.execute({id});
        return res.status(200).json(category);
    }
}

export { GetCategoryController };