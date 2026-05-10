import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Home,
  Camera,
  Compass,
  Calendar,
  MapPin,
  Hotel,
  Utensils,
  Bell,
  User,
} from "lucide-react";

export const Navbar = () => {
  const navLinks = [
    { icon: Home, label: "Trang chủ", path: "/" },
    { icon: Camera, label: "AI nhận diện", path: "/ai-detection" },
    { icon: Compass, label: "Khám phá", path: "/feed" },
    { icon: Calendar, label: "Lịch trình", path: "/planner" },
    { icon: MapPin, label: "Tour du lịch", path: "/booking/tours" },
    { icon: Hotel, label: "Khách sạn", path: "/booking/hotels" },
    { icon: Utensils, label: "Nhà hàng", path: "/booking/restaurant" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between z-[1000]">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
          <Compass size={24} />
        </div>

        <span className="text-2xl font-black text-[#2563EB] tracking-tight">
          TravelAI
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-1 lg:gap-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `
              flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300
              text-lg font-bold tracking-tight
              ${
                isActive
                  ? "bg-[#DEE8FF] text-[#2563EB]"
                  : "text-[#4B5563] hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            <link.icon size={22} strokeWidth={2.5} />
            <span className="leading-none">{link.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5">
        
        {/* Thông báo - Dùng Link để nhảy tới trang notifications */}
        <Link 
          to="/notifications" 
          className="relative cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
        >
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
            3
          </span>
        </Link>

        {/* Avatar/Profile - Dùng Link để nhảy tới trang profile */}
        <Link 
          to="/profile" 
          className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform shadow-md shadow-blue-100"
        >
          <User size={20} />
        </Link>
      </div>
    </nav>
  );
};