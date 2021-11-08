import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

@Entity("users_profile")
class UsersProfile {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    cpf: string;

    @Column()
    birth_date: Date;

    @Column()
    phone_number: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { UsersProfile };