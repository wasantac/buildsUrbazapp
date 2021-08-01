import { DefaultCrudRepository } from '@loopback/repository';
import { Etapa, EtapaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class EtapaRepository extends DefaultCrudRepository<Etapa, typeof Etapa.prototype.id, EtapaRelations> {
    constructor(dataSource: MysqlDataSource);
}
