import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("types_delivery")
class TypesDelivery {

    @PrimaryColumn()
    id: string;

    @Column()
    type_delivery: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export {TypesDelivery};