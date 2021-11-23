import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterDeliveryAddColumnsStatusAndType1637464264993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "deliveries",
            new TableColumn({
                name: "status_delivery_id",
                type: "uuid",
            })
        );
        await queryRunner.createForeignKey(
            "deliveries",
            new TableForeignKey({
                name: "FK_Status_Delivery_Deliveries_Status_Delivery",
                columnNames: ["status_delivery_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "status_delivery",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
        await queryRunner.addColumn(
            "deliveries",
            new TableColumn({
                name: "type_delivery_id",
                type: "uuid",
            })
        );
        await queryRunner.createForeignKey(
            "deliveries",
            new TableForeignKey({
                name: "FK_Types_Delivery_Deliveries_Types_Delivery",
                columnNames: ["type_delivery_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "types_delivery",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
