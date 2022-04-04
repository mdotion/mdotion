import { createSlice } from "@reduxjs/toolkit";
import { setActiveTab } from "./activity-tab.reducer";
import { ActivityBarState } from "./activity-tab.type";

const initialState: ActivityBarState = {
  activeTab: "explorer",
  tabs: [],
};

const activityBarSlice = createSlice({
  name: "ACTIVITY_BAR",
  initialState,
  reducers: {
    setActiveTab,
  },
});

export const activityBarActions = activityBarSlice.actions;
export default activityBarSlice.reducer;
