import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetAllCouponsService} from "../services/GetAllCouponsService";

class GetAllCouponsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllCouponsService = container.resolve(GetAllCouponsService);
        const all = await getAllCouponsService.execute();
        return res.json(all);
    }
}

export { GetAllCouponsController };