import React, { FC, useEffect, useState } from 'react'
import StyledLink from '../StyledLink/StyledLink.component'
import DirectionIcon from '../Direction-Icon/Direction-Icon.component'
import getRatingStarString from '@/helper/getRatingStarString'
import useGoogleMap from '@/hook/useGoogleMap'
import getNavigationUrl from '@/helper/getNavigationUrl'
import getPlaceUrl from '@/helper/getPlaceUrl'
import { Center, PlaceDetails } from '../GoogleMap/GoogleMap.component'
import RatingStartWrapper from '../RatingStart/RatingStart.component'
import getCenterFromLocation from '@/helper/getCenterFromLocation'

type Props = {
  placeDetails: PlaceDetails
  destination: Center
  placeId: string
}

const PlaceDetailsWrapper: FC<Props> = (props) => {

  const { placeDetails, destination, placeId } = props
  const { reviewUrl } = useGoogleMap();

  const [origin, setOrigin] = useState<Center | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!position) return
        const userOrigin = getCenterFromLocation(position);
        setOrigin(userOrigin);
      }, (error) => {
        console.error('Error getting user location:', error);
        setOrigin(null);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!placeDetails) return null

  const ratingString = getRatingStarString(placeDetails.rating);
  const navigationUrl = getNavigationUrl(origin, destination)
  const placeUrl = getPlaceUrl(destination.address!, placeId);

  return (
    <div className="absolute w-80 top-4 md:left-8 left-1/2 md:translate-x-0 -translate-x-1/2 bg-white text-xs py-2 px-3 flex justify-center items-start gap-4">
      <div className="flex flex-col justify-between align-baseline md:gap-2 gap-1">
        <h2 className="font-bold text-base">{placeDetails.name}</h2>
        <p className="p-0">{placeDetails.formatted_address}</p>
        <p className="p-0 flex justify-start items-center gap-1">
          {ratingString}
          <RatingStartWrapper ratingString={ratingString} />
          <StyledLink href={reviewUrl}>
            {`${placeDetails.user_ratings_total} 篇評論`}
          </StyledLink>
        </p>
        <p className="p-0">
          <StyledLink href={placeUrl} >
            顯示詳細地圖
          </StyledLink>
        </p>
      </div>
      <StyledLink href={navigationUrl} className="flex flex-col justify-between items-center space-y-0">
        <DirectionIcon size={48} />
        <span>路線</span>
      </StyledLink>
    </div>
  )
}

export default PlaceDetailsWrapper