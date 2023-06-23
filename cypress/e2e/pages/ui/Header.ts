class Header {
  headerLocator = '#root header'
  titleLocator = '[data-cy="header-title"]'
  titleText = 'Where in the world?'
  themeTextLocator = '[data-cy="header-theme"]'
  onboardingIconLocator = '.onboarding svg'
  onboardingTextLocator = '[data-cy="header-onboarding"]'
}

export const header = new Header()
