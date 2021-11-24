import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllDeliveriesService} from "../services/GetAllDeliveriesService";

class GetAllDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllDeliveriesService = container.resolve(GetAllDeliveriesService);
        const deliveries = await getAllDeliveriesService.execute();
        return res.status(200).json(deliveries);
    }
}

export {GetAllDeliveriesController};