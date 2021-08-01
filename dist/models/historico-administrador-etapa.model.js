"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoAdministradorEtapa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HistoricoAdministradorEtapa = class HistoricoAdministradorEtapa extends repository_1.Entity {
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
], HistoricoAdministradorEtapa.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID-Administrador_Etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], HistoricoAdministradorEtapa.prototype, "idAdministradorEtapa", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        mysql: { columnName: 'Fecha_Inicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoAdministradorEtapa.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        mysql: { columnName: 'Fecha_Final', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoAdministradorEtapa.prototype, "fechaFinal", void 0);
HistoricoAdministradorEtapa = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mysql: { schema: 'urbazar', table: 'historico_administrador_etapa' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HistoricoAdministradorEtapa);
exports.HistoricoAdministradorEtapa = HistoricoAdministradorEtapa;
//# sourceMappingURL=historico-administrador-etapa.model.js.map