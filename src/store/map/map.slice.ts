import { createSlice } from "@reduxjs/toolkit";

export type MapState = {
  readonly apiKey: string | null
}

const INITIAL_STATE: MapState = {
  apiKey: null,
}

export const mapSlice = createSlice({
  name: 'map',
  initialState: INITIAL_STATE,
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload
    }
  }
})

export const { setApiKey } = mapSlice.actions

export const mapReducer = mapSlice.reducer