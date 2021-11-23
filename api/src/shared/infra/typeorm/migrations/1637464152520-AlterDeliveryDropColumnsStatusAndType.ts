import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterDeliveryDropColumnsStatusAndType1637464152520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deliveries" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "deliveries" DROP COLUMN "typeDelivery"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
