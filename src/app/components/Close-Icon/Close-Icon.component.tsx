import React, { FC } from 'react'
import { GrClose } from "react-icons/gr";

type Props = {
  onClick?: () => void
  className?: string
}

const CloseIcon: FC<Props> = (props) => <GrClose {...props} />

export default CloseIcon