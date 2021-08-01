"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const core_1 = require("@loopback/core");
const auth_service_1 = require("../services/auth.service");
class Credentials {
}
let PersonaController = class PersonaController {
    constructor(personaRepository, request) {
        this.personaRepository = personaRepository;
        this.request = request;
        this.authService = new auth_service_1.AuthService(this.personaRepository);
    }
    async login(credentials) {
        let persona = await this.authService.Identify(credentials.username, credentials.password);
        console.log(persona);
        if (persona) {
            let tk = await this.authService.generateToken(persona);
            return {
                data: persona,
                token: tk
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("User or Password invalid.");
        }
    }
    async create(persona) {
        this.personaRepository.create(persona);
    }
    async count(where) {
        return this.personaRepository.count(where);
    }
    async find(filter) {
        return this.personaRepository.find(filter);
    }
    async updateAll(persona, where) {
        return this.personaRepository.updateAll(persona, where);
    }
    async findById(id, filter) {
        return this.personaRepository.findById(id, filter);
    }
    async updateById(id, persona) {
        await this.personaRepository.updateById(id, persona);
    }
    async replaceById(id, persona) {
        await this.personaRepository.replaceById(id, persona);
    }
    async deleteById(id) {
        await this.personaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post("/login", {
        responses: {
            "200": {
                description: "Login para usuarios"
            }
        }
    }),
    tslib_1.__param(0, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Credentials]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "login", null);
tslib_1.__decorate([
    rest_1.post('/personas', {
        responses: {
            '200': {
                description: 'Persona model instance',
                content: { 'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Persona)
                    } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Persona, {
                    title: 'NewPersona',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Persona]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/personas/count', {
        responses: {
            '200': {
                description: 'Persona model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/personas', {
        responses: {
            '200': {
                description: 'Array of Persona model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Persona, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/personas', {
        responses: {
            '200': {
                description: 'Persona PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Persona, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Persona, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/personas/{id}', {
        responses: {
            '200': {
                description: 'Persona model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Persona, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Persona, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/personas/{id}', {
        responses: {
            '204': {
                description: 'Persona PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Persona, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Persona]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/personas/{id}', {
        responses: {
            '204': {
                description: 'Persona PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Persona]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/personas/{id}', {
        responses: {
            '204': {
                description: 'Persona DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "deleteById", null);
PersonaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PersonaRepository)),
    tslib_1.__param(1, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository, Object])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map