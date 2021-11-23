import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("status_order")
class StatusOrder {

    @PrimaryColumn()
    id: string;

    @Column()
    status_order: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export {StatusOrder};