import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetStatusDeliveryService} from "../services/GetStatusDeliveryService";

class GetStatusDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getStatusDeliveryService = container.resolve(GetStatusDeliveryService);
        const status = await getStatusDeliveryService.execute({id});
        return res.status(200).json(status);
    }

}

export {GetStatusDeliveryController};