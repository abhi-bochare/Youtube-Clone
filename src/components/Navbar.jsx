import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchForVideos } from "../redux/videosSlice";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (!q) {
      dispatch(searchForVideos("popular"));
    } else {
      dispatch(searchForVideos(q));
    }
    navigate("/");
  };

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo"
              className="h-6"
            />
          </Link>
        </div>

        {/* Middle - Search */}
        <form onSubmit={onSearch} className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="px-6 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
              🔍
            </button>
          </div>
        </form>

        {/* Right - Auth */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="text-sm text-gray-700">{user.email}</div>
              <button
                onClick={() => dispatch(logout())}
                className="px-3 py-1 border rounded-full text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border rounded-full text-sm hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
