"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CalificacionController = class CalificacionController {
    constructor(calificacionRepository) {
        this.calificacionRepository = calificacionRepository;
    }
    async create(calificacion) {
        return this.calificacionRepository.create(calificacion);
    }
    async count(where) {
        return this.calificacionRepository.count(where);
    }
    async find(filter) {
        return this.calificacionRepository.find(filter);
    }
    async updateAll(calificacion, where) {
        return this.calificacionRepository.updateAll(calificacion, where);
    }
    async findById(id, filter) {
        return this.calificacionRepository.findById(id, filter);
    }
    async updateById(id, calificacion) {
        await this.calificacionRepository.updateById(id, calificacion);
    }
    async replaceById(id, calificacion) {
        await this.calificacionRepository.replaceById(id, calificacion);
    }
    async deleteById(id) {
        await this.calificacionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/calificaciones', {
        responses: {
            '200': {
                description: 'Calificacion model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Calificacion) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Calificacion, {
                    title: 'NewCalificacion',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Calificacion]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/calificaciones/count', {
        responses: {
            '200': {
                description: 'Calificacion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Calificacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/calificaciones', {
        responses: {
            '200': {
                description: 'Array of Calificacion model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Calificacion, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Calificacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/calificaciones', {
        responses: {
            '200': {
                description: 'Calificacion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Calificacion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Calificacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Calificacion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/calificaciones/{id}', {
        responses: {
            '200': {
                description: 'Calificacion model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Calificacion, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Calificacion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/calificaciones/{id}', {
        responses: {
            '204': {
                description: 'Calificacion PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Calificacion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Calificacion]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/calificaciones/{id}', {
        responses: {
            '204': {
                description: 'Calificacion PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Calificacion]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/calificaciones/{id}', {
        responses: {
            '204': {
                description: 'Calificacion DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalificacionController.prototype, "deleteById", null);
CalificacionController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CalificacionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CalificacionRepository])
], CalificacionController);
exports.CalificacionController = CalificacionController;
//# sourceMappingURL=calificacion.controller.js.map