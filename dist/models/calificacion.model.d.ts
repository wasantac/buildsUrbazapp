import { Entity } from '@loopback/repository';
export declare class Calificacion extends Entity {
    id: number;
    idProducto: number;
    idCliente: number;
    estrellas: number;
    comentario: string;
    fecha: string;
    idVendedor: number;
    [prop: string]: any;
    constructor(data?: Partial<Calificacion>);
}
export interface CalificacionRelations {
}
export declare type CalificacionWithRelations = Calificacion & CalificacionRelations;
