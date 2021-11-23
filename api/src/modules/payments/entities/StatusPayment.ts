import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("status_payment")
class StatusPayment {

    @PrimaryColumn()
    id: string;

    @Column()
    status_payment: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export {StatusPayment};