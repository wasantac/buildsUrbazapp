import { Entity } from '@loopback/repository';
export declare class Etapa extends Entity {
    id: number;
    nombre: string;
    ubicacion: string;
    idUrbanizacion: number;
    [prop: string]: any;
    constructor(data?: Partial<Etapa>);
}
export interface EtapaRelations {
}
export declare type EtapaWithRelations = Etapa & EtapaRelations;
