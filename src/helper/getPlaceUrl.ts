const getPlaceUrl = (address: string, placeId: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${address}&query_place_id=${placeId}`;
};

export default getPlaceUrl