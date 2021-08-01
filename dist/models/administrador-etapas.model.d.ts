import { Entity } from '@loopback/repository';
export declare class AdministradorEtapas extends Entity {
    id: number;
    idPersona: number;
    idEtapa: number;
    [prop: string]: any;
    constructor(data?: Partial<AdministradorEtapas>);
}
export interface AdministradorEtapasRelations {
}
export declare type AdministradorEtapasWithRelations = AdministradorEtapas & AdministradorEtapasRelations;
