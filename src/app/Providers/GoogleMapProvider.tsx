"use client";

import { FC, createContext, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { setApiKey } from "@/store/map/map.slice";
import { selectMapApi } from "@/store/map/map.selector";

const GoogleMapContext = createContext<{ apiKey: string | null }>({
  apiKey: null,
});

const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const GoogleMapProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const apiKey = useAppSelector(selectMapApi);
  const apiKeyRef = useRef<string>();

  if (!apiKeyRef.current) {
    apiKeyRef.current = googleMapApiKey;
    dispatch(setApiKey(googleMapApiKey));
  }

  return (
    <GoogleMapContext.Provider value={{ apiKey }}>
      <LoadScript googleMapsApiKey={apiKeyRef.current!}>{children}</LoadScript>
    </GoogleMapContext.Provider>
  );
};

export default GoogleMapProvider;

export const useGoogleMap = () => {
  const apiKey = useAppSelector(selectMapApi);
  const dispatch = useAppDispatch();

  return {
    apiKey,
    setApiKey: (apiKey: string) => {
      dispatch(setApiKey(apiKey));
    },
  };
};
