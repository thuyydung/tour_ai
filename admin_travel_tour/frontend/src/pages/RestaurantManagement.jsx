import React from "react";
import { useNavigate } from "react-router-dom";
import { Utensils, Star, Edit3, Trash2, Plus, Search } from "lucide-react";

// Dữ liệu nhà hàng
const restaurants = [
  {
    id: 1,
    name: "Hanoi Garden",
    cuisine: "Ẩm thực Việt",
    location: "Hà Nội",
    rating: 4.9,
    priceRange: "$$$",
    reservations: 234,
    status: "active",
  },
  {
    id: 2,
    name: "Nhà Nhờ Seafood",
    cuisine: "Hải sản",
    location: "Nhà Nhờ (SG)",
    rating: 4.8,
    priceRange: "$$$$",
    reservations: 156,
    status: "active",
  },
  {
    id: 3,
    name: "Sunset BBQ",
    cuisine: "BBQ",
    location: "Phú Quốc",
    rating: 4.7,
    priceRange: "$$$",
    reservations: 312,
    status: "active",
  },
  {
    id: 4,
    name: "Bà Nà Buffet",
    cuisine: "Buffet",
    location: "Bà Nà Hills",
    rating: 4.6,
    priceRange: "$$",
    reservations: 120,
    status: "inactive",
  },
  {
    id: 5,
    name: "Fansipan View Restaurant",
    cuisine: "Đặc sản Tây Bắc",
    location: "Fansipan",
    rating: 4.9,
    priceRange: "$$$",
    reservations: 287,
    status: "active",
  },
];

const RestaurantManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Quản lý Nhà hàng
          </h1>

          <p className="text-gray-500 mt-1">
            Quản lý nhà hàng và lượt đặt bàn trong hệ thống
          </p>
        </div>

        <button
          onClick={() => navigate("/restaurants/add")}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition font-medium"
        >
          <Plus size={18} className="mr-2" />
          Thêm nhà hàng
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
              placeholder="Tìm kiếm nhà hàng..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <th className="px-6 py-4">Nhà hàng</th>
                <th className="px-6 py-4">Ẩm thực</th>
                <th className="px-6 py-4">Địa điểm</th>
                <th className="px-6 py-4 text-center">Đánh giá</th>
                <th className="px-6 py-4">Mức giá</th>
                <th className="px-6 py-4">Lượt đặt</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {restaurants.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50 transition">
                  {/* RESTAURANT */}
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        <Utensils size={18} />
                      </div>

                      <span className="font-semibold text-slate-900">
                        {res.name}
                      </span>
                    </div>
                  </td>

                  {/* CUISINE */}
                  <td className="px-6 py-4">
                    <div className="w-[140px]">
                      <span className="w-full inline-flex justify-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">
                        {res.cuisine}
                      </span>
                    </div>
                  </td>

                  {/* LOCATION */}
                  <td className="px-6 py-4 text-gray-500">{res.location}</td>

                  {/* RATING */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-medium text-slate-700">
                        {res.rating}
                      </span>
                    </div>
                  </td>

                  {/* PRICE */}
                  <td className="px-6 py-4 font-semibold text-slate-900 tracking-wider">
                    {res.priceRange}
                  </td>

                  {/* RESERVATIONS */}
                  <td className="px-6 py-4 text-gray-500">
                    {res.reservations}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <div className="w-[120px]">
                      <span
                        className={`w-full inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium border ${
                          res.status === "active"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-orange-50 text-orange-500 border-orange-100"
                        }`}
                      >
                        {res.status === "active" ? "Hoạt động" : "Tạm khóa"}
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
          <span className="text-gray-500 text-sm">Hiển thị 5 / 5 nhà hàng</span>

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

export default RestaurantManagement;
