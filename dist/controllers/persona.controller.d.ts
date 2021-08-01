/// <reference types="express" />
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Persona } from '../models';
import { PersonaRepository } from '../repositories';
import { AuthService } from "../services/auth.service";
declare class Credentials {
    username: string;
    password: string;
}
export declare class PersonaController {
    personaRepository: PersonaRepository;
    private request;
    authService: AuthService;
    constructor(personaRepository: PersonaRepository, request: Request);
    login(credentials: Credentials): Promise<object>;
    create(persona: Persona): Promise<void>;
    count(where?: Where<Persona>): Promise<Count>;
    find(filter?: Filter<Persona>): Promise<Persona[]>;
    updateAll(persona: Persona, where?: Where<Persona>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Persona>): Promise<Persona>;
    updateById(id: number, persona: Persona): Promise<void>;
    replaceById(id: number, persona: Persona): Promise<void>;
    deleteById(id: number): Promise<void>;
}
export {};
