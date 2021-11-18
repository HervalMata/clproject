import {ICreateOrdersDTO} from "../dtos/ICreateOrdersDTO";
import {Order, StatusOrder} from "../entities/Order";

interface IOrdersRepository {
    create(data: ICreateOrdersDTO): Promise<void>;
    list(): Promise<Order[]>;
    findById(id: string): Promise<Order>;
    findByUser(user_id: string): Promise<Order[]>;
    findOrderByPayment(payment_id: string): Promise<Order>;
    findOrderByDelivery(delivery_id: string): Promise<Order>;
    findByStatus(status: StatusOrder): Promise<Order[]>;
    applyCoupon(id: string, coupon_code: string): Promise<void>;
    updateStatus(id: string, status: StatusOrder): Promise<void>;
}

export { IOrdersRepository };