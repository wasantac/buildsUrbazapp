import { DefaultCrudRepository } from '@loopback/repository';
import { Producto, ProductoRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    constructor(dataSource: MysqlDataSource);
}
