import { DefaultCrudRepository } from '@loopback/repository';
import { Vendedor, VendedorRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class VendedorRepository extends DefaultCrudRepository<Vendedor, typeof Vendedor.prototype.idUsuario, VendedorRelations> {
    constructor(dataSource: MysqlDataSource);
}
