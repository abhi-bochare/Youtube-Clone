import React, { useState, useEffect } from "react";

export default function SubscribeButton({ channelId }) {
  const key = `sub_${channelId || "local"}`;
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem(key);
      setSubscribed(s === "1");
    } catch (e) {}
  }, [key]);

  function toggle() {
    setSubscribed((s) => {
      const next = !s;
      try {
        localStorage.setItem(key, next ? "1" : "0");
      } catch (e) {}
      return next;
    });
  }

  return (
    <button
      onClick={toggle}
      className={`${
        subscribed ? "bg-gray-200 text-gray-800" : "subscribe-btn"
      } px-4 py-2 rounded font-semibold`}
    >
      {subscribed ? "Subscribed" : "Subscribe"}
    </button>
  );
}
