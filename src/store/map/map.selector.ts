import { createSelector } from "reselect"

import { RootState } from "../store"

import { MapState } from "./map.slice"

const selectMapReducer = (state: RootState): MapState => state.map;

export const selectMapApi = createSelector(
  [selectMapReducer],
  (map) => map.apiKey
)

export const selectMapPlaceId = createSelector(
  [selectMapReducer],
  (map) => map.placeId
)

export const selectMapReviewUrl = createSelector(
  [selectMapReducer],
  (map) => map.reviewUrl
)