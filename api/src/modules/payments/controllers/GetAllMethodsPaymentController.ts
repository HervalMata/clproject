import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllMethodsPaymentService} from "../services/GetAllMethodsPaymentService";

class GetAllMethodsPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllMethodsPaymentService = container.resolve(GetAllMethodsPaymentService);
        const methods = await getAllMethodsPaymentService.execute();
        return res.status(200).json(methods);
    }

}

export {GetAllMethodsPaymentController};