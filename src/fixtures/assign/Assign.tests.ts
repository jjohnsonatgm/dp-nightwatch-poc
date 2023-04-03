import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { LoginPage } from '../../pages/auth/loginPage';
import { ExplorePage } from '../../pages/explore/explorePage';
import { configVariables } from '../../../utils/InitTestHelper';
import { AssessPage } from '../../pages/assess/assessPage';
import { AssignAssessmentModal } from '../../pages/modals/assignAssessmentModal';

let logger;
let data;
let url: string;

let login: LoginPage;
let explore: ExplorePage;
let assessPage: AssessPage;
let assignAssessmentModal: AssignAssessmentModal;

const assignTest: NightwatchTests = {
  '@tags': ['assign', 'regression'],
  before: async (browser: NightwatchBrowser) => {
    const { configSecretId, log } = await configVariables('SIT-NIGHTWATCH');
    logger = log;
    data = configSecretId;
    url = data[`${process.env.ENV}_URL`];

    login = browser.page.loginPage();
    explore = browser.page.explorePage();
    assessPage = browser.page.assessPage();
    assignAssessmentModal = browser.page.assignAssessmentModal();
  },
  'Assign a test to a class': async (browser: NightwatchBrowser) => {
    await browser.navigateTo(url);
    await login.loginWithEmail('playwright_t1@greatmindsdemo.com', 'Test@123');
    await explore.waitForExploreToBeReady();
    await explore.openHamburgerMenu();
    await explore.navigateToApp('Assess');
    await assessPage.waitForPageToBeReady();
    await assessPage.findAssessment(browser, 'Equip Pre-Module Assessment, Grade 3, Module 1');
    await assignAssessmentModal.waitForModalToBeReady();
  }
}

export default assignTest;
