"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleCarrito = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DetalleCarrito = class DetalleCarrito extends repository_1.Entity {
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
        mysql: { columnName: 'ID_detalle', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], DetalleCarrito.prototype, "idDetalle", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Producto', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], DetalleCarrito.prototype, "idProducto", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'Cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], DetalleCarrito.prototype, "cantidad", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'id_carrito', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], DetalleCarrito.prototype, "idCarrito", void 0);
DetalleCarrito = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'detalle_carrito' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], DetalleCarrito);
exports.DetalleCarrito = DetalleCarrito;
//# sourceMappingURL=detalle-carrito.model.js.map