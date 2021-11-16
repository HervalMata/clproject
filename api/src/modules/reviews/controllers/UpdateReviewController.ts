import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateReviewService} from "../services/UpdateReviewService";

class UpdateReviewController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { review_id } = req.params;
        const { id } = req.user;
        const { description, rating } = req.body;
        const updateReviewsService = container.resolve(UpdateReviewService);
        await updateReviewsService.execute({ user_id: id, id: review_id, description, rating });
        return res.status(200).send();
    }
}

export { UpdateReviewController };