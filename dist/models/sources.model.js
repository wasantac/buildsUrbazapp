"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sources = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Sources = class Sources extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Sources.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Sources.prototype, "id_producto", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sources.prototype, "source", void 0);
Sources = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Sources);
exports.Sources = Sources;
//# sourceMappingURL=sources.model.js.map