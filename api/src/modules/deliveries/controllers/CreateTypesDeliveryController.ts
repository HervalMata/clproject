import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateTypesDeliveryService} from "../services/CreateTypesDeliveryService";

class CreateTypesDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {type_delivery} = req.body;
        const createTypesDeliveryService = container.resolve(CreateTypesDeliveryService);
        await createTypesDeliveryService.execute({type_delivery});
        return res.status(201).send();
    }
}

export {CreateTypesDeliveryController};