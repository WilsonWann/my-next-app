import { Center } from "@/app/contact/components/GoogleMap/GoogleMap.component";

const getNavigationUrl = (origin: Center | null, center: Center) => {

  const originStr = origin ? `${origin.lat},${origin.lng}` : '';
  const destinationStr = `${center.name},${center.address}`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originStr}&destination=${destinationStr}&travelmode=driving`;

  return directionsUrl
}

export default getNavigationUrl