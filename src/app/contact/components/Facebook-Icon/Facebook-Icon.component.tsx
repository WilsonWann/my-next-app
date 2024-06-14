import React, { FC } from 'react'
import { FiFacebook } from "react-icons/fi";

type Props = {
  onClick?: () => void
}

const FacebookIcon: FC<Props> = ({ onClick }) => <FiFacebook onClick={onClick} />

export default FacebookIcon