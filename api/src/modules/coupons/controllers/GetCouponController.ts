import {Request, Response} from "express";
import {container} from "tsyringe";
import {GetCouponService} from "../services/GetCouponService";

class GetCouponController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const getCouponService = container.resolve(GetCouponService);
        const coupon = await getCouponService.execute({id});
        return res.json(coupon);
    }
}

export { GetCouponController };