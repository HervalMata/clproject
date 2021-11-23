import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterOrderAddColumnStatus1637462562781 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "orders",
            new TableColumn({
                name: "status_order_id",
                type: "uuid",
            })
        );
        await queryRunner.createForeignKey(
            "orders",
            new TableForeignKey({
                name: "FK_Status_Order_Orders_Status_Order",
                columnNames: ["status_order_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "status_order",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
