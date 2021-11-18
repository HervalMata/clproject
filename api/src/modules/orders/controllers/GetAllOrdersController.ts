import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllOrdersService} from "../services/GetAllOrdersService";

class GetAllOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllOrdersService = container.resolve(GetAllOrdersService);
        const orders = await getAllOrdersService.execute();
        return res.status(200).json(orders);
    }
}

export { GetAllOrdersController };