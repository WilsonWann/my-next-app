"use client";

import { FC, createContext, useEffect, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import { MapState } from "@/store/map/map.slice";
import useGoogleMap from "@/hook/useGoogleMap";

const GoogleMapContext = createContext<MapState>({
  apiKey: null,
  placeId: null,
  reviewUrl: null,
});

const libraries: ('places')[] = ['places'];

const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
const googleMapApiKeyPlaceId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID!;
const googleMapReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_REVIEW_URL!;

const GoogleMapProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

  const {
    apiKey, placeId, reviewUrl,
    setApiKey, setPlaceId, setReviewUrl,
  } = useGoogleMap()

  const apiKeyRef = useRef<string>();
  const placeIdRef = useRef<string>();
  const reviewUrlRef = useRef<string>();

  if (!apiKeyRef.current) {
    apiKeyRef.current = googleMapApiKey;
    setApiKey(googleMapApiKey)
  }

  if (!placeIdRef.current) {
    placeIdRef.current = googleMapApiKeyPlaceId;
    setPlaceId(googleMapApiKeyPlaceId)
  }

  if (!reviewUrlRef.current) {
    reviewUrlRef.current = googleMapReviewUrl;
    setReviewUrl(googleMapReviewUrl)
  }

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        const m_googleMapReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_M_REVIEW_URL!;
        reviewUrlRef.current = m_googleMapReviewUrl;
        setReviewUrl(m_googleMapReviewUrl)
      }
    }
    window.addEventListener("resize", handleResize)

    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  return (
    <GoogleMapContext.Provider value={{ apiKey, placeId, reviewUrl }}>
      <LoadScript googleMapsApiKey={apiKeyRef.current!} libraries={libraries}>{children}</LoadScript>
    </GoogleMapContext.Provider>
  );
};

export default GoogleMapProvider;