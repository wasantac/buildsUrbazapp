"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matriz = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Matriz = class Matriz extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Matriz.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Matriz.prototype, "data", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Matriz.prototype, "urbanizacion", void 0);
Matriz = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Matriz);
exports.Matriz = Matriz;
//# sourceMappingURL=matriz.model.js.map