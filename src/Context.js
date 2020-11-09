import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [battleHistory, setBattleHistory] = useState([])
  const [transformers, setTransformers] = useState([])
  const [battleInProgress, setBattleInProgress] = useState(false)
  const [currentBattleStats, setCurrentBatteStats] = useState(null)

  return (
    <AppContext.Provider
      value={{
        battleHistory: [battleHistory, setBattleHistory],
        transformers: [transformers, setTransformers],
        battleInProgress: [battleInProgress, setBattleInProgress],
        currentBattleStats: [currentBattleStats, setCurrentBatteStats]
      }}>
      {props.children}
    </AppContext.Provider>
  )
}
