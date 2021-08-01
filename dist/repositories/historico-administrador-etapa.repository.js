"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoAdministradorEtapaRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let HistoricoAdministradorEtapaRepository = class HistoricoAdministradorEtapaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.HistoricoAdministradorEtapa, dataSource);
    }
};
HistoricoAdministradorEtapaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.mysql')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MysqlDataSource])
], HistoricoAdministradorEtapaRepository);
exports.HistoricoAdministradorEtapaRepository = HistoricoAdministradorEtapaRepository;
//# sourceMappingURL=historico-administrador-etapa.repository.js.map