import { DefaultCrudRepository } from '@loopback/repository';
import { Persona, PersonaRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    constructor(dataSource: MysqlDataSource);
}
