import { Entity } from '@loopback/repository';
export declare class HistoricoAdministradorUrbanizacion extends Entity {
    id: number;
    idAdministradorUrbanizacion: number;
    fechaInicio: string;
    fechaFinal: string;
    [prop: string]: any;
    constructor(data?: Partial<HistoricoAdministradorUrbanizacion>);
}
export interface HistoricoAdministradorUrbanizacionRelations {
}
export declare type HistoricoAdministradorUrbanizacionWithRelations = HistoricoAdministradorUrbanizacion & HistoricoAdministradorUrbanizacionRelations;
