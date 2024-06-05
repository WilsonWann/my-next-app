import { createSelector } from "reselect"

import { RootState } from "../store"

import { MenuState } from "./menu.reducer"

const selectCartReducer = (state: RootState): MenuState => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectCartReducer],
  (menu) => menu.isMenuOpen
)

