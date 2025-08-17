import React from "react";
import { Link } from "react-router-dom";
import { IconApps } from "./Icons";

const MenuItem = ({ children, label }) => (
  <Link
    to="#"
    className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100"
  >
    <div className="w-6 h-6 text-gray-700">{children}</div>
    <span className="text-sm">{label}</span>
  </Link>
);

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block border-r bg-white h-[calc(100vh-64px)] sticky top-[64px]">
      <nav className="p-4 space-y-1">
        <MenuItem label="Home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </MenuItem>
        <MenuItem label="Shorts">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 8v8l6-4z" />
          </svg>
        </MenuItem>
        <MenuItem label="Subscriptions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6h-3V4H6v2H3v14h18V6z" />
          </svg>
        </MenuItem>

        <div className="border-t mt-3 pt-3">
          <div className="text-xs text-gray-500 uppercase px-3 mb-2">
            Library
          </div>
          <MenuItem label="History">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3a9 9 0 100 18 9 9 0 000-18zm1 10H8V9h1v3h5v1z" />
            </svg>
          </MenuItem>
          <MenuItem label="Your videos">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 16l6-4-6-4v8zM3 6h2v12H3z" />
            </svg>
          </MenuItem>
        </div>
      </nav>
    </aside>
  );
}
