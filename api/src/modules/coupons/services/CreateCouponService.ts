import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";
import {ICreateCouponDTO} from "../dtos/ICreateCouponDTO";
import {CouponAlreadyExistsError} from "../errors/CouponAlreadyExistsError";

@injectable()
class CreateCouponService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ id, type, value, expire_date }: ICreateCouponDTO): Promise<void> {
        const code = "CODE - " + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes();
        const couponAlreadyExists = await this.couponsRepository.findByCode(code);
        if (couponAlreadyExists) {
            throw new CouponAlreadyExistsError();
        }
        await this.couponsRepository.create({ id, code, type, value, expire_date });
    }
}

export { CreateCouponService };