"use client";

import React, { FC } from "react";
import { GoogleMap as ReactGoogleMap, Marker } from "@react-google-maps/api";
import useGoogleMap from "@/hook/useGoogleMap";
import PlaceDetailsWrapper from "../PlaceDetailsWrapper/PlaceDetailsWrapper.component";
import useFetchPlaceDetails from "@/hook/useFetchPlaceDetails";

export type Center = {
  lat: number;
  lng: number;
  name?: string
  address?: string
}

export type PlaceDetails = google.maps.places.PlaceResult | null;

type Props = {
  className?: string;
};

const GoogleMap: FC<Props> = ({ className = "" }) => {
  const { apiKey, placeId } = useGoogleMap();

  const { placeDetails, destination } = useFetchPlaceDetails(placeId)

  if (!apiKey || !placeId) return null;
  if (!destination) return null

  return (
    <div className={`${className}`}>
      <ReactGoogleMap
        mapContainerClassName="w-screen xl:h-[490px] h-[438px]"
        center={destination}
        zoom={17}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        <PlaceDetailsWrapper
          placeDetails={placeDetails}
          destination={destination}
          placeId={placeId}
        />
        <Marker
          title={"陌聲行銷有限公司"}
          position={destination}
        />
      </ReactGoogleMap>
    </div>
  );
};

export default GoogleMap;

