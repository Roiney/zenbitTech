import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1675165460312 implements MigrationInterface {
    private table = new Table({
        name: 'forms',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'observation',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
        ],
      });
    
      public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
      }
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
      }
    }
