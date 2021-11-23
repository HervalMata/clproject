import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";
import {MethodsPayment} from "./MethodsPayment";
import {StatusPayment} from "./StatusPayment";

@Entity("payments")
class Payment {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    method_id: string;

    @ManyToOne(() => MethodsPayment)
    @JoinColumn({name: "method_id"})
    methodsPayment: MethodsPayment;

    @Column()
    status_payment_id: string;

    @ManyToOne(() => StatusPayment)
    @JoinColumn({name: "status_payment_id"})
    statusPayment: StatusPayment;

    @Column("decimal")
    value: number;

    @Column("int")
    installments: number;

    @Column("decimal")
    taxes: number;

    @Column("decimal")
    discount: number;

    @Column("decimal")
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column("timestamp")
    pending_date: Date;

    @Column("timestamp")
    in_analysis_date: Date;

    @Column("timestamp")
    payed_date: Date;

    @Column("timestamp")
    available_date: Date;

    @Column("timestamp")
    in_dispute_date: Date;

    @Column("timestamp")
    returned_date: Date;

    @Column("timestamp")
    cancelled_date: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Payment };