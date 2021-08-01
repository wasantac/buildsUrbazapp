import { DefaultCrudRepository } from '@loopback/repository';
import { HistoricoAdministradorUrbanizacion, HistoricoAdministradorUrbanizacionRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class HistoricoAdministradorUrbanizacionRepository extends DefaultCrudRepository<HistoricoAdministradorUrbanizacion, typeof HistoricoAdministradorUrbanizacion.prototype.id, HistoricoAdministradorUrbanizacionRelations> {
    constructor(dataSource: MysqlDataSource);
}
