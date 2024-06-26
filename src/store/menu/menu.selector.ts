import { createSelector } from "reselect"

import { RootState } from "../store"

import { MenuState } from "./menu.slice"

const selectMenuReducer = (state: RootState): MenuState => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectMenuReducer],
  (menu) => menu.isMenuOpen
)