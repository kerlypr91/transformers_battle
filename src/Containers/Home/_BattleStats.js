import React, { useContext } from 'react'

import { AppContext } from '../../Context'
import { TransformerTypesList } from '../../Utils'

import './_battleStats.scss'

export default function BatteStats (props) {
  /** Context */
  const { currentBattleStats } = useContext(AppContext)
  const [currentBattleStatsValue] = currentBattleStats

  const { onNewBattle } = props

  /** Renders */

  const renderDestroyedState = () => {
    const { destroyed } = currentBattleStatsValue

    if (destroyed) {
      return <h3 className="stats__destroyed">This battle has ended.<br />All competitors were destroyed.</h3>
    }

    return null
  }

  const renderStats = () => {
    const {
      destroyed,
      numberOfBattles,
      survivors,
      winnerTeamType,
      winningTeam
    } = currentBattleStatsValue

    if (destroyed) {
      return null
    }

    const winnigTeamLabel = TransformerTypesList.find(item => item.key === winnerTeamType)?.text
    const loserTeamLabel = TransformerTypesList.find(item => item.key !== winnerTeamType)?.text

    return (
      <div className="stats-content">
        <p className="stats-content__results">
          <span className="stats-content__results__label">Number of Battles:&nbsp;</span>
          <span className="stats-content__results__value">{numberOfBattles}</span>
        </p>
        <p className="stats-content__results">
          <span className="stats-content__results__label">Winning Team:&nbsp;</span>
          <span className="stats-content__results__value">{`${winnigTeamLabel}s`}</span>
        </p>
        <ul className="stats-content__list">
          {
            winningTeam.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
        <p className="stats-content__results">
          <span className="stats-content__results__label">Survivors from Losing Team:&nbsp;</span>
          <span className="stats-content__results__value">{`${loserTeamLabel}s`}</span>
        </p>
        <ul className="stats-content__list">
          {
            survivors && survivors.length > 0 && survivors.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
          {
            survivors && survivors.length === 0 && <span className="stats-content__list__no-survivors">No survivors</span>
          }
        </ul>
      </div>
    )
  }

  const renderBattleStats = () => {
    return (
      <div className="stats">
        {renderDestroyedState()}
        {renderStats()}
        <button className="stats__new-battle-button" onClick={onNewBattle}>NEW BATTLE</button>
      </div>
    )
  }

  const { contestants: { autobots, decepticons } } = currentBattleStatsValue

  return (
    <div className="battles-container">
      <div className="battles-container__autobots">
        <fieldset className="battles-container__autobots__set">
          <legend
            className="battles-container__autobots__set__legend"
            align="left"
          >
            Autobots
          </legend>
          <ul className="battles-container__autobots__set__list">
            {autobots.map((item, index) => {
              return <li key={`autobot_${index}`}>{item.name}</li>
            })}
          </ul>
        </fieldset>
      </div>
      <div className="battles-container__decepticons" dir="rtl">
        <fieldset className="battles-container__decepticons__set">
          <legend
            className="battles-container__decepticons__set__legend"
            align="right"
          >
            Decepticons
          </legend>
          <ul className="battles-container__decepticons__set__list">
            {decepticons.map((item, index) => {
              return <li key={`decepticon_${index}`}>{item.name}</li>
            })}
          </ul>
        </fieldset>
      </div>
      <div className="battles-container__stats">
        <div className="battles-container__stats__background"></div>
        <div className="battles-container__stats__content">
          <h3 className="battles-container__stats__content__title">BATTLE STATS</h3>
          {renderBattleStats()}
        </div>
      </div>
    </div>
  )
}