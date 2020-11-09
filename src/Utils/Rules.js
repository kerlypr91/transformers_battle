import { TypesOfTransformers } from './Transformers'

const sortingKey = 'rank'
const overallRatingSpecs = ['strength', 'intelligence', 'speed', 'endurance', 'firepower']


const parseValueToInt = (value) => {
  return parseInt(value || 0)
}

const getOverallRating = (obj) => {
  return overallRatingSpecs.reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
}

const courageAndStrengthRule = (opponentA, opponentB) => {
  let { courage: courageA, strength: strengtA } = opponentA
  let { courage: courageB, strength: strengtB } = opponentB

  if ((parseValueToInt(courageA) - parseValueToInt(courageB)) >= 4 && (parseValueToInt(strengtA) - parseValueToInt(strengtB)) >= 3) {
    return true
  }

  return false
}

const skillRule = (opponentA, opponentB) => {
  const { skill: skillA } = opponentA
  const { skill: skillB } = opponentB

  if ((parseValueToInt(skillA) - parseValueToInt(skillB)) >= 3) {
    return true
  }

  return false
}

const highestAutobot = 'Optimus Prime'.toUpperCase()
const highestDecepticon = 'Predaking'.toUpperCase()

export const FindBattleWinner = (transformers) => {
  const autobots = transformers
    .filter(item => item.type === TypesOfTransformers.autobot)
    .sort((a, b) => (b.specs[sortingKey] || 0) - (a.specs[sortingKey] || 0))

  const decepticons = transformers
    .filter(item => item.type === TypesOfTransformers.decepticon)
    .sort((a, b) => (b.specs[sortingKey] || 0) - (a.specs[sortingKey] || 0))

  const numberOfBattles = Math.min(autobots.length, decepticons.length)

  let battleStats = {
    destroyed: false,

    numberOfBattles,

    autobotWinners: [],
    decepticonWinners: [],

    winnerTeamType: null,
    winningTeam: [],
    survivors: [],

    contestants: {
      autobots: [...autobots],
      decepticons: [...decepticons]
    }
  }

  for (let i = 0; i <= numberOfBattles - 1; i++) {
    /** Pick Opponents */

    const autobotOpponent = autobots[i]
    const decepticonOpponent = decepticons[i]

    const { specs: autobotSpecs, name: autobotName } = autobotOpponent
    const { specs: decepticonSpecs, name: decepticonName } = decepticonOpponent

    const autobotOverallRating = getOverallRating(autobotOpponent)
    const decepticonOverallRating = getOverallRating(decepticonOpponent)

    /** Special Rules */

    if (autobotName.toUpperCase() === highestAutobot && decepticonName.toUpperCase() === highestDecepticon) {
      battleStats.destroyed = true
      break
    }

    if (autobotName.toUpperCase() === highestAutobot) {
      battleStats.autobotWinners.push(autobotOpponent)
      continue
    }

    if (decepticonName.toUpperCase() === highestDecepticon) {
      battleStats.decepticonWinners.push(decepticonOpponent)
      continue
    }

    /** First Rule : one of them wins by courae and strength */

    if (courageAndStrengthRule(autobotSpecs, decepticonSpecs)) {
      battleStats.autobotWinners.push(autobotOpponent)
      continue
    }

    if (courageAndStrengthRule(decepticonSpecs, autobotSpecs)) {
      battleStats.decepticonWinners.push(decepticonOpponent)
      continue
    }

    /** Second Rule : one of them wins by skill */

    if (skillRule(autobotSpecs, decepticonSpecs)) {
      battleStats.autobotWinners.push(autobotOpponent)
      continue
    }

    if (skillRule(decepticonSpecs, autobotSpecs)) {
      battleStats.decepticonWinners.push(decepticonOpponent)
      continue
    }

    /** Overall Rating */

    if (autobotOverallRating > decepticonOverallRating) {
      battleStats.autobotWinners.push(autobotOpponent)
      continue
    }

    if (decepticonOverallRating > autobotOverallRating) {
      battleStats.decepticonWinners.push(decepticonOpponent)
      continue
    }
  }

  if (!battleStats.destroyed && battleStats.autobotWinners.length === battleStats.decepticonWinners.length) {
    battleStats.destroyed = true
  }

  if (!battleStats.destroyed) {
    const autobotsWon = battleStats.autobotWinners.length > battleStats.decepticonWinners.length
    const winnerTeamType = autobotsWon ? TypesOfTransformers.autobot : TypesOfTransformers.decepticon

    const losingTeam = transformers.filter(item => item.type !== winnerTeamType)
    const skippedFighters = losingTeam.filter((item, index) => index >= numberOfBattles)// those who didnt fight
    const winnerFromLosingTeam = battleStats[autobotsWon ? 'decepticonWinners' : 'autobotWinners']
    const survivors = [
      ...winnerFromLosingTeam,
      ...skippedFighters
    ]

    const winningTeam = battleStats[autobotsWon ? 'autobotWinners' : 'decepticonWinners']

    battleStats = {
      ...battleStats,
      winnerTeamType,
      winningTeam,
      survivors
    }
  }

  console.log('battleStats', battleStats)

  return battleStats
}
