"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const nodemailer = require('nodemailer');
const core_1 = require("@loopback/core");
let CorreoController = class CorreoController {
    constructor(request) {
        this.request = request;
    }
    async correo(request) {
        nodemailer.createTestAccount(() => {
            const htmlEmail = `
      <h4> Un nuevo cliente intenta contactarte </h4>
      <ul> 
          <li>Nombre: ${this.request.body.nombres}</li>
          <li>Email: ${this.request.body.email}</li>
          <li>Urbanización: ${this.request.body.urbanizacion} </li>
          <li>Etapa: ${this.request.body.etapa} </li>
      </ul>
      <p> <strong> Asunto: </strong>  ${this.request.body.asunto}  </p> 
      <h4> Mensaje </h4>
      <p> ${this.request.body.mensaje}</p> `;
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'urbazapp@gmail.com',
                    pass: 'urbazApp25'
                }
            });
            let mailOptions = {
                from: "Remitente",
                to: "belinaza@espol.edu.ec",
                subject: "Formulario de contacto",
                text: this.request.body.nombres,
                html: htmlEmail
            };
            transporter.sendMail(mailOptions, () => {
                console.log("Correo enviado");
            });
        });
    }
};
tslib_1.__decorate([
    rest_1.post('/api/contactanos'),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/x-www-form-urlencoded': {
                type: 'object',
                schema: {
                    properties: {
                        nombres: { type: 'string' },
                        email: { type: 'string' },
                        urbanizacion: { type: 'string' },
                        etapa: { type: 'string' },
                        asunto: { type: 'string' },
                        mensaje: { type: 'string' }
                    },
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CorreoController.prototype, "correo", null);
CorreoController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CorreoController);
exports.CorreoController = CorreoController;
//# sourceMappingURL=correo.controller.js.map