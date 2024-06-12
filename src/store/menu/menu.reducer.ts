import { UnknownAction } from 'redux'

import { setIsMenuOpen } from "./menu.action"

export type MenuState = {
  readonly isMenuOpen: boolean;
}

const MENU_INITIAL_STATE: MenuState = {
  isMenuOpen: false,
}

export const menuReducer = (
  state = MENU_INITIAL_STATE,
  action: UnknownAction
): MenuState => {
  if (setIsMenuOpen.match(action)) {
    return { ...state, isMenuOpen: action.payload }
  }
  return state
}