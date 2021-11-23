import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetStatusOrderService} from "../services/GetStatusOrderService";

class GetStatusOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getStatusOrderService = container.resolve(GetStatusOrderService);
        const status = await getStatusOrderService.execute({id});
        return res.status(200).json(status);
    }

}

export {GetStatusOrderController};