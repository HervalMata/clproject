import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

export enum Type {
    post_offices,
    shipping_company,
    pick_up_on_site
}

export enum StatusDelivery {
    packaging,
    deliver_the_carrier,
    on_way,
    delivered
}

@Entity("deliveries")
class Delivery {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column({ type: "enum", enum: Type })
    type: Type;

    @Column({ type: "enum", enum: StatusDelivery })
    status: StatusDelivery;

    @Column()
    is_free_cost: boolean;

    @Column("decimal")
    cost: number;

    @Column("int")
    prize: number;

    @Column()
    street: string;

    @Column()
    number: number;

    @Column()
    complement: string;

    @Column()
    district: string;

    @Column()
    postal_code: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column("timestamp")
    packaging_date: Date;

    @Column("timestamp")
    deliver_the_carrier_date: Date;

    @Column("timestamp")
    on_way_date: Date;

    @Column("timestamp")
    delivered_date: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Delivery };