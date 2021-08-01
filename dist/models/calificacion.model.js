"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calificacion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Calificacion = class Calificacion extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        id: 1,
        generated: true,
        mysql: { columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Calificacion.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Producto', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Calificacion.prototype, "idProducto", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Cliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Calificacion.prototype, "idCliente", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'Estrellas', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Calificacion.prototype, "estrellas", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 200,
        mysql: { columnName: 'comentario', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Calificacion.prototype, "comentario", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        mysql: { columnName: 'Fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Calificacion.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'id_vendedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Calificacion.prototype, "idVendedor", void 0);
Calificacion = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'calificacion' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Calificacion);
exports.Calificacion = Calificacion;
//# sourceMappingURL=calificacion.model.js.map