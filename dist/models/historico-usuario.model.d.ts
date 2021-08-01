import { Entity } from '@loopback/repository';
export declare class HistoricoUsuario extends Entity {
    idUsuario: number;
    fechaInicio: string;
    fechaFinal: string;
    [prop: string]: any;
    constructor(data?: Partial<HistoricoUsuario>);
}
export interface HistoricoUsuarioRelations {
}
export declare type HistoricoUsuarioWithRelations = HistoricoUsuario & HistoricoUsuarioRelations;
