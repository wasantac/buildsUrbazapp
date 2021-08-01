import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Sources, SourcesRelations } from '../models';
export declare class SourcesRepository extends DefaultCrudRepository<Sources, typeof Sources.prototype.id, SourcesRelations> {
    constructor(dataSource: MysqlDataSource);
}
