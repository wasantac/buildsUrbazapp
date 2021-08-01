import { Entity } from '@loopback/repository';
export declare class Categoria extends Entity {
    id: number;
    nombre: string;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export declare type CategoriaWithRelations = Categoria & CategoriaRelations;
