import { Entity } from '@loopback/repository';
export declare class Compras extends Entity {
    _id?: string;
    id: string;
    id_categoria: string;
    comprador: string;
    vendedor: string;
    Fecha: string;
    producto: string;
    precio: string;
    cantidad: string;
    estado: string;
    imagen: string;
    constructor(data?: Partial<Compras>);
}
export interface ComprasRelations {
}
export declare type ComprasWithRelations = Compras & ComprasRelations;
