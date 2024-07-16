import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { setApiKey, setPlaceId, setReviewUrl } from "@/store/map/map.slice";
import { selectMapApi, selectMapPlaceId, selectMapReviewUrl } from "@/store/map/map.selector";

const useGoogleMap = () => {
  const apiKey = useAppSelector(selectMapApi);
  const placeId = useAppSelector(selectMapPlaceId);
  const reviewUrl = useAppSelector(selectMapReviewUrl);
  const dispatch = useAppDispatch();

  return {
    apiKey,
    placeId,
    reviewUrl,
    setApiKey: (apiKey: string | null) => {
      dispatch(setApiKey(apiKey));
    },
    setPlaceId: (placeId: string) => {
      dispatch(setPlaceId(placeId));
    },
    setReviewUrl: (reviewUrl: string) => {
      dispatch(setReviewUrl(reviewUrl));
    },
  };
};

export default useGoogleMap;