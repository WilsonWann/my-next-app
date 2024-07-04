import { Center } from '@/app/contact/components/GoogleMap/GoogleMap.component';
import getCenterFromLocation from '@/helper/getCenterFromLocation';
import { useEffect, useState } from 'react'

const useOrigin = () => {

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

  return { origin }
}

export default useOrigin