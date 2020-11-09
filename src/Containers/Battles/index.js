import React, { useContext } from 'react'

import { AppContext } from '../../Context'
import { TypesOfTransformers } from '../../Utils'

import './index.scss'

export default function Battles () {
  /** Context */
  const { battleHistory } = useContext(AppContext)
  const [battleHistoryValue] = battleHistory

  return (
    <section className="battle-history">
      <table className="battle-history__table" width="100%">
        <thead className="battle-history__table__thead">
          <th></th>
          <th>Winners</th>
          <th>Winning Team</th>
        </thead>
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
      </table>
    </section>
  )
}
