"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SourcesController = class SourcesController {
    constructor(sourcesRepository) {
        this.sourcesRepository = sourcesRepository;
    }
    async create(sources) {
        return this.sourcesRepository.create(sources);
    }
    async count(where) {
        return this.sourcesRepository.count(where);
    }
    async find(filter) {
        return this.sourcesRepository.find(filter);
    }
    async updateAll(sources, where) {
        return this.sourcesRepository.updateAll(sources, where);
    }
    async findById(id, filter) {
        return this.sourcesRepository.findById(id, filter);
    }
    async updateById(id, sources) {
        await this.sourcesRepository.updateById(id, sources);
    }
    async replaceById(id, sources) {
        await this.sourcesRepository.replaceById(id, sources);
    }
    async deleteById(id) {
        await this.sourcesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/sourcesproductos'),
    rest_1.response(200, {
        description: 'Sources model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Sources) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sources, {
                    title: 'NewSources',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sources]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/sourcesproductos/count'),
    rest_1.response(200, {
        description: 'Sources model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Sources)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/sourcesproductos'),
    rest_1.response(200, {
        description: 'Array of Sources model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Sources, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Sources)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/sourcesproductos'),
    rest_1.response(200, {
        description: 'Sources PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sources, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Sources)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sources, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/sourcesproductos/{id}'),
    rest_1.response(200, {
        description: 'Sources model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sources, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Sources, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/sourcesproductos/{id}'),
    rest_1.response(204, {
        description: 'Sources PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Sources, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Sources]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/sourcesproductos/{id}'),
    rest_1.response(204, {
        description: 'Sources PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Sources]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/sourcesproductos/{id}'),
    rest_1.response(204, {
        description: 'Sources DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], SourcesController.prototype, "deleteById", null);
SourcesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SourcesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SourcesRepository])
], SourcesController);
exports.SourcesController = SourcesController;
//# sourceMappingURL=sources.controller.js.map