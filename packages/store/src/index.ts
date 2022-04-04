import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { activityBarReducer } from "./activity-tab";

export const store = configureStore({
  reducer: {
    activityBar: activityBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
