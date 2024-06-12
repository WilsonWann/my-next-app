import { MENU_ACTION_TYPES } from "./menu.types";
import { ActionWithPayload, createAction, withMatcher } from "@/utils/reducer/reducer.utils";

export type SetIsMenuOpen = ActionWithPayload<MENU_ACTION_TYPES.SET_IS_MENU_OPEN, boolean>

export const setIsMenuOpen = withMatcher(
  (isMenuOpen: boolean): SetIsMenuOpen =>
    createAction(MENU_ACTION_TYPES.SET_IS_MENU_OPEN, isMenuOpen)
)


