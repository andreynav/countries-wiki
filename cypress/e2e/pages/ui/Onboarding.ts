class Onboarding {
  tooltipLocator = '.introjs-tooltip[role="dialog"]'
  textLocator = `${this.tooltipLocator} .introjs-tooltiptext`
  closeBtnLocator = '.introjs-tooltip .introjs-skipbutton'
  nextButtonLocator = `${this.tooltipLocator} .introjs-nextbutton`
  backButtonLocator = `${this.tooltipLocator} .introjs-prevbutton`

  themeToggleText = 'You can switch Dark or Light theme'
  onboardingToggleText = 'You can enable or disable  this onboarding'
}
export const onboarding = new Onboarding()
