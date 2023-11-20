"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const httpError_1 = require("../utils/httpError");
class FileService {
    static getFile(fileName) {
        const splittedName = fileName.split('.');
        const dirPath = path_1.default.join(__dirname, '../../61_docs', `Пакет ${splittedName[0]}`);
        const files = fs_1.default.readdirSync(dirPath);
        let file;
        for (const file of files) {
            if (file.startsWith(fileName))
                return path_1.default.join(dirPath, file);
        }
        throw new httpError_1.HttpError(404, 'File not found');
    }
}
exports.default = FileService;
//# sourceMappingURL=fileService.js.map