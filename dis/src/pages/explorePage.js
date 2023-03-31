"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const explorePageCommands = {
    waitForExploreToBeReady() {
        return this
            .waitForElementVisible('@moduleTitle');
    }
};
const explorePage = {
    commands: [explorePageCommands],
    elements: {
        moduleTitle: {
            selector: 'h2[class*="Heading"]'
        }
    }
};
exports.default = explorePage;
