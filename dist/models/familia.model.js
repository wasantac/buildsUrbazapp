"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Familia = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Familia = class Familia extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        generated: true,
        scale: 0,
        id: 1,
        mysql: { columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Familia.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], Familia.prototype, "idEtapa", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 100,
        mysql: { columnName: 'Apellido', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Familia.prototype, "apellido", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 100,
        mysql: { columnName: 'Clave', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], Familia.prototype, "clave", void 0);
Familia = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'familia' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Familia);
exports.Familia = Familia;
//# sourceMappingURL=familia.model.js.map