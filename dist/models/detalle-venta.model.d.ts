import { Entity } from '@loopback/repository';
export declare class DetalleVenta extends Entity {
    id: number;
    iDVenta: number;
    idProducto: number;
    cantidad: number;
    costoUnitario: number;
    costoEnvio: number;
    costoTotal: number;
    [prop: string]: any;
    constructor(data?: Partial<DetalleVenta>);
}
export interface DetalleVentaRelations {
}
export declare type DetalleVentaWithRelations = DetalleVenta & DetalleVentaRelations;
