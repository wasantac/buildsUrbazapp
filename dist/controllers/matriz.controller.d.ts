import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Matriz } from '../models';
import { MatrizRepository } from '../repositories';
export declare class MatrizController {
    matrizRepository: MatrizRepository;
    constructor(matrizRepository: MatrizRepository);
    create(matriz: Matriz): Promise<Matriz>;
    count(where?: Where<Matriz>): Promise<Count>;
    find(filter?: Filter<Matriz>): Promise<Matriz[]>;
    updateAll(matriz: Matriz, where?: Where<Matriz>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Matriz>): Promise<Matriz>;
    updateById(id: number, matriz: Matriz): Promise<void>;
    replaceById(id: number, matriz: Matriz): Promise<void>;
    deleteById(id: number): Promise<void>;
}
