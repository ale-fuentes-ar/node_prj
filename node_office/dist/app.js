"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docx_templates_1 = __importDefault(require("docx-templates"));
const fs_1 = __importDefault(require("fs"));
const template = fs_1.default.readFileSync('ALETemplate.docx');
const bufferAux = await (0, docx_templates_1.default)({
    template,
    data: {
        ALEName: 'ale from node',
        ALESurname: 'fuuuuu',
    }
});
fs_1.default.writeFileSync('my-report.docx', buffer);
//# sourceMappingURL=app.js.map