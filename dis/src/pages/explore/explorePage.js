"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const explorePageCommands = {
    waitForExploreToBeReady() {
        return this
            .waitForElementVisible('@moduleTitle');
    },
    openHamburgerMenu() {
        return this
            .waitForElementVisible('@hamburgerBtn')
            .click('@hamburgerBtn');
    },
    navigateToApp(app) {
        const sel = `[aria-label="${app}"]`;
        return this
            .waitForElementVisible(sel)
            .click(sel);
    }
};
const explorePage = {
    commands: [explorePageCommands],
    elements: {
        moduleTitle: {
            selector: 'h2[class*="Heading"]'
        },
        hamburgerBtn: {
            selector: '.sidemenu-toggle-button'
        }
    }
};
exports.default = explorePage;
