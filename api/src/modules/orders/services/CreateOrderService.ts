import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "../repositories/IOrdersRepository";
import {DeliveriesRepository} from "../../deliveries/repositories/implementations/DeliveriesRepository";
import {IDeliveriesRepository} from "../../deliveries/repositories/IDeliveriesRepository";
import {IPaymentsRepository} from "../../payments/repositories/IPaymentsRepository";
import {IProductsRepository} from "../../products/repositories/IProductsRepository";
import {IStatusDeliveryRepository} from "../../deliveries/repositories/IStatusDeliveryRepository";
import {IStatusPaymentRepository} from "../../payments/repositories/IStatusPaymentRepository";
import {IStatusOrderRepository} from "../repositories/IStatusOrderRepository";

interface IRequest {
    type_delivery_id: string;
    is_free_cost?: boolean;
    cost?: number;
    prize: number;
    street: string;
    number: number;
    complement?: string;
    district: string;
    postal_code: string;
    city: string;
    state: string;
    country?: string;
    method_id: string;
    value?: number;
    installments?: number;
    taxes?: number;
    discount?: number;
    total?: number;
    user_id: string;
    value_order?: number;
    products_id: string[];
}

@injectable()
class CreateOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository,
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository,
        @inject("StatusDeliveryRepository")
        private statusDeliveryRepository: IStatusDeliveryRepository,
        @inject("StatusPaymentRepository")
        private statusPaymentRepository: IStatusPaymentRepository,
        @inject("StatusOrderRepository")
        private statusOrderRepository: IStatusOrderRepository
    ) {}

    async execute({
                      type_delivery_id, street, number, complement, postal_code, district, state, city, cost, prize,
                      method_id, value, installments, discount, taxes, total,
                      user_id, products_id
                  }: IRequest): Promise<void> {
        console.log(type_delivery_id)
        const codeDelivery = "DELIVERY-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        console.log(codeDelivery)
        const status_delivery = await this.statusDeliveryRepository.findByStatusDelivery("packaging");
        const status_delivery_id = status_delivery.id;
        const delivery = await this.deliveriesRepository.create({
            type_delivery_id,
            status_delivery_id,
            street,
            number,
            complement,
            postal_code,
            district,
            state,
            city,
            cost: cost || 0,
            prize,
            country: "BRA",
            code: codeDelivery
        });
        console.log(delivery)
        const codePayment = "PAYMENT-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        const status_payment = await this.statusPaymentRepository.findByStatusPayment("pending");
        const status_payment_id = status_payment.id;
        const payment = await this.paymentsRepository.create({
            code: codePayment,
            method_id,
            status_payment_id,
            value: value || 0,
            installments: installments || 1,
            discount: discount || 0,
            taxes: taxes || 0,
            total: total || 0
        });
        const delivery_id = delivery.id;
        const payment_id = payment.id;
        const codeOrder = "ORDER-" + new Date().getDay() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();
        const status_order = await this.statusOrderRepository.findByStatusOrder("pending");
        const status_order_id = status_order.id;
        const order = await this.ordersRepository.create({
            code: codeOrder,
            user_id,
            value: payment.value,
            payment_id,
            delivery_id,
            status_order_id
        });
        console.log("5", order)
        const order_existent = await this.ordersRepository.findOrderByPayment(payment_id);
        console.log("6", order_existent)
        order_existent.products = await this.productsRepository.findByIds(products_id);
        await this.ordersRepository.create(order_existent);
    }
}

export { CreateOrderService };