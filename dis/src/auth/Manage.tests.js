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
const InitTestHelper_1 = require("../../utils/InitTestHelper");
let logger;
let data;
let url;
const loginToManageTest = {
    '@tags': ['login', 'smoke'],
    before: (browser) => __awaiter(void 0, void 0, void 0, function* () {
        const { configSecretId, log } = yield (0, InitTestHelper_1.configVariables)('SIT-NIGHTWATCH');
        logger = log;
        data = configSecretId;
        url = data[`${process.env.ENV}_URL`];
    }),
    'Login to Manage Test': (browser) => __awaiter(void 0, void 0, void 0, function* () {
        let login = browser.page.loginPage();
        yield browser.navigateTo(url);
        yield login.loginWithEmail('new.dis@greatmindsdemo.org', 'Test@123');
        yield browser.pause(3000);
    })
};
exports.default = loginToManageTest;
