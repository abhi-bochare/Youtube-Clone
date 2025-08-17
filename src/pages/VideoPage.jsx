import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById, getRelatedVideos } from "../redux/currentVideoSlice";
import VideoCard from "../components/VideoCard";
import {
  IconLike,
  IconDislike,
  IconShare,
  IconSave,
} from "../components/Icons";
import SubscribeButton from "../components/SubscribeButton";

export default function VideoPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { video, related, status } = useSelector((s) => s.currentVideo);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (!id) return;
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  if (!video) return <div className="p-8">Loading video...</div>;

  const sn = video.snippet || {};
  const stats = video.statistics || {};
  const views = stats.viewCount || "—";

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-6">
      <main>
        <div className="w-full aspect-video bg-black">
          <iframe
            title={sn.title}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <h1 className="text-xl font-semibold mt-4">{sn.title}</h1>

        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-600">
            {Number(views).toLocaleString()} views •{" "}
            {new Date(sn.publishedAt).toLocaleDateString()}
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <IconLike />{" "}
              <span className="text-sm">
                {" "}
                {stats.likeCount
                  ? Number(stats.likeCount).toLocaleString()
                  : "--"}{" "}
              </span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <IconDislike />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <IconShare /> <span className="text-sm">Share</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <IconSave /> <span className="text-sm">Save</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4 mt-4 p-3 bg-white rounded card">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
            {(sn.channelTitle || "C").charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{sn.channelTitle}</div>
                <div className="text-sm muted">Channel • {sn.channelTitle}</div>
              </div>
              <SubscribeButton />
            </div>
            <div className="text-sm text-gray-700 mt-3 whitespace-pre-wrap">
              {showDesc ? sn.description : (sn.description || "").slice(0, 300)}
            </div>
            {(sn.description || "").length > 300 && (
              <button
                onClick={() => setShowDesc((s) => !s)}
                className="text-sm text-blue-600 mt-2"
              >
                {showDesc ? "SHOW LESS" : "SHOW MORE"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium">Comments</h3>
        </div>
      </main>

      <aside>
        <div className="space-y-3">
          {related?.map((item) => {
            const vidId = item.id?.videoId || item.id;
            return (
              <div
                key={vidId}
                className="cursor-pointer"
                onClick={() => navigate(`/watch/${vidId}`)}
              >
                <div className="flex gap-3 items-start">
                  <div className="w-40 h-24 bg-gray-200 overflow-hidden rounded">
                    <img
                      src={item.snippet?.thumbnails?.medium?.url}
                      alt={item.snippet?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {item.snippet?.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.snippet?.channelTitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
