import React, { FC } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
  onClick?: () => void
  color?: string
}

const FullStarIcon: FC<Props> = (props) => <FaStar {...props} />
const HalfStarIcon: FC<Props> = (props) => <FaStarHalfAlt {...props} />
const EmptyStarIcon: FC<Props> = (props) => <FaRegStar  {...props} />

export {
  FullStarIcon,
  HalfStarIcon,
  EmptyStarIcon
}