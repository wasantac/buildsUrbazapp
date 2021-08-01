"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoUsuario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HistoricoUsuario = class HistoricoUsuario extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: 1,
        required: true,
        precision: 10,
        scale: 0,
        mysql: { columnName: 'ID_Usuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", Number)
], HistoricoUsuario.prototype, "idUsuario", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        mysql: { columnName: 'Fecha_Inicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoUsuario.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        mysql: { columnName: 'Fecha_Final', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N' },
    }),
    tslib_1.__metadata("design:type", String)
], HistoricoUsuario.prototype, "fechaFinal", void 0);
HistoricoUsuario = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mysql: { schema: 'urbazar', table: 'historico_usuario' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], HistoricoUsuario);
exports.HistoricoUsuario = HistoricoUsuario;
//# sourceMappingURL=historico-usuario.model.js.map