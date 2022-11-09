import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateCartsTable1666102759217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(
      new Table({
        name: 'carts',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            length: '50',
          }),
          new TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '50',
          }),
          new TableColumn({
            name: 'total_qty',
            type: 'numeric',
            precision: 10,
            default: 0,
          }),
          new TableColumn({
            name: 'total_amount',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          }),
          new TableColumn({
            name: 'total_net_amount',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          }),
          new TableColumn({
            name: 'total_discount',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('carts');
  }
}
