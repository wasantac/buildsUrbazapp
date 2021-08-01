import { DefaultCrudRepository } from '@loopback/repository';
import { Calificacion, CalificacionRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class CalificacionRepository extends DefaultCrudRepository<Calificacion, typeof Calificacion.prototype.id, CalificacionRelations> {
    constructor(dataSource: MysqlDataSource);
}
