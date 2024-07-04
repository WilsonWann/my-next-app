import React, { FC } from 'react'
import * as StarIcon from '../Star-Icon/Star-Icon.component'
import getNumberOfRatingStar from '@/helper/getNumberOfRatingStar'

type Props = {
  ratingNumber?: number
}

const RatingStartWrapper: FC<Props> = ({ ratingNumber = 0 }) => {

  const {
    numberOfFullStar,
    numberOfHalfStar,
  } = getNumberOfRatingStar(ratingNumber)

  const allEmptyStar = Array(5).fill(1).map((_, index) => <StarIcon.EmptyStarIcon key={index} />)
  const fullStar = Array(numberOfFullStar).fill(1).map((_, index) => <StarIcon.FullStarIcon key={index} />)
  const halfStar = numberOfHalfStar === 1 ? <StarIcon.HalfStarIcon /> : null

  const commonClassName = 'w-fit text-xs flex justify-start items-center space-x-0'

  return (
    <div className="relative">
      <div className={`relative ${commonClassName}`}>
        {allEmptyStar}
      </div>
      <div className={`absolute top-0 left-0 ${commonClassName}`}>
        {fullStar} {halfStar}
      </div>
    </div>
  )
}

export default RatingStartWrapper