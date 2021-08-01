import { Entity } from '@loopback/repository';
export declare class Familia extends Entity {
    id: number;
    idEtapa: number;
    apellido: string;
    clave: string;
    [prop: string]: any;
    constructor(data?: Partial<Familia>);
}
export interface FamiliaRelations {
}
export declare type FamiliaWithRelations = Familia & FamiliaRelations;
