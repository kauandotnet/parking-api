import { MigrationInterface, QueryRunner } from "typeorm";

export class AddParkingRates1677902340081 implements MigrationInterface {
    name = 'AddParkingRates1677902340081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parkings" ADD "defaultRate" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "parkings" ADD "rates" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parkings" DROP COLUMN "rates"`);
        await queryRunner.query(`ALTER TABLE "parkings" DROP COLUMN "defaultRate"`);
    }

}
