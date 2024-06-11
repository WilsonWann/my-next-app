type XDirection = 'right' | 'left'
type YDirection = 'up' | 'down'

type CustomAnimation = 'toUp' | 'toDown' | 'toRight' | 'toRightUp' | 'toRightDown' | 'toLeft' | 'toLeftUp' | 'toLeftDown' | 'scaleUp' | 'scaleDown'

const origin = (end1?: XDirection, end2?: YDirection) => {
  let x = '0px'
  let y = '0px'

  const offset = 20 //px
  if (end1 === 'right') {
    x = `${offset}px`
  }

  if (end1 === 'left') {
    x = `-${offset}px`
  }

  if (end2 === 'up') {
    y = `-${offset}px`
  }

  if (end2 === 'down') {
    y = `${offset}px`
  }

  return `translate(${x}, ${y})` as const
}

const scale100 = 'scale(1.0)' as const
const scale110 = 'scale(1.1)' as const
const scale150 = 'scale(1.5)' as const

const duration = '6s'
const timingFunction = 'linear' as const
const iterationCount = '' as const
const direction = 'alternate' as const
const playState = 'running' as const

export const animationFunction = (name: CustomAnimation) =>
  `${name} ${duration} ${timingFunction} ${iterationCount} ${direction} ${playState}`

export const customKeyframes = {
  toUp: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin(undefined, 'up')} ${scale110}`, },
  },
  toRightUp: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('right', 'up')} ${scale110}`, },
  },
  toRight: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('right')} ${scale110}`, },
  },
  toRightDown: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('right', 'down')} ${scale110}`, },
  },
  toDown: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin(undefined, 'down')} ${scale110}`, },
  },
  toLeftDown: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('left', 'down')} ${scale110}`, },
  },
  toLeft: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('left')} ${scale110}`, },
  },
  toLeftUp: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin('left', 'up')} ${scale110}`, },
  },
  scaleUp: {
    '0%': { transform: `${origin()} ${scale100}`, },
    '100%': { transform: `${origin()} ${scale110}`, },
  },
  scaleDown: {
    '0%': { transform: `${origin()} ${scale110}`, },
    '100%': { transform: `${origin()} ${scale100}`, },
  }
}

export const customAnimation = {
  toUp: animationFunction('toUp'),
  toRightUp: animationFunction('toRightUp'),
  toRight: animationFunction('toRight'),
  toRightDown: animationFunction('toRightDown'),
  toDown: animationFunction('toDown'),
  toLeftDown: animationFunction('toLeftDown'),
  toLeft: animationFunction('toLeft'),
  toLeftUp: animationFunction('toLeftUp'),
  scaleUp: animationFunction('scaleUp'),
  scaleDown: animationFunction('scaleDown'),
}