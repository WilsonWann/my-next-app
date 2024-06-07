type XDirection = 'right' | 'left'
type YDirection = 'up' | 'down'

type CustomAnimation = 'toUp' | 'toDown' | 'toRight' | 'toRightUp' | 'toRightDown' | 'toLeft' | 'toLeftUp' | 'toLeftDown' | 'scaleUp' | 'scaleDown'

export const origin = (end1?: XDirection, end2?: YDirection) => {
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

export const scale100 = 'scale(1.0)' as const
export const scale110 = 'scale(1.1)' as const
export const scale150 = 'scale(1.5)' as const

const duration = '6s'
const timingFunction = 'linear' as const
const iterationCount = '' as const
const direction = 'alternate' as const
const playState = 'running' as const

export const animationFunction = (name: CustomAnimation) => `${name} ${duration} ${timingFunction} ${iterationCount} ${direction} ${playState}`
