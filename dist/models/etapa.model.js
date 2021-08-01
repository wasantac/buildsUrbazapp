"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etapa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Etapa = class Etapa extends repository_1.Entity {
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
], Etapa.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 100,
        mysql: { columnName: 'nombre', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Etapa.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 100,
        mysql: { columnName: 'Ubicacion', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Etapa.prototype, "ubicacion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Urbanizacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Etapa.prototype, "idUrbanizacion", void 0);
Etapa = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'etapa' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Etapa);
exports.Etapa = Etapa;
//# sourceMappingURL=etapa.model.js.map