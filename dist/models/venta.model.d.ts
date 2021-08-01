import { Entity } from '@loopback/repository';
export declare class Venta extends Entity {
    id: number;
    idUsuario: number;
    idVendedor: number;
    precioTotal: number;
    fechaCompra: string;
    idMetodoPago: number;
    [prop: string]: any;
    constructor(data?: Partial<Venta>);
}
export interface VentaRelations {
}
export declare type VentaWithRelations = Venta & VentaRelations;
