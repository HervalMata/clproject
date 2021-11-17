import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterPaymentsAddCode1637191121895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "payments",
            new TableColumn({
                name: "code",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("payments", "code");
    }

}
