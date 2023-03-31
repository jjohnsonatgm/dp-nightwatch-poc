"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradePageCommands = {
    clickModuleCard(grade) {
        return this
            .waitForElementVisible(`[href*="${grade}"]`)
            .click(`[href*="${grade}"]`);
    }
};
const gradePage = {
    commands: [gradePageCommands],
    elements: {
        gradeTitle: {
            selector: 'h2[class*="Heading"]'
        }
    }
};
exports.default = gradePage;
