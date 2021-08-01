import { DefaultCrudRepository } from '@loopback/repository';
import { HistoricoAdministradorEtapa, HistoricoAdministradorEtapaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class HistoricoAdministradorEtapaRepository extends DefaultCrudRepository<HistoricoAdministradorEtapa, typeof HistoricoAdministradorEtapa.prototype.id, HistoricoAdministradorEtapaRelations> {
    constructor(dataSource: MysqlDataSource);
}
