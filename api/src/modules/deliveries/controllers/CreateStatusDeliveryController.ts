import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateStatusDeliveryService} from "../services/CreateStatusDeliveryService";

class CreateStatusDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {status_delivery} = req.body;
        const createStatusDeliveryService = container.resolve(CreateStatusDeliveryService);
        await createStatusDeliveryService.execute({status_delivery});
        return res.status(201).send();
    }
}

export {CreateStatusDeliveryController};