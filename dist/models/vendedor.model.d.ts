import { Entity } from '@loopback/repository';
export declare class Vendedor extends Entity {
    idUsuario: number;
    valoracion: number;
    [prop: string]: any;
    constructor(data?: Partial<Vendedor>);
}
export interface VendedorRelations {
}
export declare type VendedorWithRelations = Vendedor & VendedorRelations;
