import { Entity } from '@loopback/repository';
export declare class MetodoDePago extends Entity {
    id: number;
    cvv: number;
    fecha: Date;
    nombreMetodo: string;
    idCliente: number;
    [prop: string]: any;
    constructor(data?: Partial<MetodoDePago>);
}
export interface MetodoDePagoRelations {
}
export declare type MetodoDePagoWithRelations = MetodoDePago & MetodoDePagoRelations;
