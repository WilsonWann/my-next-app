import { Center } from "@/app/contact/components/GoogleMap/GoogleMap.component";

const getCenterFromLocation = (pos: google.maps.LatLng | GeolocationPosition) => {

  let lat, lng

  if (checkIfLatLng(pos)) {
    lat = pos.lat();
    lng = pos.lng();
  } else {
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
  }

  return { lat, lng } as Center
}


const checkIfLatLng = (pos: google.maps.LatLng | GeolocationPosition): pos is google.maps.LatLng => {

  if ('lat' in pos) return true

  return false
}

export default getCenterFromLocation