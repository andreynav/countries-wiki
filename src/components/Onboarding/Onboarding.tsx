import { Hints, Steps } from 'intro.js-react'
import 'intro.js/introjs.css'
import { useState } from 'react'

export const Onboarding = () => {
  const [stepsEnabled, setStepsEnabled] = useState<boolean>(true)
  const [steps, _setSteps] = useState([
    {
      element: '.toggle',
      intro: 'You can switch Dark or Light theme',
      position: 'bottom'
    },
    {
      element: '.onboarding',
      intro: 'You can enable or disable  this onboarding',
      position: 'bottom'
    },
    {
      element: '.customSelect',
      intro: 'You can choose the region of the world you are interested in',
      position: 'bottom'
    },
    {
      element: '.search',
      intro: 'You can search for any country in the current region',
      position: 'bottom'
    }
  ])
  const [hints, _setHints] = useState([
    {
      element: '.toggle',
      hint: 'You can switch Dark or Light theme',
      hintPosition: 'middle-middle'
    },
    {
      element: '.onboarding',
      hint: 'You can turn on or turn off onboarding',
      hintPosition: 'middle-middle'
    },
    {
      element: '.customSelect',
      hint: 'You can choose the region of the world you are interested in',
      hintPosition: 'middle-middle'
    },
    {
      element: '.search',
      hint: 'You can search for any country in the current region',
      hintPosition: 'middle-middle'
    }
  ])

  const options = {
    showButtons: true,
    nextLabel: 'Next step',
    prevLabel: 'Back step',
    showBullets: false,
    showProgress: true,
    showStepNumbers: true,
    tooltipClass: 'tooltip'
  }

  const onExit = () => {
    setStepsEnabled(false)
  }

  return (
    <>
      <Steps
        enabled={stepsEnabled || true}
        steps={steps}
        initialStep={0}
        onExit={onExit}
        options={options}
      />
      <Hints enabled={false} hints={hints} />
    </>
  )
}
