import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id: number;
    idPersona: number;
    idFamilia: number;
    subscripcion: number;
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
