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
describe('Wikipedia Android app test', function () {
    before(function (app) {
        app.click('id', 'org.wikipedia:id/fragment_onboarding_skip_button');
    });
    it('Search for BrowserStack', function (app) {
        return __awaiter(this, void 0, void 0, function* () {
            app
                .click('id', 'org.wikipedia:id/search_container')
                .sendKeys('id', 'org.wikipedia:id/search_src_text', 'browserstack')
                .click({ selector: 'org.wikipedia:id/page_list_item_title', locateStrategy: 'id', index: 0 })
                .waitUntil(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    // wait for webview context to be available
                    const contexts = yield this.appium.getContexts();
                    return contexts.includes('WEBVIEW_org.wikipedia');
                });
            })
                .appium.setContext('WEBVIEW_org.wikipedia')
                .assert.textEquals('.pcs-edit-section-title', 'BrowserStack'); // command run in webview context
        });
    });
});
