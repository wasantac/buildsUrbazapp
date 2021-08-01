"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EtapasController = class EtapasController {
    constructor(etapaRepository) {
        this.etapaRepository = etapaRepository;
    }
    async create(etapa) {
        return this.etapaRepository.create(etapa);
    }
    async count(where) {
        return this.etapaRepository.count(where);
    }
    async find(filter) {
        return this.etapaRepository.find(filter);
    }
    async updateAll(etapa, where) {
        return this.etapaRepository.updateAll(etapa, where);
    }
    async findById(id, filter) {
        return this.etapaRepository.findById(id, filter);
    }
    async updateById(id, etapa) {
        await this.etapaRepository.updateById(id, etapa);
    }
    async replaceById(id, etapa) {
        await this.etapaRepository.replaceById(id, etapa);
    }
    async deleteById(id) {
        await this.etapaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/etapas'),
    rest_1.response(200, {
        description: 'Etapa model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Etapa) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Etapa, {
                    title: 'NewEtapa',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Etapa]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/etapas/count'),
    rest_1.response(200, {
        description: 'Etapa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Etapa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/etapas'),
    rest_1.response(200, {
        description: 'Array of Etapa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Etapa, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Etapa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/etapas'),
    rest_1.response(200, {
        description: 'Etapa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Etapa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Etapa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Etapa, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/etapas/{id}'),
    rest_1.response(200, {
        description: 'Etapa model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Etapa, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Etapa, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/etapas/{id}'),
    rest_1.response(204, {
        description: 'Etapa PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Etapa, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Etapa]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/etapas/{id}'),
    rest_1.response(204, {
        description: 'Etapa PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Etapa]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/etapas/{id}'),
    rest_1.response(204, {
        description: 'Etapa DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EtapasController.prototype, "deleteById", null);
EtapasController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EtapaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EtapaRepository])
], EtapasController);
exports.EtapasController = EtapasController;
//# sourceMappingURL=etapas.controller.js.map