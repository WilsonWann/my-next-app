export const getRatingStarString = (rating?: number) => {

  if (!rating) return '0.0'

  const normalizedRating = Math.round(rating * 2) / 2
  const ratingStarString = normalizedRating.toFixed(1)

  return ratingStarString
}

export default getRatingStarString