import { combineReducers } from "@reduxjs/toolkit"
import { menuReducer } from "./menu/menu.slice"

export const rootReducer = combineReducers({
  menu: menuReducer
})