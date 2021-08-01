"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    async Identify(username, password) {
        console.log(username, password);
        let persona = await this.personaRepository.findOne({ where: { username: username } });
        if (persona) {
            let flag = await bcrypt.compare(password, persona.contrasena);
            if (flag) {
                return persona;
            }
        }
        return false;
    }
    async generateToken(persona) {
        persona.contrasena = "";
        let token = jwt.sign({
            exp: 846000,
            data: {
                _id: persona.id,
                username: persona.username,
                nombre: persona.nombre,
                edad: persona.edad,
                role: persona.role
            }
        }, "jwt@auth");
        return token;
    }
};
AuthService = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map