import { NightwatchTests, NightwatchBrowser } from "nightwatch";
import { LoginPage } from '../../pages/auth/loginPage';
import { ExplorePage } from '../../pages/explore/explorePage';
import { configVariables } from '../../../utils/InitTestHelper';
import { GradePage } from '../../pages/explore/gradePage';

let logger;
let data;
let url: string;

const loginTest: NightwatchTests = {
  '@tags': ['login', 'regression'],
  before: async (browser: NightwatchBrowser) => {
    const { configSecretId, log } = await configVariables('SIT-NIGHTWATCH');
    logger = log;
    data = configSecretId;
    url = data[`${process.env.ENV}_URL`];
  },
  'Login to Habitat Test': async (browser: NightwatchBrowser) => {
    let login: LoginPage = browser.page.loginPage();
    let explore: ExplorePage = browser.page.explorePage();
    let gradePage: GradePage = browser.page.gradePage();

    await browser.navigateTo(url);
    await login.loginWithEmail('playwright_t1@greatmindsdemo.com', 'Test@123');
    await explore.waitForExploreToBeReady();
    await explore.openHamburgerMenu();
    await explore.navigateToApp('Assign');
  }
}

export default loginTest;
