import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetDeliveryService} from "../services/GetDeliveryService";

class GetDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getDeliveryService = container.resolve(GetDeliveryService);
        const delivery = await getDeliveryService.execute({id});
        return res.status(200).json(delivery);
    }

}

export {GetDeliveryController};