"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = __importDefault(require("selenium-webdriver"));
class BrowserStackUtility {
    constructor() {
        this._driver = new selenium_webdriver_1.default.Builder();
    }
}
