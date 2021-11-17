import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterDeliveriesAddCode1637191098514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "deliveries",
            new TableColumn({
                name: "code",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("deliveries", "code");
    }

}
