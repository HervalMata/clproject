import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllStatusDeliveryService} from "../services/GetAllStatusDeliveryService";

class GetAllStatusDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllStatusDeliveryService = container.resolve(GetAllStatusDeliveryService);
        const status = await getAllStatusDeliveryService.execute();
        return res.status(200).json(status);
    }

}

export {GetAllStatusDeliveryController};