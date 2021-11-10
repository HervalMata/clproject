import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {User} from "../../users/entities/User";
import {v4 as uuidV4} from "uuid";

export enum Type {
    billing,
    shipping,
    same
}

@Entity("address")
class Address {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column( { type: "enum", enum: Type })
    type: Type;

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

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Address };