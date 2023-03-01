import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677638524966 implements MigrationInterface {
    name = 'initial1677638524966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parkings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "city" text NOT NULL, "address" text NOT NULL, "phone" text NOT NULL, CONSTRAINT "PK_ff5851f221bd241a0e959403f9b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_floors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "label" text NOT NULL, "capacity" numeric NOT NULL DEFAULT '0', "status" boolean NOT NULL DEFAULT true, "parkingId" uuid, CONSTRAINT "PK_a0f9b16837c554b54d76c608548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parking_spots" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" text NOT NULL, "status" boolean NOT NULL DEFAULT true, "floorId" uuid, CONSTRAINT "PK_e0b54c8ecaf56846b47ef1f32f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fullName" text NOT NULL, "email" text NOT NULL, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."vehicles_type_enum" AS ENUM('CAR', 'MOTORCYCLE', 'TRUCK')`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "plate" text NOT NULL, "type" "public"."vehicles_type_enum" NOT NULL DEFAULT 'CAR', "color" text, "customerId" uuid, CONSTRAINT "UQ_ec7181ebdab798d97070122a5bf" UNIQUE ("plate"), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."parking_transactions_type_enum" AS ENUM('ARRIVAL', 'DEPARTURE')`);
        await queryRunner.query(`CREATE TABLE "parking_transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "type" "public"."parking_transactions_type_enum" NOT NULL, "vehicleId" uuid, "spotId" uuid, CONSTRAINT "PK_ca4ec81f7660084888564b4d780" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fullName" text NOT NULL, "email" text NOT NULL, "password" character varying NOT NULL, "salt" text, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "parking_floors" ADD CONSTRAINT "FK_1100d977ec076ae974295ddfc3e" FOREIGN KEY ("parkingId") REFERENCES "parkings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_spots" ADD CONSTRAINT "FK_269697a032652d4d8049bf8689f" FOREIGN KEY ("floorId") REFERENCES "parking_floors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_ddb00709ac9788b3ded9296f2a8" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_transactions" ADD CONSTRAINT "FK_51f395521c2db69be56c09a72af" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "parking_transactions" ADD CONSTRAINT "FK_1c60c3e5284aa45f914484766a6" FOREIGN KEY ("spotId") REFERENCES "parking_spots"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parking_transactions" DROP CONSTRAINT "FK_1c60c3e5284aa45f914484766a6"`);
        await queryRunner.query(`ALTER TABLE "parking_transactions" DROP CONSTRAINT "FK_51f395521c2db69be56c09a72af"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_ddb00709ac9788b3ded9296f2a8"`);
        await queryRunner.query(`ALTER TABLE "parking_spots" DROP CONSTRAINT "FK_269697a032652d4d8049bf8689f"`);
        await queryRunner.query(`ALTER TABLE "parking_floors" DROP CONSTRAINT "FK_1100d977ec076ae974295ddfc3e"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "parking_transactions"`);
        await queryRunner.query(`DROP TYPE "public"."parking_transactions_type_enum"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TYPE "public"."vehicles_type_enum"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "parking_spots"`);
        await queryRunner.query(`DROP TABLE "parking_floors"`);
        await queryRunner.query(`DROP TABLE "parkings"`);
    }

}
