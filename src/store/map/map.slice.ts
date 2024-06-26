import { createSlice } from "@reduxjs/toolkit";

export type MapState = {
  readonly apiKey: string | null
  readonly placeId: string | null
  readonly reviewUrl: string | null
}

const INITIAL_STATE: MapState = {
  apiKey: null,
  placeId: null,
  reviewUrl: null,
}

export const mapSlice = createSlice({
  name: 'map',
  initialState: INITIAL_STATE,
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload
    },
    setPlaceId: (state, action) => {
      state.placeId = action.payload
    },
    setReviewUrl: (state, action) => {
      state.reviewUrl = action.payload
    },
  }
})

export const { setApiKey, setPlaceId, setReviewUrl } = mapSlice.actions

export const mapReducer = mapSlice.reducer