import React, { useContext } from 'react'

import { AppContext } from '../../Context'
import { TypesOfTransformers } from '../../Utils'

import './index.scss'

export default function Battles () {
  /** Context */
  const { battleHistory } = useContext(AppContext)
  const [battleHistoryValue] = battleHistory

  const renderContent = () => {
    if (battleHistoryValue.length > 0) {
      return (
        <table className="battle-history__table" width="100%">
          <thead className="battle-history__table__thead">
            <th></th>
            <th>Winners</th>
            <th>Winning Team</th>
          </thead>
          <tbody>
            {
              battleHistoryValue.map((item, index) => {
                const { destroyed, winnerTeamType, winningTeam } = item

                return (
                  <tr key={index} className="battle-history__table__row">
                    <td>Battle {index + 1}</td>
                    <td>{destroyed ? 'Was a tie' : (winnerTeamType === TypesOfTransformers.autobot ? 'Autobots' : 'Decepticons')}</td>
                    <td>{destroyed ? '-' : (winningTeam.map(item => item.name).join())}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )
    }

    return <h3>No battles to show at the moment</h3>
  }

  return (
    <section className="battle-history">
      {renderContent()}
    </section>
  )
}
