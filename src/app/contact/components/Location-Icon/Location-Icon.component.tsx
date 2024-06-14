import React, { FC } from 'react'
import { IoLocationOutline } from "react-icons/io5";

type Props = {
  onClick?: () => void
}

const LocationIcon: FC<Props> = ({ onClick }) => <IoLocationOutline onClick={onClick} />

export default LocationIcon