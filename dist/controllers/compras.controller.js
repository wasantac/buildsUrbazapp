"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComprasController = class ComprasController {
    constructor(comprasRepository) {
        this.comprasRepository = comprasRepository;
    }
    async create(compras) {
        return this.comprasRepository.create(compras);
    }
    async count(where) {
        return this.comprasRepository.count(where);
    }
    async find(filter) {
        return this.comprasRepository.find(filter);
    }
    async updateAll(compras, where) {
        return this.comprasRepository.updateAll(compras, where);
    }
    async findById(id, filter) {
        return this.comprasRepository.findById(id, filter);
    }
    async updateById(id, compras) {
        await this.comprasRepository.updateById(id, compras);
    }
    async replaceById(id, compras) {
        await this.comprasRepository.replaceById(id, compras);
    }
    async deleteById(id) {
        await this.comprasRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/compras'),
    rest_1.response(200, {
        description: 'Compras model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Compras) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Compras, {
                    title: 'NewCompras',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Compras]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/compras/count'),
    rest_1.response(200, {
        description: 'Compras model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Compras)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/compras'),
    rest_1.response(200, {
        description: 'Array of Compras model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Compras, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Compras)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/compras'),
    rest_1.response(200, {
        description: 'Compras PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Compras, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Compras)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Compras, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/compras/{id}'),
    rest_1.response(200, {
        description: 'Compras model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Compras, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Compras, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/compras/{id}'),
    rest_1.response(204, {
        description: 'Compras PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Compras, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Compras]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/compras/{id}'),
    rest_1.response(204, {
        description: 'Compras PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Compras]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/compras/{id}'),
    rest_1.response(204, {
        description: 'Compras DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ComprasController.prototype, "deleteById", null);
ComprasController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ComprasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComprasRepository])
], ComprasController);
exports.ComprasController = ComprasController;
//# sourceMappingURL=compras.controller.js.map