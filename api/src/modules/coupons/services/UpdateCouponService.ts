import {inject, injectable} from "tsyringe";
import {ICouponsRepository} from "../repositories/ICouponsRepository";

interface IRequest {
    id: string;
    expire_date: Date;
}

@injectable()
class UpdateCouponService {

    constructor(
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository
    ) {}

    async execute({ id, expire_date }: IRequest): Promise<void> {
        await this.couponsRepository.update(id, expire_date);
    }
}

export { UpdateCouponService };