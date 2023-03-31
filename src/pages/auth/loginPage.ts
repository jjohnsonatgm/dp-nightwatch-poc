import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const loginCommands = {
  loginWithEmail(this: LoginPage, username: string, password: string) {
    return this
      .waitForElementVisible('@loginWithEmailBtn')
      .click('@loginWithEmailBtn')
      .waitForElementVisible('@emailInput')
      .assert.visible('@passwordInput')
      .click('@emailInput')
      .setValue('@emailInput', username)
      .setValue('@passwordInput', password)
      .click('@loginBtn')
  }
}

const loginPage: PageObjectModel = {
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
}

export default loginPage;

export interface LoginPage
  extends EnhancedPageObject<
    typeof loginCommands,
    typeof loginPage.elements>
{ }
