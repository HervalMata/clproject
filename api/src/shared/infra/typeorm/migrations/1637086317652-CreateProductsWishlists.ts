import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductsWishlists1637086317652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products_wishlists",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "wishlist_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "products_wishlists",
            new TableForeignKey({
                name: "FK_products_Wishlists_Color",
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                columnNames: ["product_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "products_wishlists",
            new TableForeignKey({
                name: "FK_Products_Wishlists_Wishlist",
                referencedTableName: "wishlists",
                referencedColumnNames: ["id"],
                columnNames: ["wishlist_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "products_wishlists",
            "FK_products_Wishlists_Color"
        );
        await queryRunner.dropForeignKey(
            "products_wishlists",
            "FK_Products_Wishlists_Wishlist"
        );
        await queryRunner.dropTable("products_wishlists");
    }

}
