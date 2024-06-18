import { createSelector } from "reselect"

import { RootState } from "../store"

import { CaptchaState } from "./captcha.slice"

const selectMapReducer = (state: RootState): CaptchaState => state.captcha;

export const selectSiteKey = createSelector(
  [selectMapReducer],
  (captcha) => captcha.siteKey
)

export const selectSecret = createSelector(
  [selectMapReducer],
  (captcha) => captcha.secret
)