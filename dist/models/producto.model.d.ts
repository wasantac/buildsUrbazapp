import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id: number;
    idVendedor: number;
    ID_Categoria: number;
    nombre: string;
    precio: number;
    activo: number;
    descripcion: string;
    stock: number;
    promedioPuntuacion: number;
    pedidoAnticipado: number;
    source: string;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
