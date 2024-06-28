import { createSlice } from "@reduxjs/toolkit";

export type DialogState = {
  readonly open: boolean
}

const INITIAL_STATE: DialogState = {
  open: false,
}

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: INITIAL_STATE,
  reducers: {
    setDialogOpen: (state, action) => {
      state.open = action.payload
    },
  }
})

export const { setDialogOpen } = dialogSlice.actions

export const dialogReducer = dialogSlice.reducer