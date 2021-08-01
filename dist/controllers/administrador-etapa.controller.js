"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorEtapaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdministradorEtapaController = class AdministradorEtapaController {
    constructor(administradorEtapasRepository) {
        this.administradorEtapasRepository = administradorEtapasRepository;
    }
    async create(administradorEtapas) {
        return this.administradorEtapasRepository.create(administradorEtapas);
    }
    async count(where) {
        return this.administradorEtapasRepository.count(where);
    }
    async find(filter) {
        return this.administradorEtapasRepository.find(filter);
    }
    async updateAll(administradorEtapas, where) {
        return this.administradorEtapasRepository.updateAll(administradorEtapas, where);
    }
    async findById(id, filter) {
        return this.administradorEtapasRepository.findById(id, filter);
    }
    async updateById(id, administradorEtapas) {
        await this.administradorEtapasRepository.updateById(id, administradorEtapas);
    }
    async replaceById(id, administradorEtapas) {
        await this.administradorEtapasRepository.replaceById(id, administradorEtapas);
    }
    async deleteById(id) {
        await this.administradorEtapasRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/administrador-etapas'),
    rest_1.response(200, {
        description: 'AdministradorEtapas model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AdministradorEtapas) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AdministradorEtapas, {
                    title: 'NewAdministradorEtapas',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/administrador-etapas/count'),
    rest_1.response(200, {
        description: 'AdministradorEtapas model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AdministradorEtapas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/administrador-etapas'),
    rest_1.response(200, {
        description: 'Array of AdministradorEtapas model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AdministradorEtapas, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AdministradorEtapas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/administrador-etapas'),
    rest_1.response(200, {
        description: 'AdministradorEtapas PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AdministradorEtapas, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AdministradorEtapas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AdministradorEtapas, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/administrador-etapas/{id}'),
    rest_1.response(200, {
        description: 'AdministradorEtapas model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AdministradorEtapas, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AdministradorEtapas, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/administrador-etapas/{id}'),
    rest_1.response(204, {
        description: 'AdministradorEtapas PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AdministradorEtapas, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AdministradorEtapas]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/administrador-etapas/{id}'),
    rest_1.response(204, {
        description: 'AdministradorEtapas PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.AdministradorEtapas]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/administrador-etapas/{id}'),
    rest_1.response(204, {
        description: 'AdministradorEtapas DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AdministradorEtapaController.prototype, "deleteById", null);
AdministradorEtapaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AdministradorEtapasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AdministradorEtapasRepository])
], AdministradorEtapaController);
exports.AdministradorEtapaController = AdministradorEtapaController;
//# sourceMappingURL=administrador-etapa.controller.js.map