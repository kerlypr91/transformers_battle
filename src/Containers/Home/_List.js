import React, { useContext } from 'react'

import { AppContext } from '../../Context'
import { FindBattleWinner, TypesOfTransformers } from '../../Utils'
import AutobotIcon from '../../Images/autobotIcon.png'
import DecepticonIcon from '../../Images/decepticonIcon.png'

import './index.scss'


/** Renders */
export default function ListSection () {
  /** Context */
  const { transformers, battleInProgress, battleHistory, currentBattleStats } = useContext(AppContext)
  const [battleHistoryValue, setBattleHistory] = battleHistory
  const [transformersValue, setTransformers] = transformers
  const [battleInProgressValue, setBattleInProgress] = battleInProgress
  const [currentBattleStatsValue, setCurrentBatteStats] = currentBattleStats

  const autobots = transformersValue.filter(item => item.type === TypesOfTransformers.autobot)
  const decepticons = transformersValue.filter(item => item.type === TypesOfTransformers.decepticon)
  const disabled = transformersValue.length <= 0 || decepticons.length < 1 || autobots.length < 1

  const handleStartBattle = () => {
    setBattleInProgress(true)

    setTimeout(() => {
      const battleStats = FindBattleWinner(transformersValue)
      const newBattleHistoryValue = [...battleHistoryValue]

      newBattleHistoryValue.push(battleStats)

      setBattleInProgress(false)
      setTransformers([])
      setBattleHistory(newBattleHistoryValue)
      setCurrentBatteStats(battleStats)
    }, 1000)
  }

  /** Render */

  const disabledClass = disabled ? 'home-container__list__start-button--disabled' : ''

  return (
    <section className="home-container__list">
      <fieldset className="home-container__list__set">
        <legend
          className="home-container__list__set__legend"
          align="right"
        >
          Ready to fight
        </legend>
        {
          transformersValue.map((item, index) => {
            const { name, type } = item
            const image = type === TypesOfTransformers.autobot ? AutobotIcon : DecepticonIcon

            return (
              <div
                key={index}
                className="home-container__list__set__item"
              >
                <img className="home-container__list__set__item__icon" src={image} alt="icon" />
                {name}
              </div>
            )
          })
        }
      </fieldset>
      <h3 className="home-container__list__caption">*There must be at least one autobot and one decepticon to start a battle.</h3>
      <button className={`home-container__list__start-button ${disabledClass}`} disabled={disabled} onClick={handleStartBattle}>
        Start Battle
      </button>
    </section>
  )
}