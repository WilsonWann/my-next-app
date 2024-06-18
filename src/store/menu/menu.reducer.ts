import { createSlice } from '@reduxjs/toolkit'

export type MenuState = {
  readonly isMenuOpen: boolean;
}

const INITIAL_STATE: MenuState = {
  isMenuOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: INITIAL_STATE,
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload
    },
  },
})

export const { setIsMenuOpen } = menuSlice.actions

export const menuReducer = menuSlice.reducer