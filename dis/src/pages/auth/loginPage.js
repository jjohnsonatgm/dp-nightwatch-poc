"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginCommands = {
    loginWithEmail(username, password) {
        return this
            .waitForElementVisible('@loginWithEmailBtn')
            .click('@loginWithEmailBtn')
            .waitForElementVisible('@emailInput')
            .assert.visible('@passwordInput')
            .click('@emailInput')
            .setValue('@emailInput', username)
            .setValue('@passwordInput', password)
            .click('@loginBtn');
    }
};
const loginPage = {
    commands: [loginCommands],
    elements: {
        loginWithEmailBtn: {
            selector: 'button[class*="LoginWithEmail"]'
        },
        emailInput: {
            selector: '#email'
        },
        passwordInput: {
            selector: '#password'
        },
        loginBtn: {
            selector: '[aria-label="Log in"]'
        }
    }
};
exports.default = loginPage;
