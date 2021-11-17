import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDeliveries1637159313337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliveries",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["post_offices", "shipping_company", "pick_up_on_site"],
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["packaging", "deliver_the_carrier", "on_way", "delivered"],
                    },
                    {
                        name: "is_free_cost",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "cost",
                        type: "numeric",
                    },
                    {
                        name: "prize",
                        type: "numeric",
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "numeric",
                    },
                    {
                        name: "complement",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "postal_code",
                        type: "varchar",
                    },
                    {
                        name: "district",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "country",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "packaging_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deliver_the_carrier_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "on_way_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "delivered_date",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveries");
    }

}
