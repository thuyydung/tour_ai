import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Hotel,
  UtensilsCrossed,
  CalendarDays,
  MapPinned,
  Settings,
  Plane,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/users",
    label: "Người dùng",
    icon: Users,
  },
  {
    path: "/posts",
    label: "Bài viết",
    icon: FileText,
  },
  {
    path: "/hotels",
    label: "Khách sạn",
    icon: Hotel,
  },
  {
    path: "/restaurants",
    label: "Nhà hàng",
    icon: UtensilsCrossed,
  },
  {
    path: "/bookings",
    label: "Đặt chỗ",
    icon: CalendarDays,
  },
  {
    path: "/destinations",
    label: "Địa điểm",
    icon: MapPinned,
  },
  {
    path: "/settings",
    label: "Cài đặt",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* LOGO */}
      <div className="h-24 px-6 flex items-center border-b border-gray-100">
        <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
          <Plane size={24} className="text-white" />
        </div>

        <div className="ml-4">
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Travel AI
          </h1>

          <div className="flex items-center gap-1 mt-1 text-blue-600">
            <Sparkles size={14} />

            <p className="text-xs font-semibold">
              Hệ thống quản trị thông minh
            </p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-4">
          Menu quản trị
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-100"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-white/15"
                            : "bg-gray-100 group-hover:bg-white"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <span className="font-semibold text-[15px]">
                        {item.label}
                      </span>
                    </div>

                    <ChevronRight
                      size={18}
                      className={`transition-all ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;