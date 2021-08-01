import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AdministradorEtapas } from '../models';
import { AdministradorEtapasRepository } from '../repositories';
export declare class AdministradorEtapaController {
    administradorEtapasRepository: AdministradorEtapasRepository;
    constructor(administradorEtapasRepository: AdministradorEtapasRepository);
    create(administradorEtapas: Omit<AdministradorEtapas, 'id'>): Promise<AdministradorEtapas>;
    count(where?: Where<AdministradorEtapas>): Promise<Count>;
    find(filter?: Filter<AdministradorEtapas>): Promise<AdministradorEtapas[]>;
    updateAll(administradorEtapas: AdministradorEtapas, where?: Where<AdministradorEtapas>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<AdministradorEtapas>): Promise<AdministradorEtapas>;
    updateById(id: number, administradorEtapas: AdministradorEtapas): Promise<void>;
    replaceById(id: number, administradorEtapas: AdministradorEtapas): Promise<void>;
    deleteById(id: number): Promise<void>;
}
