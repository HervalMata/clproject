import {Request, Response} from "express";
import {container} from "tsyringe";
import {UpdateCouponService} from "../services/UpdateCouponService";

class UpdateCouponController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { expire_date } = req.body;
        const updateCouponService = container.resolve(UpdateCouponService);
        await updateCouponService.execute({id, expire_date});
        return res.status(204).send();
    }
}

export { UpdateCouponController };