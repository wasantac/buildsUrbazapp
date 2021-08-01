import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Familia } from '../models';
import { FamiliaRepository } from '../repositories';
export declare class FamiliaController {
    familiaRepository: FamiliaRepository;
    constructor(familiaRepository: FamiliaRepository);
    create(familia: Familia): Promise<Familia>;
    count(where?: Where<Familia>): Promise<Count>;
    find(filter?: Filter<Familia>): Promise<Familia[]>;
    updateAll(familia: Familia, where?: Where<Familia>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Familia>): Promise<Familia>;
    updateById(id: number, familia: Familia): Promise<void>;
    replaceById(id: number, familia: Familia): Promise<void>;
    deleteById(id: number): Promise<void>;
}
