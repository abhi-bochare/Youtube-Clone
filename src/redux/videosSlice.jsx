import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularVideos, searchVideos } from "../api/youtube";

export const getPopularVideos = createAsyncThunk(
  "videos/getPopular",
  async (_, thunkAPI) => {
    const items = await fetchPopularVideos();
    return items;
  }
);

export const searchForVideos = createAsyncThunk("videos/search", async (q) => {
  const items = await searchVideos(q);
  return items;
});

const videosSlice = createSlice({
  name: "videos",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.pending, (s) => {
        s.status = "loading";
      })
      .addCase(getPopularVideos.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(getPopularVideos.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      })
      .addCase(searchForVideos.pending, (s) => {
        s.status = "loading";
      })
      .addCase(searchForVideos.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(searchForVideos.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.error.message;
      });
  },
});

export default videosSlice.reducer;
