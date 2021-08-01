import { Entity } from '@loopback/repository';
export declare class Carrito extends Entity {
    id: number;
    idUsuario: number;
    [prop: string]: any;
    constructor(data?: Partial<Carrito>);
}
export interface CarritoRelations {
}
export declare type CarritoWithRelations = Carrito & CarritoRelations;
