import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetOrderService} from "../services/GetOrderService";

class GetOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getOrderService = container.resolve(GetOrderService);
        const orders = await getOrderService.execute({id});
        return res.status(200).json(orders);
    }
}

export { GetOrderController };