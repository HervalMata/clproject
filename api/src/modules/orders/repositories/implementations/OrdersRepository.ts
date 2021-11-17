import {IOrdersRepository} from "../IOrdersRepository";
import {ICreateOrdersDTO} from "../../dtos/ICreateOrdersDTO";
import {Order, Status} from "../../entities/Order";
import {getRepository, Repository} from "typeorm";

class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>;

    constructor() {
        this.repository = getRepository(Order);
    }

    async applyCoupon(id: string, coupon_code: string): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ coupon_code: coupon_code, })
            .where("id = :id")
            .setParameters({ id }).execute();
    }

    async create(data: ICreateOrdersDTO): Promise<void> {
        const { id, user_id, payment_id, delivery_id, coupon_code, status, value, products } = data;
        const order = { id, user_id, payment_id, delivery_id, coupon_code, status, value, products };
        await this.repository.save(order);
    }

    async findOrderByDelivery(delivery_id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { delivery_id: delivery_id },
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async findById(id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { id: id },
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async findOrderByPayment(payment_id: string): Promise<Order> {
        return await this.repository.findOne({
            where: { payment_id: payment_id },
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async findByStatus(status: Status): Promise<Order[]> {
        return await this.repository.find({
            where: { status: Status },
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async findByUser(user_id: string): Promise<Order[]> {
        return await this.repository.find({
            where: { user_id: user_id },
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async list(): Promise<Order[]> {
        return await this.repository.find({
            relations: [ 'deliveries', 'payments' ]
        });
    }

    async updateStatus(id: string, status: Status): Promise<void> {
        await this.repository
            .createQueryBuilder().update()
            .set({ status: status, })
            .where("id = :id")
            .setParameters({ id }).execute();
    }

}

export { OrdersRepository };