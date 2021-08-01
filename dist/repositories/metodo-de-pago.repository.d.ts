import { DefaultCrudRepository } from '@loopback/repository';
import { MetodoDePago, MetodoDePagoRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class MetodoDePagoRepository extends DefaultCrudRepository<MetodoDePago, typeof MetodoDePago.prototype.id, MetodoDePagoRelations> {
    constructor(dataSource: MysqlDataSource);
}
