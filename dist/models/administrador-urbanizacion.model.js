"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorUrbanizacion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AdministradorUrbanizacion = class AdministradorUrbanizacion extends repository_1.Entity {
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
], AdministradorUrbanizacion.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Persona', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], AdministradorUrbanizacion.prototype, "idPersona", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Urbanizacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], AdministradorUrbanizacion.prototype, "idUrbanizacion", void 0);
AdministradorUrbanizacion = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mysql: { schema: 'urbazar', table: 'administrador_urbanizacion' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AdministradorUrbanizacion);
exports.AdministradorUrbanizacion = AdministradorUrbanizacion;
//# sourceMappingURL=administrador-urbanizacion.model.js.map