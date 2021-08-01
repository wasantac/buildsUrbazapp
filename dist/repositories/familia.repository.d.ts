import { DefaultCrudRepository } from '@loopback/repository';
import { Familia, FamiliaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class FamiliaRepository extends DefaultCrudRepository<Familia, typeof Familia.prototype.id, FamiliaRelations> {
    constructor(dataSource: MysqlDataSource);
}
