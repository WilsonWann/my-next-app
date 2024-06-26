const getPlaceUrl = (placeId: string) => {
  return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
};

export default getPlaceUrl