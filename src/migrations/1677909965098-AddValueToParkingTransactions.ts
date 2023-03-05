import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddValueToParkingTransactions1677909965098
  implements MigrationInterface
{
  name = 'AddValueToParkingTransactions1677909965098';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "parking_transactions" ADD "value" numeric`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "parking_transactions" DROP COLUMN "value"`,
    );
  }
}
