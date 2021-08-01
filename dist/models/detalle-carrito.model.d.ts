import { Entity } from '@loopback/repository';
export declare class DetalleCarrito extends Entity {
    idDetalle: number;
    idProducto: number;
    cantidad: number;
    idCarrito: number;
    [prop: string]: any;
    constructor(data?: Partial<DetalleCarrito>);
}
export interface DetalleCarritoRelations {
}
export declare type DetalleCarritoWithRelations = DetalleCarrito & DetalleCarritoRelations;
