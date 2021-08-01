import { Entity } from '@loopback/repository';
export declare class HistoricoAdministradorEtapa extends Entity {
    id: number;
    idAdministradorEtapa: number;
    fechaInicio: string;
    fechaFinal: string;
    [prop: string]: any;
    constructor(data?: Partial<HistoricoAdministradorEtapa>);
}
export interface HistoricoAdministradorEtapaRelations {
}
export declare type HistoricoAdministradorEtapaWithRelations = HistoricoAdministradorEtapa & HistoricoAdministradorEtapaRelations;
