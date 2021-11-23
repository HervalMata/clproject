import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetTypesDeliveryService} from "../services/GetTypesDeliveryService";

class GetTypesDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getTypesDeliveryService = container.resolve(GetTypesDeliveryService);
        const type = await getTypesDeliveryService.execute({id});
        return res.status(200).json(type);
    }

}

export {GetTypesDeliveryController};