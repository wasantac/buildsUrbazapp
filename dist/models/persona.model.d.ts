import { Entity } from '@loopback/repository';
export declare class Persona extends Entity {
    id: number;
    identificacion: number;
    id_etapa: number;
    nombre: string;
    telefono: string;
    correo: string;
    edad: number;
    genero: string;
    username: string;
    contrasena: string;
    role: string;
    activo: number;
    [prop: string]: any;
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
