import { DefaultCrudRepository } from '@loopback/repository';
import { AdministradorUrbanizacion, AdministradorUrbanizacionRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class AdministradorUrbanizacionRepository extends DefaultCrudRepository<AdministradorUrbanizacion, typeof AdministradorUrbanizacion.prototype.id, AdministradorUrbanizacionRelations> {
    constructor(dataSource: MysqlDataSource);
}
