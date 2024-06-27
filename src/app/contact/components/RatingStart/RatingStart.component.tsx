import React, { FC } from 'react'
import * as StarIcon from '../Star-Icon/Star-Icon.component'
import getNumberOfRatingStar from '@/helper/getNumberOfRatingStar'

type Props = {
  ratingString: string
}

const RatingStartWrapper: FC<Props> = ({ ratingString }) => {

  const {
    numberOfFullStar,
    numberOfHalfStar,
    numberOfEmptyStar
  } = getNumberOfRatingStar(ratingString)

  const fullStar = Array(numberOfFullStar).fill(1).map((_, index) => <StarIcon.FullStarIcon key={index} />)
  const halfStar = numberOfHalfStar === 1 ? <StarIcon.HalfStarIcon /> : null
  const emptyStar = Array(numberOfEmptyStar).fill(1).map((_, index) => <StarIcon.EmptyStarIcon key={index + 999} />)

  return (
    <div className="w-fit text-xs text-title flex justify-start items-center space-x-0 ">
      {fullStar} {halfStar} {emptyStar}
    </div>
  )
}

export default RatingStartWrapper