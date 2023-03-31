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
exports.LoadConfiguration = void 0;
const dp_configuration_lib_1 = require("@greatminds/dp-configuration-lib");
class LoadConfiguration {
    buildConfiguration(logger) {
        return __awaiter(this, void 0, void 0, function* () {
            return dp_configuration_lib_1.ConfigurationBuilderService.getConfiguration({
                useEnvironmental: true,
                secretsManagerSecretIds: [process.env.AWS__SECRET_ID || ''],
            }, logger);
        });
    }
}
exports.LoadConfiguration = LoadConfiguration;
