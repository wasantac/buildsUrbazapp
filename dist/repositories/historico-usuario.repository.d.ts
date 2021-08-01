import { DefaultCrudRepository } from '@loopback/repository';
import { HistoricoUsuario, HistoricoUsuarioRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class HistoricoUsuarioRepository extends DefaultCrudRepository<HistoricoUsuario, typeof HistoricoUsuario.prototype.idUsuario, HistoricoUsuarioRelations> {
    constructor(dataSource: MysqlDataSource);
}
