import { EnhancedPageObject, NightwatchBrowser, PageObjectModel } from 'nightwatch';

const assignAssessmentModalCommands = {
  waitForModalToBeReady(this: AssignAssessmentModal) {
    return this
      .waitForElementVisible('@header');
  }
}

const assignAssessmentModal: PageObjectModel = {
  commands: [assignAssessmentModalCommands],
  elements: {
    header: {
      selector: '.assign-title span'
    }
  }
}

export default assignAssessmentModal;

export interface AssignAssessmentModal
  extends EnhancedPageObject<
    typeof assignAssessmentModalCommands,
    typeof assignAssessmentModal.elements>
{ }
