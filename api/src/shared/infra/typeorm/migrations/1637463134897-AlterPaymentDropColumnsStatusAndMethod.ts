import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterPaymentDropColumnsStatusAndMethod1637463134897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "method"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
