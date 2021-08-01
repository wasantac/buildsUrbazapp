"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CarritoController = class CarritoController {
    constructor(carritoRepository) {
        this.carritoRepository = carritoRepository;
    }
    async create(carrito) {
        return this.carritoRepository.create(carrito);
    }
    async count(where) {
        return this.carritoRepository.count(where);
    }
    async find(filter) {
        return this.carritoRepository.find(filter);
    }
    async updateAll(carrito, where) {
        return this.carritoRepository.updateAll(carrito, where);
    }
    async findById(id, filter) {
        return this.carritoRepository.findById(id, filter);
    }
    async updateById(id, carrito) {
        await this.carritoRepository.updateById(id, carrito);
    }
    async replaceById(id, carrito) {
        await this.carritoRepository.replaceById(id, carrito);
    }
    async deleteById(id) {
        await this.carritoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/carrito', {
        responses: {
            '200': {
                description: 'Carrito model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Carrito) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Carrito, {
                    title: 'NewCarrito',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Carrito]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/carrito/count', {
        responses: {
            '200': {
                description: 'Carrito model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Carrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/carrito', {
        responses: {
            '200': {
                description: 'Array of Carrito model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Carrito, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Carrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/carrito', {
        responses: {
            '200': {
                description: 'Carrito PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Carrito, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Carrito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Carrito, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/carrito/{id}', {
        responses: {
            '200': {
                description: 'Carrito model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Carrito, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Carrito, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/carrito/{id}', {
        responses: {
            '204': {
                description: 'Carrito PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Carrito, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Carrito]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/carrito/{id}', {
        responses: {
            '204': {
                description: 'Carrito PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Carrito]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/carrito/{id}', {
        responses: {
            '204': {
                description: 'Carrito DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CarritoController.prototype, "deleteById", null);
CarritoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CarritoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CarritoRepository])
], CarritoController);
exports.CarritoController = CarritoController;
//# sourceMappingURL=carrito.controller.js.map