import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, JoinTable,
    ManyToMany,
    ManyToOne, OneToOne,
    PrimaryColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../../users/entities/User";
import {Payment} from "../../payments/entities/Payment";
import {Delivery} from "../../deliveries/entities/Delivery";
import {Product} from "../../products/entities/Product";
import {v4 as uuidV4} from "uuid";

export enum Status {
    pending,
    payed,
    finished,
    cancelled
}

@Entity("orders")
class Order {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    payment_id: string;

    @OneToOne(() => Payment)
    @JoinColumn({ name: "payment_id" })
    payment: Payment;

    @Column()
    delivery_id: string;

    @OneToOne(() => Delivery)
    @JoinColumn({ name: "delivery_id" })
    delivery: Delivery;

    @Column()
    coupon_code: string;

    @Column( { type: "enum", enum: Status })
    status: Status;

    @Column('decimal')
    value: number;

    @ManyToMany(() => Product)
    @JoinTable({
        name: "products_orders",
        joinColumns: [{ name: "order_id" }],
        inverseJoinColumns: [{ name: "product_id" }],
    })
    products: Product[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column("timestamp")
    pending_date: Date;

    @Column("timestamp")
    payed_date: Date;

    @Column("timestamp")
    finished_date: Date;

    @Column("timestamp")
    cancelled_date: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Order }