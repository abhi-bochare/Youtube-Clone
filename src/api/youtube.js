import axios from "axios";

const KEY = import.meta.env.VITE_YT_API_KEY;
const BASE = "https://www.googleapis.com/youtube/v3";

if (!KEY)
  console.warn("VITE_YT_API_KEY is not set. YouTube requests will fail.");

export async function fetchPopularVideos(maxResults = 24, regionCode = "US") {
  const url = `${BASE}/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=${maxResults}&regionCode=${regionCode}&key=${KEY}`;
  const res = await axios.get(url);
  return res.data.items;
}

export async function fetchVideoById(id) {
  const url = `${BASE}/videos?part=snippet,statistics,contentDetails&id=${id}&key=${KEY}`;
  const res = await axios.get(url);
  return res.data.items && res.data.items[0];
}

export async function fetchRelatedVideos(videoId, maxResults = 12) {
  const url = `${BASE}/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=${maxResults}&key=${KEY}`;
  const res = await axios.get(url);
  return res.data.items;
}

export async function searchVideos(q, maxResults = 24) {
  const url = `${BASE}/search?part=snippet&q=${encodeURIComponent(
    q
  )}&type=video&maxResults=${maxResults}&key=${KEY}`;
  const res = await axios.get(url);
  return res.data.items;
}
