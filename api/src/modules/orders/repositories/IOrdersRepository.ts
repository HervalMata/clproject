import {ICreateOrdersDTO} from "../dtos/ICreateOrdersDTO";
import {Order, Status} from "../entities/Order";

interface IOrdersRepository {
    create(data: ICreateOrdersDTO): Promise<void>;
    list(): Promise<Order[]>;
    findById(id: string): Promise<Order>;
    findByUser(user_id: string): Promise<Order[]>;
    findByPayment(payment_id: string): Promise<Order>;
    findByDelivery(delivery_id: string): Promise<Order>;
    findByStatus(status: Status): Promise<Status[]>;
    applyCoupon(coupon_code: string): Promise<void>;
    updateStatus(id: string, status: Status): Promise<void>;
}

export { IOrdersRepository };