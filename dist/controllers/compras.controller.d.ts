import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Compras } from '../models';
import { ComprasRepository } from '../repositories';
export declare class ComprasController {
    comprasRepository: ComprasRepository;
    constructor(comprasRepository: ComprasRepository);
    create(compras: Compras): Promise<Compras>;
    count(where?: Where<Compras>): Promise<Count>;
    find(filter?: Filter<Compras>): Promise<Compras[]>;
    updateAll(compras: Compras, where?: Where<Compras>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Compras>): Promise<Compras>;
    updateById(id: string, compras: Compras): Promise<void>;
    replaceById(id: string, compras: Compras): Promise<void>;
    deleteById(id: string): Promise<void>;
}
