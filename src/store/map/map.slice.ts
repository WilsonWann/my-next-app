import { createSlice } from "@reduxjs/toolkit";

export type MapState = {
  readonly apiKey: string | null
  readonly placeId: string | null
}

const INITIAL_STATE: MapState = {
  apiKey: null,
  placeId: null,
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
    }
  }
})

export const { setApiKey, setPlaceId } = mapSlice.actions

export const mapReducer = mapSlice.reducer