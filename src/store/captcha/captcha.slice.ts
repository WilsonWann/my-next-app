import { SizeType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export type CaptchaState = {
  readonly siteKey: string | null
  readonly size: SizeType
}

const INITIAL_STATE: CaptchaState = {
  siteKey: null,
  size: 'normal',
}

export const captchaSlice = createSlice({
  name: 'captcha',
  initialState: INITIAL_STATE,
  reducers: {
    setSiteKey: (state, action) => {
      state.siteKey = action.payload
    },
    setSize: (state, action) => {
      state.size = action.payload
    }
  }
})

export const { setSiteKey, setSize } = captchaSlice.actions

export const captchaReducer = captchaSlice.reducer