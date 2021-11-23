import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllTypesDeliveryService} from "../services/GetAllTypesDeliveryService";

class GetAllTypesDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllTypesDeliveryService = container.resolve(GetAllTypesDeliveryService);
        const types = await getAllTypesDeliveryService.execute();
        return res.status(200).json(types);
    }

}

export {GetAllTypesDeliveryController};