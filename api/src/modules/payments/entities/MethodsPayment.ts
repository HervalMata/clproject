import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("methods_payment")
class MethodsPayment {

    @PrimaryColumn()
    id: string;

    @Column()
    method: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export {MethodsPayment};