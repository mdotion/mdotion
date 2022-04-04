import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ActivityBarState } from "./activity-tab.type";

export const setActiveTab: CaseReducer<
  ActivityBarState,
  PayloadAction<string>
> = (state, action) => {
  state.activeTab = action.payload;
};
