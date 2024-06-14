import React, { FC } from 'react'
import { FiPhoneCall } from "react-icons/fi";

type Props = {
  onClick?: () => void
}

const TelephoneIcon: FC<Props> = ({ onClick }) => <FiPhoneCall onClick={onClick} />

export default TelephoneIcon