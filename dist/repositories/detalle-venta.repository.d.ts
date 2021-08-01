import { DefaultCrudRepository } from '@loopback/repository';
import { DetalleVenta, DetalleVentaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class DetalleVentaRepository extends DefaultCrudRepository<DetalleVenta, typeof DetalleVenta.prototype.id, DetalleVentaRelations> {
    constructor(dataSource: MysqlDataSource);
}
