import React, { FC } from 'react'
import StyledLink from '../StyledLink/StyledLink.component'
import DirectionIcon from '../Direction-Icon/Direction-Icon.component'
import useGoogleMap from '@/hook/useGoogleMap'
import getNavigationUrl from '@/helper/getNavigationUrl'
import getPlaceUrl from '@/helper/getPlaceUrl'
import { Center, PlaceDetails } from '../GoogleMap/GoogleMap.component'
import RatingStartWrapper from '../RatingStart/RatingStart.component'
import useOrigin from '@/hook/useOrigin'

type Props = {
  placeDetails: PlaceDetails
  destination: Center
  placeId: string
}

const PlaceDetailsWrapper: FC<Props> = (props) => {

  const { placeDetails, destination, placeId } = props
  const { reviewUrl } = useGoogleMap();
  const { origin } = useOrigin()

  if (!placeDetails) return null

  const navigationUrl = getNavigationUrl(origin, destination)
  const placeUrl = getPlaceUrl(destination.address!, placeId);

  return (
    <div className="absolute w-80 top-4 md:left-8 left-1/2 md:translate-x-0 -translate-x-1/2 bg-white text-xs py-2 px-3 flex justify-center items-start gap-4">
      <div className="flex flex-col justify-between align-baseline md:gap-2 gap-1">
        <h2 className="font-bold text-base">{placeDetails.name}</h2>
        <p className="p-0">{placeDetails.formatted_address}</p>
        <div className="p-0 flex justify-start items-center gap-1">
          {placeDetails.rating?.toFixed(1)}
          <RatingStartWrapper ratingNumber={placeDetails.rating} />
          <StyledLink href={reviewUrl}>
            {`${placeDetails.user_ratings_total} 篇評論`}
          </StyledLink>
        </div>
        <p className="p-0">
          <StyledLink href={placeUrl} >
            顯示詳細地圖
          </StyledLink>
        </p>
      </div>
      <StyledLink href={navigationUrl} className="flex flex-col justify-between items-center space-y-1">
        <DirectionIcon size={28} />
        <span>路線</span>
      </StyledLink>
    </div>
  )
}

export default PlaceDetailsWrapper