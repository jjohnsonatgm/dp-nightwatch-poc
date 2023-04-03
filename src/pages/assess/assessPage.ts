import { EnhancedPageObject, PageObjectModel } from 'nightwatch';
import { AssignAssessmentModal } from '../modals/assign.assessment.modal';

const assessCommands = {
  waitForPageToBeReady(this: AssessPage) {
    return this
      .waitForElementVisible('@header');
  },
  findAssessment(this: AssessPage, browser: any, assessment: string) {
    return browser
      .within('div[class*="AssessmentCard"]')
      .findElement(`div[innertext="${assessment}"]`)
      .click('[data-dp-analytics-id="AssignAssessment"]');
  },
  validateAssignAssessmentModalIsDisplayed(this: AssignAssessmentModal) {
    return this
      .waitForModalToBeReady();
  }
}

const assessPage: PageObjectModel = {
  commands: [assessCommands],
  elements: {
    header: {
      selector: '.title-description h2'
    }
  }
}

export default assessPage;

export interface AssessPage
  extends EnhancedPageObject<
    typeof assessCommands,
    typeof assessPage.elements>
{ }
