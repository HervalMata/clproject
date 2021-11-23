import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterPaymentAddColumnsStatusAndMethod1637463755351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "payments",
            new TableColumn({
                name: "status_id",
                type: "uuid",
            })
        );
        await queryRunner.createForeignKey(
            "payments",
            new TableForeignKey({
                name: "FK_Status_Payment_Payments_Status_Payment",
                columnNames: ["status_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "status_payment",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
        await queryRunner.addColumn(
            "payments",
            new TableColumn({
                name: "method_id",
                type: "uuid",
            })
        );
        await queryRunner.createForeignKey(
            "payments",
            new TableForeignKey({
                name: "FK_Methods_Payment_Payments_Methods_Payment",
                columnNames: ["method_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "methods_payment",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
