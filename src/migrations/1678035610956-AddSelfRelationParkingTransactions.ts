import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSelfRelationParkingTransactions1678035610956 implements MigrationInterface {
    name = 'AddSelfRelationParkingTransactions1678035610956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_transactions" ADD "parentTransactionId" uuid`);
        await queryRunner.query(`ALTER TABLE "parking_transactions" ADD CONSTRAINT "FK_d52d39e866773628e1e7a997661" FOREIGN KEY ("parentTransactionId") REFERENCES "parking_transactions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_transactions" DROP CONSTRAINT "FK_d52d39e866773628e1e7a997661"`);
        await queryRunner.query(`ALTER TABLE "parking_transactions" DROP COLUMN "parentTransactionId"`);
    }

}
