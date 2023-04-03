import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const explorePageCommands = {
  waitForExploreToBeReady(this: ExplorePage) {
    return this
      .waitForElementVisible('@moduleTitle')
  },
  openHamburgerMenu(this: ExplorePage) {
    return this
      .waitForElementVisible('@hamburgerBtn')
      .click('@hamburgerBtn')
  },
  navigateToApp(this: ExplorePage, app: string) {
    const sel = `[aria-label="${app}"]`;
    return this
      .waitForElementVisible(sel)
      .click(sel)
  }
}

const explorePage: PageObjectModel = {
  commands: [explorePageCommands],
  elements: {
    moduleTitle: {
      selector: 'h2[class*="Heading"]'
    },
    hamburgerBtn: {
      selector: '.sidemenu-toggle-button'
    }
  }
}

export default explorePage;

export interface ExplorePage
  extends EnhancedPageObject<
    typeof  explorePageCommands,
    typeof explorePage.elements
  > { }
