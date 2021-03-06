import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetOrderByUserService} from "../services/GetOrderByUserService";

class GetOrderByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { id: user_id } = req.user;
        console.log("1", user_id)
        const getOrderByUserService = container.resolve(GetOrderByUserService);
        const orders = await getOrderByUserService.execute({id: id, user_id: user_id});
        return res.status(200).json(orders);
    }
}

export { GetOrderByUserController };