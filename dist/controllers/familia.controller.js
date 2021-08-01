"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FamiliaController = class FamiliaController {
    constructor(familiaRepository) {
        this.familiaRepository = familiaRepository;
    }
    async create(familia) {
        return this.familiaRepository.create(familia);
    }
    async count(where) {
        return this.familiaRepository.count(where);
    }
    async find(filter) {
        return this.familiaRepository.find(filter);
    }
    async updateAll(familia, where) {
        return this.familiaRepository.updateAll(familia, where);
    }
    async findById(id, filter) {
        return this.familiaRepository.findById(id, filter);
    }
    async updateById(id, familia) {
        await this.familiaRepository.updateById(id, familia);
    }
    async replaceById(id, familia) {
        await this.familiaRepository.replaceById(id, familia);
    }
    async deleteById(id) {
        await this.familiaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/familias'),
    rest_1.response(200, {
        description: 'Familia model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Familia) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Familia, {
                    title: 'NewFamilia',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Familia]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/familias/count'),
    rest_1.response(200, {
        description: 'Familia model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Familia)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/familias'),
    rest_1.response(200, {
        description: 'Array of Familia model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Familia, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Familia)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/familias'),
    rest_1.response(200, {
        description: 'Familia PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Familia, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Familia)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Familia, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/familias/{id}'),
    rest_1.response(200, {
        description: 'Familia model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Familia, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Familia, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/familias/{id}'),
    rest_1.response(204, {
        description: 'Familia PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Familia, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Familia]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/familias/{id}'),
    rest_1.response(204, {
        description: 'Familia PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Familia]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/familias/{id}'),
    rest_1.response(204, {
        description: 'Familia DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FamiliaController.prototype, "deleteById", null);
FamiliaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.FamiliaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FamiliaRepository])
], FamiliaController);
exports.FamiliaController = FamiliaController;
//# sourceMappingURL=familia.controller.js.map