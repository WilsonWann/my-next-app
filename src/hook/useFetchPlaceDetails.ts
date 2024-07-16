import { useEffect, useState } from 'react'
import { Center, PlaceDetails } from '@/app/contact/components/GoogleMap/GoogleMap.component';
import getCenterFromLocation from '@/helper/getCenterFromLocation';

const useFetchPlaceDetails = (placeId: string | null) => {
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

      service.getDetails(request, (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {

          const location = place?.geometry?.location;
          if (!location) return
          const destination = getCenterFromLocation(location);
          destination.name = '陌聲行銷有限公司'
          destination.address = place.formatted_address
          setDestination(destination);
          setPlaceDetails(place);
        }
      });
    };

    if (window.google) {
      fetchPlaceDetails();
    }
  }, [placeId]);

  return {
    placeDetails,
    destination
  }
}

export default useFetchPlaceDetails