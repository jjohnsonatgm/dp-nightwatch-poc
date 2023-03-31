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
exports.configVariables = void 0;
const dp_logger_lib_1 = require("@greatminds/dp-logger-lib");
const LoadConfiguration_1 = require("./LoadConfiguration");
const loadConfiguration = new LoadConfiguration_1.LoadConfiguration();
function configVariables(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = dp_logger_lib_1.LoggerServiceFactory.createLoggerService({ useSimpleFormat: true });
        const loadConfig = yield loadConfiguration.buildConfiguration(logger);
        const { secretId } = loadConfig.get('aws');
        const configSecretId = loadConfig.get(secretId);
        const log = logger.getLogger(context);
        return { configSecretId, log };
    });
}
exports.configVariables = configVariables;
