import React, { FC } from 'react'
import { Star, StarHalf } from 'lucide-react';

type Props = {
  onClick?: () => void
  color?: string
}

const FullStarIcon: FC<Props> = (props) => <Star {...props} />
const HalfStarIcon: FC<Props> = (props) => <StarHalf {...props} />
const EmptyStarIcon: FC<Props> = (props) => <Star  {...props} />

export {
  FullStarIcon,
  HalfStarIcon,
  EmptyStarIcon
}