"use client";

import React, { FC, useEffect, useState } from "react";
import {
  GoogleMap as ReactGoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import Logo from "@/app/components/Logo/Logo.component";
import CopyToText from "../CopyToText/CopyToText.component";
import { useGoogleMap } from "@/app/Providers/GoogleMapProvider";
import RatingStartWrapper from "../RatingStart/RatingStart.component";
import getRatingStarString from "@/helper/getRatingStarString";
import DirectionIcon from "../Direction-Icon/Direction-Icon.component";
import StyledLink from "../StyledLink/StyledLink.component";
import HoverReviewCards from "@/components/HoverReviewCards.component";

const center = {
  lat: 24.15,
  lng: 120.665,
};

type PlaceDetails = google.maps.places.PlaceResult | null;

type Props = {
  className?: string;
};

const GoogleMap: FC<Props> = ({ className = "" }) => {
  const { apiKey, placeId } = useGoogleMap();
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails>(null);
  const [selected, setSelected] = useState<typeof center | null>(null);

  useEffect(() => {
    if (!placeId) return

    const fetchPlaceDetails = () => {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        placeId,
        fields: ['name', 'formatted_address', 'rating', 'user_ratings_total', 'reviews']
      };

      service.getDetails(request, (place, status) => {
        console.log('🚀 ~ service.getDetails ~ place:', place)
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaceDetails(place);
        }
      });
    };

    if (window.google) {
      fetchPlaceDetails();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSelected(null)
      } else {
        setSelected(center)
      }
    };
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!apiKey) return null;

  const ratingString = getRatingStarString(placeDetails?.rating);

  return (
    <div className={`${className}`}>
      <style>
        {`
          .gmnoprint .gm-style-mtc {
            display: none;
          }
        `}
      </style>
      <ReactGoogleMap
        mapContainerClassName="w-screen md:h-[500px] h-[350px]"
        center={center}
        zoom={16}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        {placeDetails && (
          <div className="absolute 
          w-80
          top-4 
          md:left-8 left-1/2
          md:translate-x-0 -translate-x-1/2
          bg-white text-xs
            py-2 px-3 flex justify-center items-start 
            gap-4
            ">
            <div className="flex flex-col justify-between align-baseline md:gap-2 gap-1">
              <h2 className="font-bold text-sm">{placeDetails.name}</h2>
              <p className="p-0">{placeDetails.formatted_address}</p>
              <p className="p-0 flex justify-start items-center gap-1">
                {ratingString}
                <RatingStartWrapper ratingString={ratingString} />
                <HoverReviewCards
                  userRatingsTotal={placeDetails.user_ratings_total}
                  reviews={[
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                    ...placeDetails.reviews!,
                  ]}
                />
              </p>
              <p className="p-0">
                <StyledLink href="https://maps.app.goo.gl/WqhQ4mBE7WYVNNYx7" >
                  顯示詳細地圖
                </StyledLink>
              </p>
            </div>
            <StyledLink href="" className="flex flex-col justify-between items-center space-y-0">
              <DirectionIcon size={48} />
              <span>路線</span>
            </StyledLink>
          </div>
        )}
        <Marker
          title={"陌聲行銷有限公司"}
          position={center}
          onClick={() => setSelected(center)}
        />
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div className="flex flex-col">
              <div className="flex items-baseline justify-between">
                <Logo imageClassName="w-[102px]" />
                <h3>陌聲行銷有限公司</h3>
              </div>
              <p>
                地址：
                <CopyToText copyText={"403518台中市西區英才路530號23樓之5"} />
              </p>
              <p>
                電話：
                <a href="tel:0422010520" className="text-blue-500">
                  0422010520
                </a>
              </p>
              <p>營業時間：09:00-18:00</p>
              <p>
                電子信箱：
                <a href="mailto:service@musense.tw" className="text-blue-500">
                  service@musense.tw
                </a>
              </p>
            </div>
          </InfoWindow>
        )}
      </ReactGoogleMap>
    </div>
  );
};

export default GoogleMap;
