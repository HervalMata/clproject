import {Request, Response} from "express";
import {container} from "tsyringe";
import {ApplyCouponService} from "../services/ApplyCouponService";

class ApplyCouponController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { coupon_code } = req.body;
        const applyCouponService = container.resolve(ApplyCouponService);
        await applyCouponService.execute({id, coupon_code});
        return res.status(200).send();
    }
}

export { ApplyCouponController };