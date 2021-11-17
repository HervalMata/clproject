import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

export enum Method {
    boleto,
    creditCard,
    debit,
    cash_on_delivered,
    pix
}

export enum Status {
    pending,
    in_analysis,
    payed,
    available,
    in_dispute,
    returned,
    cancelled
}

@Entity("payments")
class Payment {

    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column( { type: "enum", enum: Method })
    method: Method;

    @Column( { type: "enum", enum: Status })
    status: Status;

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