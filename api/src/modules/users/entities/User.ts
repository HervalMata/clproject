import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    is_admin: boolean;

    @Column()
    is_seller: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };