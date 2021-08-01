/// <reference types="express" />
import { Request } from '@loopback/rest';
export declare class CorreoController {
    private request;
    constructor(request: Request);
    correo(request: Request): Promise<void>;
}
