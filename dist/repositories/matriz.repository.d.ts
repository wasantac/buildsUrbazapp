import { DefaultCrudRepository } from '@loopback/repository';
import { Matriz, MatrizRelations } from '../models';
import { MongoDataSource } from '../datasources';
export declare class MatrizRepository extends DefaultCrudRepository<Matriz, typeof Matriz.prototype.id, MatrizRelations> {
    constructor(dataSource: MongoDataSource);
}
