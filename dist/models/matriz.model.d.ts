import { Entity } from '@loopback/repository';
export declare class Matriz extends Entity {
    id: number;
    data: string;
    urbanizacion: string;
    [prop: string]: any;
    constructor(data?: Partial<Matriz>);
}
export interface MatrizRelations {
}
export declare type MatrizWithRelations = Matriz & MatrizRelations;
