import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterDeliveriesAlterType1637425431101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deliveries" RENAME COLUMN "type" TO "typeDelivery"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deliveries" RENAME COLUMN "typeDelivery" TO "type"`);
    }

}
