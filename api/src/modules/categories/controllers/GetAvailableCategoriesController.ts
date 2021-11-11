import {Request, Response} from "express";
import {container} from "tsyringe";
import { GetAvailableCategoriesService } from "../services/GetAvailableCategoriesService";

class GetAvailableCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listActivateCategories = container.resolve(GetAvailableCategoriesService);
        const categories = await listActivateCategories.execute();
        return res.status(200).json(categories);
    }
}

export { GetAvailableCategoriesController };