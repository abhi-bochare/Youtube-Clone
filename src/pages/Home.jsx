import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../redux/videosSlice";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((s) => s.videos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 max-w-7xl mx-auto">
        {status === "loading" && (
          <div className="mb-4">Loading popular videos...</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list?.map((item) => (
            <VideoCard key={item.id || item.id?.videoId} video={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
