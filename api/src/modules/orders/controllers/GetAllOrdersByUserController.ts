import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllOrdersByUserService} from "../services/GetAllOrdersByUserService";

class GetAllOrdersByUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {user_id} = req.params;
        console.log(req.params)
        const getAllOrdersByUserService = container.resolve(GetAllOrdersByUserService);
        const orders = await getAllOrdersByUserService.execute({user_id});
        return res.status(200).json(orders);
    }
}

export { GetAllOrdersByUserController };