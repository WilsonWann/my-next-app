import React, { FC } from 'react'
import { GrClose } from "react-icons/gr";

type Props = {
  onClick?: () => void
}

const CloseIcon: FC<Props> = ({ onClick }) => <GrClose onClick={onClick} />

export default CloseIcon