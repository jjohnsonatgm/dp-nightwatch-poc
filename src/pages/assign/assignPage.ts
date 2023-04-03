import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const assignCommands = {
  waitForPageToBeReady(this: AssignPage) {
    return this
      .waitForElementVisible('@header');
  }
}

const assignPage: PageObjectModel = {
  commands: [assignCommands],
  elements: {
    header: {
      selector: 'h1[class*="PageTitle"]'
    }
  }
}

export default assignPage;

export interface AssignPage
  extends EnhancedPageObject<
    typeof assignCommands,
    typeof assignPage.elements>
{ }

