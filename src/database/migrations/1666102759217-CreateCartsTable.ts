import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateCartsTable1666102759217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'carts',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          }),
          new TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '50',
          }),
          new TableColumn({
            name: 'total_qty',
            type: 'number',
            length: '10',
          }),
          new TableColumn({
            name: 'total_amount',
            type: 'number',
            length: '10',
          }),
          new TableColumn({
            name: 'total_net_amount',
            type: 'number',
            length: '10',
          }),
          new TableColumn({
            name: 'total_discount',
            type: 'number',
            length: '10',
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
