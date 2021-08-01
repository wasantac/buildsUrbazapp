"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrito = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Carrito = class Carrito extends repository_1.Entity {
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
        mysql: { columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Carrito.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Usuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Carrito.prototype, "idUsuario", void 0);
Carrito = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'carrito' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Carrito);
exports.Carrito = Carrito;
//# sourceMappingURL=carrito.model.js.map