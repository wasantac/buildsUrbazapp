import { DefaultCrudRepository } from '@loopback/repository';
import { Urbanizacion, UrbanizacionRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class UrbanizacionRepository extends DefaultCrudRepository<Urbanizacion, typeof Urbanizacion.prototype.id, UrbanizacionRelations> {
    constructor(dataSource: MysqlDataSource);
}
