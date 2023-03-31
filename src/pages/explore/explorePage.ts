import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const explorePageCommands = {
  waitForExploreToBeReady(this: ExplorePage) {
    return this
      .waitForElementVisible('@moduleTitle')
  }
}

const explorePage: PageObjectModel = {
  commands: [explorePageCommands],
  elements: {
    moduleTitle: {
      selector: 'h2[class*="Heading"]'
    }
  }
}

export default explorePage;

export interface ExplorePage
  extends EnhancedPageObject<
    typeof  explorePageCommands,
    typeof explorePage.elements
  > { }
