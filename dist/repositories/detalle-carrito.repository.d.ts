import { DefaultCrudRepository } from '@loopback/repository';
import { DetalleCarrito, DetalleCarritoRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class DetalleCarritoRepository extends DefaultCrudRepository<DetalleCarrito, typeof DetalleCarrito.prototype.idDetalle, DetalleCarritoRelations> {
    constructor(dataSource: MysqlDataSource);
}
