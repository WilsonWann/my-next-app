import React, { FC } from 'react'
import { Navigation } from 'lucide-react';


type Props = {
  onClick?: () => void
  color?: string
  size?: number
  cursor?: string
}

const DirectionIcon: FC<Props> = (props) => <Navigation  {...props} />

export default DirectionIcon