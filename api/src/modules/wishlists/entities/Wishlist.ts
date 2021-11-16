import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryColumn
} from "typeorm";
import {User} from "../../users/entities/User";
import {v4 as uuidV4} from "uuid";
import {Product} from "../../products/entities/Product";

@Entity('wishlists')
class Wishlist {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToMany(() => Product)
    @JoinTable({
        name: "products_wishlists",
        joinColumns: [{ name: "wishlist_id" }],
        inverseJoinColumns: [{ name: "product_id" }],
    })
    products: Product[];

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Wishlist };