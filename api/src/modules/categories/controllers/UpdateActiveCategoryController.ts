import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateActiveCategoryService} from "../services/UpdateActiveCategoryService";

class UpdateActiveCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isActive } = req.body;
        const updateActiveCategoryService = container.resolve(UpdateActiveCategoryService);
        await updateActiveCategoryService.execute({
            id: id as string,
            isActive: isActive as boolean
        });
        return res.status(200).send();
    }
}

export { UpdateActiveCategoryController };