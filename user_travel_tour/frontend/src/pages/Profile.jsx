import React, { useState } from "react";
import {
  User,
  Image,
  Map,
  CalendarDays,
  Hotel,
  MapPin,
  Camera,
} from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Đặt chỗ");

  // BOOKINGS
  const bookings = [
    {
      id: 1,
      title: "Vinpearl Resort Hạ Long",
      location: "Hạ Long, Quảng Ninh",
      date: "15–22 Thg 4, 2026",
      status: "Đã xác nhận",
      icon: Hotel,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      id: 2,
      title: "Lotte Hotel Hà Nội",
      location: "Hà Nội",
      date: "02–06 Thg 5, 2026",
      status: "Đã xác nhận",
      icon: Hotel,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },

    {
      id: 3,
      title: "Rex Hotel Sài Gòn",
      location: "Hồ Chí Minh",
      date: "18–21 Thg 6, 2026",
      status: "Sắp tới",
      icon: Hotel,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },

    {
      id: 4,
      title: "JW Marriott Phú Quốc",
      location: "Phú Quốc",
      date: "10–15 Thg 7, 2026",
      status: "Đã xác nhận",
      icon: Hotel,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },
  ];

  // MY TRIPS
  const trips = [
    {
      name: "Hạ Long",
      desc: "Du thuyền & vịnh biển",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592",
      status: "Sắp tới",
    },

    {
      name: "Hà Nội",
      desc: "Thủ đô nghìn năm văn hiến",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      status: "Đã đi",
    },

    {
      name: "Hồ Chí Minh",
      desc: "Thành phố không ngủ",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      status: "Đã đi",
    },

    {
      name: "Phú Quốc",
      desc: "Thiên đường biển đảo",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      status: "Sắp tới",
    },

    {
      name: "Bà Nà Hills",
      desc: "Cầu Vàng nổi tiếng",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
      status: "Đã đi",
    },

    {
      name: "Fansipan",
      desc: "Nóc nhà Đông Dương",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      status: "Đã đi",
    },

    {
      name: "Hội An",
      desc: "Phố cổ & đèn lồng",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      status: "Sắp tới",
    },
  ];

  // POSTS
  const posts = [
    "https://images.unsplash.com/photo-1528127269322-539801943592",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 lg:px-10 py-10 font-sans">
      {/* HEADER */}
      <div className="max-w-[1700px] mx-auto mb-10">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10 flex flex-col xl:flex-row gap-10 items-center xl:items-start">
          {/* AVATAR */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-100">
              <User size={70} strokeWidth={1.5} className="text-white" />
            </div>

            <button className="absolute bottom-2 right-2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 border border-gray-100 hover:scale-105 transition-all">
              <Camera size={18} />
            </button>
          </div>

          {/* INFO */}
          <div className="flex-1 w-full">
            <div className="flex flex-col 2xl:flex-row 2xl:items-start 2xl:justify-between gap-10">
              <div>
                <p className="text-blue-600 font-bold uppercase tracking-[0.25em] text-xs mb-4">
                  Hồ sơ du lịch
                </p>

                <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-none">
                  Nguyễn Dũng
                </h1>

                <p className="text-lg text-gray-500 font-medium max-w-2xl leading-relaxed mb-8">
                  Đam mê khám phá những địa điểm đẹp nhất Việt Nam cùng trải nghiệm nghỉ dưỡng cao cấp.
                </p>

                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:scale-105 transition-all">
                  Chỉnh sửa hồ sơ
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 w-full 2xl:w-auto">
                {[
                  { label: "Chuyến đi", value: "24" },
                  { label: "Địa điểm", value: "7" },
                  { label: "Bài viết", value: "42" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#F8FAFC] rounded-[28px] px-8 py-7 text-center min-w-[150px]"
                  >
                    <p className="text-4xl font-bold text-blue-600 tracking-tight mb-2">
                      {item.value}
                    </p>

                    <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1700px] mx-auto bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        {/* TABS */}
        <div className="border-b border-gray-100 flex flex-wrap">
          {[
            {
              name: "Bài viết",
              icon: Image,
            },

            {
              name: "Chuyến đi",
              icon: Map,
            },

            {
              name: "Đặt chỗ",
              icon: CalendarDays,
            },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-3 py-6 text-lg font-bold transition-all relative ${
                activeTab === tab.name
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              <tab.icon size={22} />

              {tab.name}

              {activeTab === tab.name && (
                <div className="absolute bottom-0 left-10 right-10 h-1 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="p-8 lg:p-10">
          {/* BOOKINGS */}
          {activeTab === "Đặt chỗ" && (
            <div className="space-y-8">
              {bookings.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] rounded-[32px] overflow-hidden border border-gray-100 flex flex-col lg:flex-row hover:shadow-lg transition-all group"
                >
                  {/* IMAGE */}
                  <div className="w-full lg:w-[300px] h-[220px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 p-8 flex flex-col lg:flex-row justify-between gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest">
                          {item.status}
                        </span>

                        <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[11px]">
                          <MapPin size={14} className="text-blue-600" />
                          {item.location}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-gray-400 font-medium text-base">
                        <CalendarDays size={18} />
                        {item.date}
                      </div>
                    </div>

                    <div className="flex items-end">
                      <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TRIPS */}
          {activeTab === "Chuyến đi" && (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
              {trips.map((trip, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="h-[260px] overflow-hidden relative">
                    <img
                      src={trip.image}
                      alt={trip.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md">
                      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                        {trip.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
                      {trip.name}
                    </h3>

                    <p className="text-gray-500 font-medium text-base leading-relaxed">
                      {trip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* POSTS */}
          {activeTab === "Bài viết" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[32px] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}