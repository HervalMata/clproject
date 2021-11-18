import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {ICouponsRepository} from "../../coupons/repositories/ICouponsRepository";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import {IPaymentsRepository} from "../../payments/repositories/IPaymentsRepository";
import {Type} from "../../coupons/entities/Coupon";

interface IRequest {
    id: string;
    coupon_code: string;
}

@injectable()
class ApplyCouponService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("CouponsRepository")
        private couponsRepository: ICouponsRepository,
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository,
        @inject("DateProvider")
        private dateProvider: DayjsDateProvider
    ) {}

    async execute({ id, coupon_code }: IRequest): Promise<void> {
        const coupon = await this.couponsRepository.findByCode(coupon_code);
        const expire_date =  coupon.expire_date;
        const is_valid = this.dateProvider.checkIsBefore(expire_date, this.dateProvider.dateNow());
        if (is_valid ){
            const order = await this.ordersRepository.findById(id);
            const payment = await this.paymentsRepository.findById(order.payment_id);
            order.coupon_code = coupon_code;
            payment.discount =  coupon.value;
            if (coupon.type === Type.fixed) {
                payment.total = payment.value - payment.discount + payment.taxes;
            } else if (coupon.type === Type.percentage) {
                payment.total = payment.value - (payment.value * payment.discount / 100) + payment.taxes;
            }
        }
    }
}

export { ApplyCouponService };