import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetPaymentService} from "../services/GetPaymentService";

class GetPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const getPaymentService = container.resolve(GetPaymentService);
        const payment = await getPaymentService.execute({id});
        return res.status(200).json(payment);
    }

}

export {GetPaymentController};