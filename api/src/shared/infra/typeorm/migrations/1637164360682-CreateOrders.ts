import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1637164360682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "payment_id",
                        type: "uuid",
                    },
                    {
                        name: "delivery_id",
                        type: "uuid",
                    },
                    {
                        name: "coupon_code",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["pending", "payed", "finished", "cancelled"],
                    },
                    {
                        name: "value",
                        type: "numeric"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "pending_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "payed_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "finished_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "cancelled_date",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FK_Users_Orders_User",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_Payment_Orders_Payment",
                        referencedTableName: "payments",
                        referencedColumnNames: ["id"],
                        columnNames: ["payment_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_Delivery_Orders_Delivery",
                        referencedTableName: "deliveries",
                        referencedColumnNames: ["id"],
                        columnNames: ["delivery_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
