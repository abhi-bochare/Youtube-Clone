import React from "react";
import { Link } from "react-router-dom";

function toId(item) {
  return item.id?.videoId || item.id;
}
function formatViews(v) {
  if (!v) return "";
  const n = Number(v);
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M views";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K views";
  return n + " views";
}
function getDuration(item) {
  const dur = item.contentDetails?.duration;
  if (!dur) return "";
  const match = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";
  const [, h, m, s] = match;
  const parts = [];
  if (h) parts.push(h);
  parts.push((m || "0").padStart(2, "0"));
  parts.push((s || "0").padStart(2, "0"));
  return h ? parts.join(":") : parts.slice(-2).join(":");
}

export default function VideoCard({ video }) {
  const id = toId(video);
  const snippet = video.snippet || {};
  const thumbnail =
    snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || "";
  const views = video.statistics?.viewCount;
  const duration = getDuration(video);

  return (
    <Link to={`/watch/${id}`} className="block">
      <div className="card bg-white rounded overflow-hidden">
        <div className="relative w-full aspect-video bg-gray-200">
          <img
            src={thumbnail}
            alt={snippet.title}
            className="w-full h-full object-cover"
          />
          {duration && <div className="duration-badge">{duration}</div>}
        </div>

        <div className="p-3 flex gap-3">
          <div className="w-10 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
              {(snippet.channelTitle || "C").charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-medium title-clamp">{snippet.title}</h3>
            <div className="text-xs text-gray-500 mt-1">
              <div>{snippet.channelTitle}</div>
              <div className="mt-1">
                {formatViews(views)} •{" "}
                {new Date(
                  snippet.publishedAt || Date.now()
                ).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
