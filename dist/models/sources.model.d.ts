import { Entity } from '@loopback/repository';
export declare class Sources extends Entity {
    id?: number;
    id_producto: number;
    source: string;
    constructor(data?: Partial<Sources>);
}
export interface SourcesRelations {
}
export declare type SourcesWithRelations = Sources & SourcesRelations;
