import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllPaymentsService} from "../services/GetAllPaymentsService";

class GetAllPaymentsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllPaymentsService = container.resolve(GetAllPaymentsService);
        const payments = await getAllPaymentsService.execute();
        return res.status(200).json(payments);
    }
}

export {GetAllPaymentsController};