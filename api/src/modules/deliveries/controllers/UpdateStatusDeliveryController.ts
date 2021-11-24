import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateStatusDeliveryService} from "../services/UpdateStatusDeliveryService";

class UpdateStatusDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const {status_delivery_id} = req.body;
        const updateStatusDeliveryService = container.resolve(UpdateStatusDeliveryService);
        await updateStatusDeliveryService.execute({id, status_delivery_id});
        return res.status(204).send();
    }
}

export {UpdateStatusDeliveryController};