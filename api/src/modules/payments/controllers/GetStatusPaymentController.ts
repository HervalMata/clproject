import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetStatusPaymentService} from "../services/GetStatusPaymentService";

class GetStatusPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        console.log(id)
        const getStatusPaymentService = container.resolve(GetStatusPaymentService);
        const status_payment = await getStatusPaymentService.execute({id});
        console.log(status_payment)
        return res.status(200).json(status_payment);
    }

}

export {GetStatusPaymentController};