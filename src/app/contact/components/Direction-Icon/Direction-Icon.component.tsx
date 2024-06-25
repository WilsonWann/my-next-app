import React, { FC } from 'react'
import { LiaDirectionsSolid } from "react-icons/lia";


type Props = {
  onClick?: () => void
  color?: string
  size?: number
  cursor?: string
}

const DirectionIcon: FC<Props> = (props) => <LiaDirectionsSolid {...props} />

export default DirectionIcon