"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorEtapas = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AdministradorEtapas = class AdministradorEtapas extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        generated: true,
        precision: 10,
        scale: 0,
        id: 1,
        mysql: { columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], AdministradorEtapas.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Persona', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], AdministradorEtapas.prototype, "idPersona", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], AdministradorEtapas.prototype, "idEtapa", void 0);
AdministradorEtapas = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'administrador_etapas' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], AdministradorEtapas);
exports.AdministradorEtapas = AdministradorEtapas;
//# sourceMappingURL=administrador-etapas.model.js.map