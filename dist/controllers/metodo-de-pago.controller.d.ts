import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { MetodoDePago } from '../models';
import { MetodoDePagoRepository } from '../repositories';
export declare class MetodoDePagoController {
    metodoDePagoRepository: MetodoDePagoRepository;
    constructor(metodoDePagoRepository: MetodoDePagoRepository);
    create(metodoDePago: MetodoDePago): Promise<MetodoDePago>;
    count(where?: Where<MetodoDePago>): Promise<Count>;
    find(filter?: Filter<MetodoDePago>): Promise<MetodoDePago[]>;
    updateAll(metodoDePago: MetodoDePago, where?: Where<MetodoDePago>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<MetodoDePago>): Promise<MetodoDePago>;
    updateById(id: number, metodoDePago: MetodoDePago): Promise<void>;
    replaceById(id: number, metodoDePago: MetodoDePago): Promise<void>;
    deleteById(id: number): Promise<void>;
}
