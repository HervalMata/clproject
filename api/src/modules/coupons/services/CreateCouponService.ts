import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {CouponAlreadyExistsError} from "../errors/CouponAlreadyExistsError";
import {Type} from "../entities/Coupon";

interface IRequest {
    type: Type;
    value: number;
    expire_date: Date;
}

@injectable()
class CreateCouponService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ type, value, expire_date }: IRequest): Promise<void> {
        const code = "CODE - " + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        const couponAlreadyExists = await this.couponsRepository.findByCode(code);
        if (couponAlreadyExists) {
            throw new CouponAlreadyExistsError();
        }
        await this.couponsRepository.create({ code, type, value, expire_date });
    }
}

export { CreateCouponService };