import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {ICouponsRepository} from "../../coupons/repositories/ICouponsRepository";
import {IPaymentsRepository} from "../../payments/repositories/IPaymentsRepository";
import {Type} from "../../coupons/entities/Coupon";
import {DayjsDateProvider} from "../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

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
        @inject("DayjsDateProvider")
        private dateProvider: DayjsDateProvider
    ) {}

    async execute({ id, coupon_code }: IRequest): Promise<void> {
        const coupon = await this.couponsRepository.findByCode(coupon_code);
        const expire_date = coupon.expire_date;
        const date_now = this.dateProvider.dateNow();
        const is_valid = this.dateProvider.checkIsAfter(expire_date, date_now);
        if (is_valid) {
            const order = await this.ordersRepository.findById(id);
            const payment = await this.paymentsRepository.findById(order.payment_id);
            order.coupon_code = coupon_code;
            payment.discount = coupon.value;
            if (coupon.type === Type.fixed) {
                payment.total = payment.value - payment.discount + payment.taxes;
                order.value = payment.total
            } else if (coupon.type === Type.percentage) {
                payment.total = payment.value - (payment.value * payment.discount / 100) + payment.taxes;
                order.value = payment.total
            }
            await this.paymentsRepository.updateCoupon(
                payment.id,
                payment.total,
                payment.discount
            );
            await this.ordersRepository.applyCoupon(order.id, coupon_code, order.value);
        }
    }
}

export { ApplyCouponService };