import { combineReducers } from "@reduxjs/toolkit"
import { menuReducer } from "./menu/menu.slice"
import { mapReducer } from "./map/map.slice"

export const rootReducer = combineReducers({
  menu: menuReducer,
  map: mapReducer
})