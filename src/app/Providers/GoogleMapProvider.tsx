"use client";

import { FC, createContext, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { MapState, setApiKey, setPlaceId } from "@/store/map/map.slice";
import { selectMapApi, selectMapPlaceId } from "@/store/map/map.selector";

const GoogleMapContext = createContext<MapState>({
  apiKey: null,
  placeId: null
});


const libraries: ('places')[] = ['places'];

const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
const googleMapApiKeyPlaceId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID!;

const GoogleMapProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(selectMapApi);
  const placeId = useAppSelector(selectMapPlaceId);
  const apiKeyRef = useRef<string>();
  const placeIdRef = useRef<string>();

  if (!apiKeyRef.current) {
    apiKeyRef.current = googleMapApiKey;
    dispatch(setApiKey(googleMapApiKey));
  }

  if (!placeIdRef.current) {
    placeIdRef.current = googleMapApiKeyPlaceId;
    dispatch(setPlaceId(googleMapApiKeyPlaceId));
  }

  return (
    <GoogleMapContext.Provider value={{ apiKey, placeId }}>
      <LoadScript googleMapsApiKey={apiKeyRef.current!} libraries={libraries}>{children}</LoadScript>
    </GoogleMapContext.Provider>
  );
};

export default GoogleMapProvider;

export const useGoogleMap = () => {
  const apiKey = useAppSelector(selectMapApi);
  const placeId = useAppSelector(selectMapPlaceId);
  const dispatch = useAppDispatch();

  return {
    apiKey,
    placeId,
    setApiKey: (apiKey: string) => {
      dispatch(setApiKey(apiKey));
    },
    setPlaceId: (placeId: string) => {
      dispatch(setPlaceId(placeId));
    },
  };
};
