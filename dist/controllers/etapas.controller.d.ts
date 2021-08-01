import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Etapa } from '../models';
import { EtapaRepository } from '../repositories';
export declare class EtapasController {
    etapaRepository: EtapaRepository;
    constructor(etapaRepository: EtapaRepository);
    create(etapa: Etapa): Promise<Etapa>;
    count(where?: Where<Etapa>): Promise<Count>;
    find(filter?: Filter<Etapa>): Promise<Etapa[]>;
    updateAll(etapa: Etapa, where?: Where<Etapa>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Etapa>): Promise<Etapa>;
    updateById(id: number, etapa: Etapa): Promise<void>;
    replaceById(id: number, etapa: Etapa): Promise<void>;
    deleteById(id: number): Promise<void>;
}
