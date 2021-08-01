import { DefaultCrudRepository } from '@loopback/repository';
import { AdministradorEtapas, AdministradorEtapasRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class AdministradorEtapasRepository extends DefaultCrudRepository<AdministradorEtapas, typeof AdministradorEtapas.prototype.id, AdministradorEtapasRelations> {
    constructor(dataSource: MysqlDataSource);
}
