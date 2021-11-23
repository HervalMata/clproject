import {ICreateOrdersDTO} from "../dtos/ICreateOrdersDTO";
import {Order} from "../entities/Order";

interface IOrdersRepository {
    create(data: ICreateOrdersDTO): Promise<void>;

    list(): Promise<Order[]>;

    findById(id: string): Promise<Order>;

    findByUser(user_id: string): Promise<Order[]>;

    findOrderByPayment(payment_id: string): Promise<Order>;

    findOrderByDelivery(delivery_id: string): Promise<Order>;

    findByStatus(status_order_id: string): Promise<Order[]>;

    applyCoupon(id: string, coupon_code: string, value: number): Promise<void>;

    updateStatus(id: string, status_order_id: string): Promise<void>;

    findByIdAndUser(id: string, user_id: string): Promise<Order>;
}

export { IOrdersRepository };