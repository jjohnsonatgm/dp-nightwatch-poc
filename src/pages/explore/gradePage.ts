import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const gradePageCommands = {
  clickModuleCard(this: GradePage, grade: string) {
    return this
      .waitForElementVisible(`[href*="${grade}"]`)
      .click(`[href*="${grade}"]`);
  }
}

const gradePage: PageObjectModel = {
  commands: [gradePageCommands],
  elements: {
    gradeTitle: {
      selector: 'h2[class*="Heading"]'
    }
  }
}

export default gradePage;

export interface GradePage
  extends EnhancedPageObject<
    typeof gradePageCommands,
    typeof gradePage.elements
  >{ }
