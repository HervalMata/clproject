import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";
import {StatusDelivery} from "./StatusDelivery";
import {TypesDelivery} from "./TypesDelivery";

@Entity("deliveries")
class Delivery {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    type_delivery_id: string;

    @ManyToOne(() => TypesDelivery)
    @JoinColumn({name: "type_delivery_id"})
    typesDelivery: TypesDelivery;

    @Column()
    status_delivery_id: string;

    @ManyToOne(() => StatusDelivery)
    @JoinColumn({name: "status_delivery_id"})
    statusDelivery: StatusDelivery;

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