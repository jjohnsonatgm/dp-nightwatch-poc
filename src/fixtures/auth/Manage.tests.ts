import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import { configVariables } from '../../../utils/InitTestHelper';
import { LoginPage } from '../../pages/auth/loginPage';
import { ExplorePage } from '../../pages/explore/explorePage';

let logger;
let data;
let url: string;

const loginToManageTest: NightwatchTests = {
  '@tags': ['login', 'smoke'],
  before: async (browser: NightwatchBrowser) => {
    const { configSecretId, log } = await configVariables('SIT-NIGHTWATCH');
    logger = log;
    data = configSecretId;
    url = data[`${process.env.ENV}_URL`];
  },
  'Login to Manage Test': async (browser: NightwatchBrowser) => {
    let login: LoginPage = browser.page.loginPage();

    await browser.navigateTo(url);
    await login.loginWithEmail('new.dis@greatmindsdemo.org', 'Test@123');
    await browser.pause(3000);
  }
}

export default loginToManageTest;
