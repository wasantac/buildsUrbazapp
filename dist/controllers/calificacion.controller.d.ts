import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Calificacion } from '../models';
import { CalificacionRepository } from '../repositories';
export declare class CalificacionController {
    calificacionRepository: CalificacionRepository;
    constructor(calificacionRepository: CalificacionRepository);
    create(calificacion: Calificacion): Promise<Calificacion>;
    count(where?: Where<Calificacion>): Promise<Count>;
    find(filter?: Filter<Calificacion>): Promise<Calificacion[]>;
    updateAll(calificacion: Calificacion, where?: Where<Calificacion>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Calificacion>): Promise<Calificacion>;
    updateById(id: number, calificacion: Calificacion): Promise<void>;
    replaceById(id: number, calificacion: Calificacion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
