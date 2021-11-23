import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateStatusPaymentService} from "../services/CreateStatusPaymentService";

class CreateStatusPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {status_payment} = req.body;
        const createStatusPaymentService = container.resolve(CreateStatusPaymentService);
        await createStatusPaymentService.execute({status_payment});
        return res.status(201).send();
    }
}

export {CreateStatusPaymentController};