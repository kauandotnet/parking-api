import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeParkingSpotStatus1677970133020 implements MigrationInterface {
    name = 'ChangeParkingSpotStatus1677970133020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_spots" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."parking_spots_status_enum" AS ENUM('OUT_OF_SERVICE', 'AVAILABLE', 'OCCUPIED')`);
        await queryRunner.query(`ALTER TABLE "parking_spots" ADD "status" "public"."parking_spots_status_enum" NOT NULL DEFAULT 'AVAILABLE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_spots" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."parking_spots_status_enum"`);
        await queryRunner.query(`ALTER TABLE "parking_spots" ADD "status" boolean NOT NULL DEFAULT true`);
    }

}
