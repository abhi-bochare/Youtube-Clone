import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import videosReducer from "../redux/videosSlice";
import currentVideoReducer from "../redux/currentVideoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    currentVideo: currentVideoReducer,
  },
});
