import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVideoById, fetchRelatedVideos } from "../api/youtube";

export const getVideoById = createAsyncThunk(
  "currentVideo/getById",
  async (id) => {
    const video = await fetchVideoById(id);
    return video;
  }
);

export const getRelatedVideos = createAsyncThunk(
  "currentVideo/getRelated",
  async (id) => {
    const items = await fetchRelatedVideos(id);
    return items;
  }
);

const currentVideoSlice = createSlice({
  name: "currentVideo",
  initialState: { video: null, related: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideoById.pending, (s) => {
        s.status = "loading";
      })
      .addCase(getVideoById.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.video = a.payload;
      })
      .addCase(getVideoById.rejected, (s) => {
        s.status = "failed";
      })
      .addCase(getRelatedVideos.fulfilled, (s, a) => {
        s.related = a.payload;
      });
  },
});

export default currentVideoSlice.reducer;
