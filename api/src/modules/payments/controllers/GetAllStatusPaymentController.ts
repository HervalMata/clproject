import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllStatusPaymentService} from "../services/GetAllStatusPaymentService";

class GetAllStatusPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllStatusPaymentService = container.resolve(GetAllStatusPaymentService);
        const status = await getAllStatusPaymentService.execute();
        return res.status(200).json(status);
    }

}

export {GetAllStatusPaymentController};