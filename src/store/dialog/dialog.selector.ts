import { createSelector } from "reselect"

import { RootState } from "../store"

import { DialogState } from "./dialog.slice"

const selectDialogReducer = (state: RootState): DialogState => state.dialog;

export const selectDialogOpen = createSelector(
  [selectDialogReducer],
  (dialog) => dialog.open
)