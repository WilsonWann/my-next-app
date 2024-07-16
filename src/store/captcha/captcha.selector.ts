import { createSelector } from "reselect"

import { RootState } from "../store"

import { CaptchaState } from "./captcha.slice"

const selectCaptchaReducer = (state: RootState): CaptchaState => state.captcha;

export const selectSiteKey = createSelector(
  [selectCaptchaReducer],
  (captcha) => captcha.siteKey
)

export const selectSize = createSelector(
  [selectCaptchaReducer],
  (captcha) => captcha.size
)