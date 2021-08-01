import { PersonaRepository } from "../repositories";
import { Persona } from "../models";
export declare class AuthService {
    personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    Identify(username: string, password: string): Promise<Persona | false>;
    generateToken(persona: Persona): Promise<any>;
}
