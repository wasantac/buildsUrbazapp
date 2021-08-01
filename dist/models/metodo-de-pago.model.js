"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodoDePago = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let MetodoDePago = class MetodoDePago extends repository_1.Entity {
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
], MetodoDePago.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        mysql: { columnName: 'cvv', dataType: 'varchar', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], MetodoDePago.prototype, "cvv", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        length: 100,
        mysql: { columnName: 'NombreMetodo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Date)
], MetodoDePago.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 100,
        mysql: { columnName: 'NombreMetodo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], MetodoDePago.prototype, "nombreMetodo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Cliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], MetodoDePago.prototype, "idCliente", void 0);
MetodoDePago = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'metodo_de_pago' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], MetodoDePago);
exports.MetodoDePago = MetodoDePago;
//# sourceMappingURL=metodo-de-pago.model.js.map