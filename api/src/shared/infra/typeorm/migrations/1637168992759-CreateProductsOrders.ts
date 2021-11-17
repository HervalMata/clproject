import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductsOrders1637168992759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products_orders",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "order_id",
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
            "products_orders",
            new TableForeignKey({
                name: "FK_Products_Orders_Product",
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                columnNames: ["product_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "products_orders",
            new TableForeignKey({
                name: "FK_Products_Orders_Order",
                referencedTableName: "orders",
                referencedColumnNames: ["id"],
                columnNames: ["order_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "products_orders",
            "FK_products_Orders_Color"
        );
        await queryRunner.dropForeignKey(
            "products_orders",
            "FK_Products_Orders_Order"
        );
        await queryRunner.dropTable("products_orders");
    }

}
