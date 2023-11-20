"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
function logMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('\x1b[33m', `[ ${new Date().toLocaleString('ru', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: '2-digit'
            })} ]\n`, '\x1b[32m', req.method, '\x1b[31m', `\n ${req.path}`, '\x1b[37m');
            return next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.logMiddleware = logMiddleware;
//# sourceMappingURL=logMiddleWare.js.map