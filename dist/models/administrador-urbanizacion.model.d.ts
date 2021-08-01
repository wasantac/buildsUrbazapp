import { Entity } from '@loopback/repository';
export declare class AdministradorUrbanizacion extends Entity {
    id: number;
    idPersona: number;
    idUrbanizacion: number;
    [prop: string]: any;
    constructor(data?: Partial<AdministradorUrbanizacion>);
}
export interface AdministradorUrbanizacionRelations {
}
export declare type AdministradorUrbanizacionWithRelations = AdministradorUrbanizacion & AdministradorUrbanizacionRelations;
