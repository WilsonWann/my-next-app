import { createSlice } from "@reduxjs/toolkit";

export type CaptchaState = {
  readonly siteKey: string | null
  readonly secret: string | null
}

const INITIAL_STATE: CaptchaState = {
  siteKey: null,
  secret: null,
}

export const captchaSlice = createSlice({
  name: 'captcha',
  initialState: INITIAL_STATE,
  reducers: {
    setSiteKey: (state, action) => {
      state.siteKey = action.payload
    },
    setSecret: (state, action) => {
      state.secret = action.payload
    },
  }
})

export const { setSiteKey, setSecret } = captchaSlice.actions

export const captchaReducer = captchaSlice.reducer