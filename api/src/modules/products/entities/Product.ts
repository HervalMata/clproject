import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
    JoinColumn,
    ManyToMany,
    JoinTable,
    OneToMany, UpdateDateColumn
} from "typeorm";
import {Category} from "../../categories/entities/Category";
import {v4 as uuidV4} from "uuid";
import {Color} from "../../colors/entities/Color";
import {Material} from "../../materials/entities/Material";

@Entity("products")
class Product {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    available: boolean;

    @Column("int")
    stock: number;

    @Column("decimal")
    price: number;

    @Column()
    is_featured: boolean;

    @Column()
    is_offer: boolean;

    @Column("decimal")
    offer_price: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id", })
    category: Category;

    @ManyToMany(() => Color)
    @JoinTable({
        name: "colors_products",
        joinColumns: [{ name: "product_id" }],
        inverseJoinColumns: [{ name: "color_id" }],
    })
    colors: Color[];

    @ManyToMany(() => Material)
    @JoinTable({
        name: "materials_products",
        joinColumns: [{ name: "product_id" }],
        inverseJoinColumns: [{ name: "material_id" }],
    })
    materials: Material[];

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

export { Product };