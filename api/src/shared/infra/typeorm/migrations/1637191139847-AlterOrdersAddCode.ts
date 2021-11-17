import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterOrdersAddCode1637191139847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "orders",
            new TableColumn({
                name: "code",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("orders", "code");
    }

}
