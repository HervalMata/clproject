import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePayments1637162062669 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "payments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "method",
                        type: "enum",
                        enum: ["boleto", "creditCard", "debit", "cash_on_delivered", "pix"],
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["pending", "in_analysis", "payed", "available", "in_dispute", "returned", "cancelled"],
                    },
                    {
                        name: "value",
                        type: "numeric",
                    },
                    {
                        name: "installments",
                        type: "numeric",
                    },
                    {
                        name: "taxes",
                        type: "numeric",
                    },
                    {
                        name: "discount",
                        type: "numeric",
                    },
                    {
                        name: "total",
                        type: "numeric",
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
                        name: "pending_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "in_analysis_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "payed_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "available_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "in_dispute_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "returned_date",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "cancelled_date",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payments");
    }

}
