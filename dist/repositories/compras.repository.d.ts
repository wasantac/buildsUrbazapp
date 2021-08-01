import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Compras, ComprasRelations } from '../models';
export declare class ComprasRepository extends DefaultCrudRepository<Compras, typeof Compras.prototype._id, ComprasRelations> {
    constructor(dataSource: MongoDataSource);
}
