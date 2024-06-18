'use client'

import { FC, useEffect, createContext } from "react"
import { LoadScript } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setApiKey } from "@/store/map/map.slice";
import { selectMapApi } from "@/store/map/map.selector";

const GoogleMapContext = createContext<{ apiKey: string | null }>({ apiKey: null });

const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const GoogleMapProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const dispatch = useDispatch();
  const apiKey = useSelector(selectMapApi);

  useEffect(() => {
    if (!apiKey) {
      dispatch(setApiKey(googleMapApiKey));
    }
  }, [apiKey]);

  return (
    <GoogleMapContext.Provider value={{ apiKey }}>
      {apiKey ? (
        <LoadScript googleMapsApiKey={apiKey}>
          {children}
        </LoadScript>
      ) : children}
    </GoogleMapContext.Provider>
  )
}

export default GoogleMapProvider

export const useGoogleMap = () => {
  const apiKey = useSelector(selectMapApi);
  const dispatch = useDispatch();

  return {
    apiKey,
    setApiKey: (apiKey: string) => {
      dispatch(setApiKey(apiKey));
    }
  }
}