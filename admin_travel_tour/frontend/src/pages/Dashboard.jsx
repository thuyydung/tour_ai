import React from "react";
import {
  Users,
  CalendarDays,
  DollarSign,
  TrendingUp,
  MoreVertical,
  MapPin,
} from "lucide-react";

import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const revenueData = [
  { month: "T1", revenue: 12000000 },
  { month: "T2", revenue: 18000000 },
  { month: "T3", revenue: 15000000 },
  { month: "T4", revenue: 25000000 },
  { month: "T5", revenue: 32000000 },
  { month: "T6", revenue: 28000000 },
];
// === HELPER FUNCTIONS ===
// Hàm định dạng tiền tệ VND (ví dụ: 1000000 -> 1.000.000 đ)
const formatVND = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

// Hàm lấy tên tháng tiếng Việt
const getCurrentMonthYear = () => {
  const d = new Date();
  return `Tháng ${d.getMonth() + 1}, ${d.getFullYear()}`;
};

// === SUB-COMPONENTS ===
// 1. StatCard: Thẻ hiển thị số liệu thống kê
const StatCard = ({ title, value, icon: Icon, change, isRevenue }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
    <div className="flex items-center justify-between mb-4">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-full">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="flex-grow">
      <p className="text-3xl font-bold text-gray-900">
        {isRevenue ? formatVND(value) : value.toLocaleString("vi-VN")}
      </p>
    </div>
    <div className="flex items-center gap-1 mt-2">
      <TrendingUp className="w-4 h-4 text-emerald-500" />
      <p className="text-sm text-emerald-600 font-medium">{change}%</p>
      <p className="text-sm text-gray-500 ml-1">so với tháng trước</p>
    </div>
  </div>
);

// 2. DestinationBar: Thanh hiển thị địa điểm phổ biến
const DestinationBar = ({ name, location, count }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">

    {/* LEFT */}
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
        <MapPin className="w-5 h-5 text-gray-600" />
      </div>

      <div className="min-w-0">
        <p className="font-semibold text-gray-800 truncate">
          {name}
        </p>

        <p className="text-xs text-gray-500">
          {location}
        </p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="w-[90px] text-right flex-shrink-0">
      <p className="font-bold text-gray-900">
        {count}
      </p>

      <p className="text-xs text-gray-500">
        lượt đặt
      </p>
    </div>

    {/* BUTTON */}
    <button className="ml-2 text-gray-400 hover:text-gray-600 flex-shrink-0">
      <MoreVertical className="w-4 h-4" />
    </button>
  </div>
);

// 3. ActivityItem: Dòng hiển thị hoạt động gần đây
const ActivityItem = ({ user, action, time, status }) => {
  const statusColors = {
    completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
    pending: "bg-amber-50 text-amber-700 border-amber-100",
    cancelled: "bg-red-50 text-red-700 border-red-100",
  };

  const statusLabels = {
    completed: "Hoàn thành",
    pending: "Đang chờ",
    cancelled: "Đã hủy",
  };

  return (
  <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-100 last:border-b-0">
    
    {/* LEFT */}
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-800">{user}</p>
      <p className="text-sm text-gray-600 truncate">
        {action}
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex items-center justify-end gap-4 flex-shrink-0">
      
      {/* TIME */}
      <p className="text-sm text-gray-500 w-[95px] text-right">
        {time}
      </p>

      {/* STATUS */}
      <span
        className={`w-[110px] text-center px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[status]}`}
      >
        {statusLabels[status]}
      </span>
    </div>
  </div>
);
};

// === MAIN COMPONENT ===
const Dashboard = () => {
  // === DỮ LIỆU GIẢ LẬP (MOCK DATA) ===
  // Số liệu thống kê khớp với image_0.png
  const stats = [
    { title: "Tổng người dùng", value: 12482, icon: Users, change: 12 },
    { title: "Tổng lượt đặt chỗ", value: 3241, icon: CalendarDays, change: 8 },
    {
      title: "Doanh thu",
      value: 328450000,
      icon: DollarSign,
      change: 15,
      isRevenue: true,
    }, // Giá trị VND thực tế
    { title: "Tỷ lệ tăng trưởng", value: 23.5, icon: TrendingUp, change: 3 },
  ];

  // Địa điểm phổ biến
  const destinations = [
    { name: "Phố cổ Hội An", location: "Quảng Nam", count: 240 },
    { name: "Bà Nà Hills", location: "Đà Nẵng", count: 180 },
    { name: "Vịnh Hạ Long", location: "Quảng Ninh", count: 160 },
    { name: "Vườn quốc gia Phong Nha", location: "Quảng Bình", count: 140 },
  ];

  // Hoạt động gần đây khớp với image_1.png
  const activities = [
    {
      user: "Nguyễn Văn Minh",
      action: "Đã đặt khách sạn tại Phố cổ Hội An",
      time: "2 phút trước",
      status: "completed",
    },
    {
      user: "Trần Thị Lan",
      action: "Đã đặt tour tại Bà Nà Hills",
      time: "15 phút trước",
      status: "pending",
    },
    {
      user: "Lê Hoàng Nam",
      action: "Đã cập nhật bài viết du lịch Vịnh Hạ Long",
      time: "1 giờ trước",
      status: "completed",
    },
    {
      user: "Phạm Quốc Bảo",
      action: "Đã hủy đặt phòng tại Phong Nha",
      time: "2 giờ trước",
      status: "cancelled",
    },
    {
      user: "Ngọc Anh",
      action: "Đã thêm địa điểm du lịch mới",
      time: "3 giờ trước",
      status: "completed",
    },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* HEADER SECTION */}
      <div className="animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-gray-950">
          Tổng quan Dashboard
        </h1>
        <p className="text-gray-600 mt-1.5">
          Chào mừng bạn trở lại! Dưới đây là diễn biến của TravelAI hôm nay.
        </p>
      </div>

      {/* STATS GRID - 4 Thẻ thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* CHARTS & DESTINATIONS - Biểu đồ và Địa điểm */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Biểu đồ doanh thu (Phần này bạn cần tự tích hợp thư viện biểu đồ, code này chỉ giữ chỗ) */}
        <div className="xl:col-span-2 bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Biểu đồ Doanh thu (Theo thời gian)
            </h2>
            <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {getCurrentMonthYear()}
            </p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="month" />

                <Tooltip formatter={(value) => formatVND(value)} />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4f46e5"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Danh sách địa điểm phổ biến */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Địa điểm Phổ biến nhất
          </h2>
          <div className="space-y-1">
            {destinations.map((dest, index) => (
              <DestinationBar key={index} {...dest} />
            ))}
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITIES - Hoạt động gần đây khớp với image_1.png */}
      <div
        className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 animate-slideUp"
        style={{ animationDelay: "400ms" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Hoạt động Gần đây</h2>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
            Xem tất cả
          </button>
        </div>
        <div className="space-y-1">
          {activities.map((act, index) => (
            <ActivityItem key={index} {...act} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
