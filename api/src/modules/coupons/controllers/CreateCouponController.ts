import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateCouponService} from "../services/CreateCouponService";

class CreateCouponController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { type, value, expire_date } = req.body;
        const createCouponService = container.resolve(CreateCouponService);
        await createCouponService.execute({type, value, expire_date} );
        return res.status(201).send();
    }
}

export { CreateCouponController };