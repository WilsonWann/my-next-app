import React, { FC } from 'react'
import { FiInstagram } from "react-icons/fi";

type Props = {
  onClick?: () => void
}

const InstagramIcon: FC<Props> = ({ onClick }) => <FiInstagram onClick={onClick} />

export default InstagramIcon