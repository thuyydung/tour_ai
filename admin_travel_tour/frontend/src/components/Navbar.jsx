import React, { useContext } from "react";
import {
  Search,
  Bell,
  LogOut,
  Sparkles,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between shadow-sm">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* TITLE */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h1>

         
        </div>

        {/* SEARCH */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu..."
            className="w-96 bg-gray-50 border border-gray-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* NOTIFICATION */}
        <button className="relative w-12 h-12 rounded-2xl bg-gray-100 hover:bg-blue-50 transition flex items-center justify-center">
          <Bell size={20} className="text-slate-600" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* USER */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">
              {user?.name || "Quản trị viên"}
            </p>

            <p className="text-xs text-gray-500">
              Admin hệ thống
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
            {user?.name ? user.name.charAt(0) : "A"}
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-5 py-3 rounded-2xl font-semibold transition active:scale-95"
        >
          <LogOut size={18} />
          Đăng xuất
        </button>
      </div>
    </nav>
  );
};

export default Navbar;