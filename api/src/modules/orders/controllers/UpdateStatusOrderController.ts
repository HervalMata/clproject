import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateStatusOrderService} from "../services/UpdateStatusOrderService";

class UpdateStatusOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const {status_order_id} = req.body;
        const updateStatusOrderService = container.resolve(UpdateStatusOrderService);
        await updateStatusOrderService.execute({id, status_order_id});
        return res.status(204).send();
    }
}

export { UpdateStatusOrderController };