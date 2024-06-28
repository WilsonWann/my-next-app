import { combineReducers } from "redux"
import { menuReducer } from "./menu/menu.slice"
import { mapReducer } from "./map/map.slice"
import { captchaReducer } from "./captcha/captcha.slice"
import { dialogReducer } from "./dialog/dialog.slice"

export const rootReducer = combineReducers({
  menu: menuReducer,
  map: mapReducer,
  captcha: captchaReducer,
  dialog: dialogReducer,
})