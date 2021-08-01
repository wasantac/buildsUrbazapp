"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodoDePagoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MetodoDePagoController = class MetodoDePagoController {
    constructor(metodoDePagoRepository) {
        this.metodoDePagoRepository = metodoDePagoRepository;
    }
    async create(metodoDePago) {
        return this.metodoDePagoRepository.create(metodoDePago);
    }
    async count(where) {
        return this.metodoDePagoRepository.count(where);
    }
    async find(filter) {
        return this.metodoDePagoRepository.find(filter);
    }
    async updateAll(metodoDePago, where) {
        return this.metodoDePagoRepository.updateAll(metodoDePago, where);
    }
    async findById(id, filter) {
        return this.metodoDePagoRepository.findById(id, filter);
    }
    async updateById(id, metodoDePago) {
        await this.metodoDePagoRepository.updateById(id, metodoDePago);
    }
    async replaceById(id, metodoDePago) {
        await this.metodoDePagoRepository.replaceById(id, metodoDePago);
    }
    async deleteById(id) {
        await this.metodoDePagoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/metodo-de-pagos'),
    rest_1.response(200, {
        description: 'MetodoDePago model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.MetodoDePago) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.MetodoDePago, {
                    title: 'NewMetodoDePago',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.MetodoDePago]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/metodo-de-pagos/count'),
    rest_1.response(200, {
        description: 'MetodoDePago model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.MetodoDePago)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/metodo-de-pagos'),
    rest_1.response(200, {
        description: 'Array of MetodoDePago model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.MetodoDePago, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.MetodoDePago)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/metodo-de-pagos'),
    rest_1.response(200, {
        description: 'MetodoDePago PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.MetodoDePago, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.MetodoDePago)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.MetodoDePago, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/metodo-de-pagos/{id}'),
    rest_1.response(200, {
        description: 'MetodoDePago model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.MetodoDePago, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.MetodoDePago, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/metodo-de-pagos/{id}'),
    rest_1.response(204, {
        description: 'MetodoDePago PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.MetodoDePago, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.MetodoDePago]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/metodo-de-pagos/{id}'),
    rest_1.response(204, {
        description: 'MetodoDePago PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.MetodoDePago]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/metodo-de-pagos/{id}'),
    rest_1.response(204, {
        description: 'MetodoDePago DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MetodoDePagoController.prototype, "deleteById", null);
MetodoDePagoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.MetodoDePagoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MetodoDePagoRepository])
], MetodoDePagoController);
exports.MetodoDePagoController = MetodoDePagoController;
//# sourceMappingURL=metodo-de-pago.controller.js.map