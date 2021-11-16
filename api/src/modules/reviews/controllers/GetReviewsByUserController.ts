import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetReviewsByUserService} from "../services/GetReviewsByUserService";

class GetReviewsByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;
        const getReviewsByUserService = container.resolve(GetReviewsByUserService);
        const reviews = await getReviewsByUserService.execute({ user_id: id as string });
        return res.status(200).json(reviews);
    }
}

export { GetReviewsByUserController };