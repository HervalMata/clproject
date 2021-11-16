import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "../../users/entities/User";
import {v4 as uuidV4} from "uuid";

@Entity('wishlists')
class Wishlist {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Wishlist };