import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

class GetAllCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllCategoriesService = container.resolve(GetAllCategoriesService);

        const all = await getAllCategoriesService.execute();

        return res.json(all);
    }
}

export { GetAllCategoriesController };