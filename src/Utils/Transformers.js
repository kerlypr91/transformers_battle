export const TypesOfTransformers = {
  autobot: 'A',
  decepticon: 'D'
}

export const TransformerTypesList = [
  {
    key: TypesOfTransformers.autobot,
    text: 'Autobot',
    value: TypesOfTransformers.autobot,
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: TypesOfTransformers.decepticon,
    text: 'Decepticon',
    value: TypesOfTransformers.decepticon,
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  }
]

const defaultArray = Array.from({ length: 10 }, (_, index) => index + 1);

export const TransformerSpecs = [
  {
    id: 'strength',
    label: 'Strength',
    options: defaultArray
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    options: defaultArray
  },
  {
    id: 'speed',
    label: 'Speed',
    options: defaultArray
  },
  {
    id: 'endurance',
    label: 'Endurance',
    options: defaultArray
  },
  {
    id: 'rank',
    label: 'Rank',
    options: defaultArray
  },
  {
    id: 'courage',
    label: 'Courage',
    options: defaultArray
  },
  {
    id: 'firepower',
    label: 'Firepower',
    options: defaultArray
  },
  {
    id: 'skill',
    label: 'Skill',
    options: defaultArray
  }
]

