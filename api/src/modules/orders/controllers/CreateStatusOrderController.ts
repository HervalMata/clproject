import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateStatusOrderService} from "../services/CreateStatusOrderService";

class CreateStatusOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {status_order} = req.body;
        const createStatusOrderService = container.resolve(CreateStatusOrderService);
        await createStatusOrderService.execute({status_order});
        return res.status(201).send();
    }
}

export {CreateStatusOrderController};