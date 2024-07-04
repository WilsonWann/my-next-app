import getRatingStarString from "./getRatingStarString";

const ratingStarMap = {
  RATING_MAX_NUMBER: 5,
  numberOfFullStar: 0,
  numberOfHalfStar: 0,
  _getNumberOfEmptyStar() {
    return this.RATING_MAX_NUMBER - (this.numberOfFullStar + this.numberOfHalfStar);
  },
  get numberOfEmptyStar() {
    return this._getNumberOfEmptyStar();
  }
}

const getNumberOfRatingStar = (ratingNumber: number) => {

  if (!ratingNumber) return ratingStarMap

  const ratingString = getRatingStarString(ratingNumber);

  ratingStarMap.numberOfFullStar = parseInt(ratingString.charAt(0))
  ratingStarMap.numberOfHalfStar = ratingString.slice(-1) === '0' ? 0 : 1

  return ratingStarMap
}

export default getNumberOfRatingStar