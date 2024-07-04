import React from 'react'
import { Star, StarHalf } from 'lucide-react';

const fullProps = {
  fill: "#40362D",
  color: "#40362D",
  size: 12
}

const emptyProps = {
  fill: "#D9C7C1",
  color: "#D9C7C1",
  size: 12
}

const FullStarIcon = () => <Star {...fullProps} />
const HalfStarIcon = () => <StarHalf {...fullProps} />
const EmptyStarIcon = () => <Star {...emptyProps} />

export {
  FullStarIcon,
  HalfStarIcon,
  EmptyStarIcon
}