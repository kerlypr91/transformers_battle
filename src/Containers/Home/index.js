import React, { useContext } from 'react'

import { AppContext } from '../../Context'

import FormSection from './_Form'
import ListSection from './_List'
import BattleStats from './_BattleStats'
import Loader from '../../Common/Loader'

import './index.scss'

export default function Home () {
  /** Context */
  const { battleInProgress, currentBattleStats } = useContext(AppContext)
  const [battleInProgressValue] = battleInProgress
  const [currentBattleStatsValue, setCurrentBatteStats] = currentBattleStats

  const handleNewBattle = () => {
    setCurrentBatteStats(null)
  }
  /** Renders */

  const renderContent = () => {
    if (battleInProgressValue) {
      return <Loader />
    }

    if (currentBattleStatsValue) {
      return <BattleStats onNewBattle={handleNewBattle} />
    }

    return (
      <React.Fragment>
        <FormSection />
        <ListSection />
      </React.Fragment>
    )
  }

  const entranceClass = battleInProgressValue || currentBattleStatsValue ? '' : 'home-container--slide'

  return (
    <section className={`home-container ${entranceClass}`}>
      {renderContent()}
    </section>
  )
}