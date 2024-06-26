"use client";

import React, { FC, useEffect, useState } from "react";
import { GoogleMap as ReactGoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMap } from "@/app/Providers/GoogleMapProvider";
import getCenterFromLocation from "@/helper/getCenterFromLocation";
import PlaceDetailsWrapper from "../PlaceDetailsWrapper/PlaceDetailsWrapper.component";

export type Center = {
  lat: number;
  lng: number;
  name?: string
}

export type PlaceDetails = google.maps.places.PlaceResult | null;

type Props = {
  className?: string;
};

const GoogleMap: FC<Props> = ({ className = "" }) => {
  const { apiKey, placeId } = useGoogleMap();
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails>(null);
  const [destination, setDestination] = useState<Center | null>(null);

  useEffect(() => {
    if (!placeId) return

    const fetchPlaceDetails = () => {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'));
      const request = {
        placeId,
        fields: ['name', 'formatted_address', 'rating', 'user_ratings_total', 'geometry.location']
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {

          const location = place?.geometry?.location;
          if (!location) return
          const destination = getCenterFromLocation(location);
          destination.name = '陌聲行銷有限公司'
          setDestination(destination);
          setPlaceDetails(place);
        }
      });
    };

    if (window.google) {
      fetchPlaceDetails();
    }
  }, []);



  if (!apiKey || !placeId) return null;
  if (!destination) return null

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

