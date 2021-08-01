import { DefaultCrudRepository } from '@loopback/repository';
import { Venta, VentaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class VentaRepository extends DefaultCrudRepository<Venta, typeof Venta.prototype.id, VentaRelations> {
    constructor(dataSource: MysqlDataSource);
}
