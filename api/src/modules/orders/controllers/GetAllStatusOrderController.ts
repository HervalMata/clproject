import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllStatusOrderService} from "../services/GetAllStatusOrderService";

class GetAllStatusOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllStatusOrderService = container.resolve(GetAllStatusOrderService);
        const status = await getAllStatusOrderService.execute();
        return res.status(200).json(status);
    }

}

export {GetAllStatusOrderController};