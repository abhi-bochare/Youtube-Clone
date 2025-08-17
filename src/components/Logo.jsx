import React from "react";

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width="36" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
        <path
          fill="#FF0000"
          d="M23.5 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.7 3.5 12 3.5 12 3.5h0s-5.7 0-8.6.4c-.4.1-1.3.1-2.1 1C.7 5.6.5 7.2.5 7.2S.2 9.4.2 11.6v.8c0 2.2.3 4.4.3 4.4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.8.4 7.8.4s5.7 0 8.6-.4c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.3-2.2.3-4.4v-.8c0-2.2-.3-4.4-.3-4.4z"
        ></path>
        <path fill="#fff" d="M9.6 15.2l6.2-3.6-6.2-3.6z"></path>
      </svg>

      {!compact && <span className="font-semibold text-lg">YouTube</span>}
    </div>
  );
}
