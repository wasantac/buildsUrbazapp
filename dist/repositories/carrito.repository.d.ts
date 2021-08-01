import { DefaultCrudRepository } from '@loopback/repository';
import { Carrito, CarritoRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class CarritoRepository extends DefaultCrudRepository<Carrito, typeof Carrito.prototype.id, CarritoRelations> {
    constructor(dataSource: MysqlDataSource);
}
