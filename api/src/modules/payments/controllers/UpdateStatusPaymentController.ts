import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateStatusPaymentService} from "../services/UpdateStatusPaymentService";

class UpdateStatusPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const {status_payment_id} = req.body;
        const updateStatusPaymentService = container.resolve(UpdateStatusPaymentService);
        await updateStatusPaymentService.execute({id, status_payment_id});
        return res.status(204).send();
    }
}

export {UpdateStatusPaymentController};