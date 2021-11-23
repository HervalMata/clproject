import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterOrderDropColumnStatus1637462266170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
