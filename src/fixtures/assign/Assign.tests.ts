import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { LoginPage } from '../../pages/auth/loginPage';
import { ExplorePage } from '../../pages/explore/explorePage';
import { configVariables } from '../../../utils/InitTestHelper';
import { AssessPage } from '../../pages/assess/assessPage';

let logger;
let data;
let url: string;

const assignTest: NightwatchTests = {
  '@tags': ['assign', 'regression'],
  before: async (browser: NightwatchBrowser) => {
    const { configSecretId, log } = await configVariables('SIT-NIGHTWATCH');
    logger = log;
    data = configSecretId;
    url = data[`${process.env.ENV}_URL`];
  },
  'Assign a test to a class': async (browser: NightwatchBrowser) => {
    let login: LoginPage = browser.page.loginPage();
    let explore: ExplorePage = browser.page.explorePage();
    let assessPage: AssessPage = browser.page.assessPage();

    await browser.navigateTo(url);
    await login.loginWithEmail('playwright_t1@greatmindsdemo.com', 'Test@123');
    await explore.waitForExploreToBeReady();
    await explore.openHamburgerMenu();
    await explore.navigateToApp('Assess');
    await assessPage.waitForPageToBeReady();
    await assessPage.findAssessment(browser, 'Equip Pre-Module Assessment, Grade 3, Module 1');
    await assessPage.validateAssignAssessmentModalIsDisplayed();
  }
}

export default assignTest;
