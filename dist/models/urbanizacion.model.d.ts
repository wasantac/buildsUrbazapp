import { Entity } from '@loopback/repository';
export declare class Urbanizacion extends Entity {
    id: number;
    nombre: string;
    ubicacion: string;
    [prop: string]: any;
    constructor(data?: Partial<Urbanizacion>);
}
export interface UrbanizacionRelations {
}
export declare type UrbanizacionWithRelations = Urbanizacion & UrbanizacionRelations;
