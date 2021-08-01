"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatrizController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MatrizController = class MatrizController {
    constructor(matrizRepository) {
        this.matrizRepository = matrizRepository;
    }
    async create(matriz) {
        return this.matrizRepository.create(matriz);
    }
    async count(where) {
        return this.matrizRepository.count(where);
    }
    async find(filter) {
        return this.matrizRepository.find(filter);
    }
    async updateAll(matriz, where) {
        return this.matrizRepository.updateAll(matriz, where);
    }
    async findById(id, filter) {
        return this.matrizRepository.findById(id, filter);
    }
    async updateById(id, matriz) {
        await this.matrizRepository.updateById(id, matriz);
    }
    async replaceById(id, matriz) {
        await this.matrizRepository.replaceById(id, matriz);
    }
    async deleteById(id) {
        await this.matrizRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/matriz', {
        responses: {
            '200': {
                description: 'Matriz model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Matriz) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Matriz, {
                    title: 'NewMatriz',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Matriz]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/matriz/count', {
        responses: {
            '200': {
                description: 'Matriz model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Matriz)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/matriz', {
        responses: {
            '200': {
                description: 'Array of Matriz model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Matriz, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Matriz)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/matriz', {
        responses: {
            '200': {
                description: 'Matriz PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Matriz, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Matriz)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Matriz, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/matriz/{id}', {
        responses: {
            '200': {
                description: 'Matriz model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Matriz, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Matriz, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/matriz/{id}', {
        responses: {
            '204': {
                description: 'Matriz PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Matriz, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Matriz]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/matriz/{id}', {
        responses: {
            '204': {
                description: 'Matriz PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Matriz]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/matriz/{id}', {
        responses: {
            '204': {
                description: 'Matriz DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MatrizController.prototype, "deleteById", null);
MatrizController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.MatrizRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MatrizRepository])
], MatrizController);
exports.MatrizController = MatrizController;
//# sourceMappingURL=matriz.controller.js.map