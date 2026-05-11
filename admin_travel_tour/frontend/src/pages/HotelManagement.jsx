import React from "react";
import { useNavigate } from "react-router-dom";
import { Hotel, Star, Edit3, Trash2, Plus, Search } from "lucide-react";

// Dữ liệu khách sạn
const hotels = [
  {
    id: 1,
    name: "Khách sạn Hồ Gươm Luxury",
    location: "Hà Nội",
    rating: 4.8,
    rooms: 120,
    price: 180,
    status: "active",
  },
  {
    id: 2,
    name: "Fusion Suites Đà Nẵng",
    location: "Đà Nẵng",
    rating: 4.9,
    rooms: 200,
    price: 220,
    status: "active",
  },
  {
    id: 3,
    name: "Resort Biển Phú Quốc",
    location: "Phú Quốc",
    rating: 4.9,
    rooms: 180,
    price: 350,
    status: "active",
  },
  {
    id: 4,
    name: "Mercure Bà Nà Hills",
    location: "Bà Nà Hills",
    rating: 4.7,
    rooms: 150,
    price: 300,
    status: "active",
  },
  {
    id: 5,
    name: "Khách sạn Fansipan View",
    location: "Fansipan - Sa Pa",
    rating: 4.8,
    rooms: 110,
    price: 170,
    status: "active",
  },
  {
    id: 6,
    name: "Hội An Riverside Hotel",
    location: "Hội An",
    rating: 4.8,
    rooms: 140,
    price: 210,
    status: "active",
  },
  {
    id: 7,
    name: "Hạ Long Ocean Resort",
    location: "Vịnh Hạ Long",
    rating: 5.0,
    rooms: 250,
    price: 400,
    status: "inactive",
  },
];

const HotelManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Quản lý Khách sạn
          </h1>

          <p className="text-gray-500 mt-1">
            Quản lý khách sạn và số lượng phòng trong hệ thống
          </p>
        </div>

        <button
          onClick={() => navigate("/add-hotel")}
          className="group relative overflow-hidden flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 font-semibold active:scale-95"
        >
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

          <Plus
            size={20}
            className="mr-2 p-0.5 rounded-full border border-white relative z-10"
          />

          <span className="relative z-10">Thêm khách sạn</span>
        </button>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* SEARCH */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Tìm kiếm khách sạn..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <th className="px-6 py-4">Khách sạn</th>
                <th className="px-6 py-4">Địa điểm</th>
                <th className="px-6 py-4">Đánh giá</th>
                <th className="px-6 py-4">Số phòng</th>
                <th className="px-6 py-4">Giá / đêm</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {hotels.map((hotel) => (
                <tr key={hotel.id} className="hover:bg-gray-50 transition">
                  {/* HOTEL */}
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        <Hotel size={20} />
                      </div>

                      <span className="font-semibold text-slate-900">
                        {hotel.name}
                      </span>
                    </div>
                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-4 text-gray-500">{hotel.location}</td>

                  {/* RATING */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-medium text-slate-700">
                        {hotel.rating}
                      </span>
                    </div>
                  </td>

                  {/* ROOMS */}
                  <td className="px-6 py-4 text-gray-500">{hotel.rooms}</td>

                  {/* PRICE */}
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    ${hotel.price}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <div className="w-[120px]">
                      <span
                        className={`w-full inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium border ${
                          hotel.status === "active"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-orange-50 text-orange-500 border-orange-100"
                        }`}
                      >
                        {hotel.status === "active" ? "Hoạt động" : "Tạm khóa"}
                      </span>
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-3 text-gray-400">
                      <button className="hover:text-slate-900 transition">
                        <Edit3 size={18} />
                      </button>

                      <button className="hover:text-red-600 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
          <span className="text-gray-500 text-sm">
            Hiển thị 5 / 5 khách sạn
          </span>

          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 text-sm font-medium transition">
              Trang trước
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 text-sm font-medium transition">
              Trang sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelManagement;
