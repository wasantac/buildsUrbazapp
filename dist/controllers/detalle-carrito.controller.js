"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleCarritoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DetalleCarritoController = class DetalleCarritoController {
    constructor(detalleCarritoRepository) {
        this.detalleCarritoRepository = detalleCarritoRepository;
    }
    async create(detalleCarrito) {
        return this.detalleCarritoRepository.create(detalleCarrito);
    }
    async count(where) {
        return this.detalleCarritoRepository.count(where);
    }
    async find(filter) {
        return this.detalleCarritoRepository.find(filter);
    }
    async updateAll(detalleCarrito, where) {
        return this.detalleCarritoRepository.updateAll(detalleCarrito, where);
    }
    async findById(id, filter) {
        return this.detalleCarritoRepository.findById(id, filter);
    }
    async updateById(id, detalleCarrito) {
        await this.detalleCarritoRepository.updateById(id, detalleCarrito);
    }
    async replaceById(id, detalleCarrito) {
        await this.detalleCarritoRepository.replaceById(id, detalleCarrito);
    }
    async deleteById(id) {
        await this.detalleCarritoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/detalle-carrito', {
        responses: {
            '200': {
                description: 'DetalleCarrito model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.DetalleCarrito) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DetalleCarrito, {
                    title: 'NewDetalleCarrito',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DetalleCarrito]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/detalle-carrito/count', {
        responses: {
            '200': {
                description: 'DetalleCarrito model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DetalleCarrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/detalle-carrito', {
        responses: {
            '200': {
                description: 'Array of DetalleCarrito model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.DetalleCarrito, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DetalleCarrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/detalle-carrito', {
        responses: {
            '200': {
                description: 'DetalleCarrito PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DetalleCarrito, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DetalleCarrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DetalleCarrito, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/detalle-carrito/{id}', {
        responses: {
            '200': {
                description: 'DetalleCarrito model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.DetalleCarrito, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DetalleCarrito, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/detalle-carrito/{id}', {
        responses: {
            '204': {
                description: 'DetalleCarrito PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DetalleCarrito, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetalleCarrito]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/detalle-carrito/{id}', {
        responses: {
            '204': {
                description: 'DetalleCarrito PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetalleCarrito]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/detalle-carrito/{id}', {
        responses: {
            '204': {
                description: 'DetalleCarrito DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleCarritoController.prototype, "deleteById", null);
DetalleCarritoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DetalleCarritoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DetalleCarritoRepository])
], DetalleCarritoController);
exports.DetalleCarritoController = DetalleCarritoController;
//# sourceMappingURL=detalle-carrito.controller.js.map