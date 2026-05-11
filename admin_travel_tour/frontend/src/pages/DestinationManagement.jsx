import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Star, Edit3, Trash2, MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Hà Nội",
    country: "Việt Nam",
    description:
      "Thủ đô ngàn năm văn hiến với nhiều địa danh lịch sử nổi tiếng.",
    rating: 4.8,
    visits: "15.234",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
  },
  {
    id: 2,
    name: "Đà Nẵng",
    country: "Việt Nam",
    description: "Thành phố biển hiện đại với nhiều cây cầu nổi tiếng.",
    rating: 4.9,
    visits: "18.450",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
  },
  {
    id: 3,
    name: "Phú Quốc",
    country: "Việt Nam",
    description: "Thiên đường biển đảo với nước biển trong xanh tuyệt đẹp.",
    rating: 4.9,
    visits: "20.120",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: 4,
    name: "Bà Nà Hills",
    country: "Đà Nẵng",
    description: "Khu du lịch nổi tiếng với Cầu Vàng và khí hậu mát mẻ.",
    rating: 4.7,
    visits: "12.980",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
  },
  {
    id: 5,
    name: "Fansipan",
    country: "Lào Cai",
    description: "Nóc nhà Đông Dương với cảnh núi non hùng vĩ.",
    rating: 4.8,
    visits: "10.540",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: 6,
    name: "Hội An",
    country: "Quảng Nam",
    description: "Phố cổ lung linh với đèn lồng và ẩm thực đặc sắc.",
    rating: 4.9,
    visits: "16.890",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
  },
  {
    id: 7,
    name: "Nha Trang",
    country: "Khánh Hòa",
    description: "Thành phố biển sôi động với nhiều resort cao cấp.",
    rating: 4.7,
    visits: "14.300",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  },
  {
    id: 8,
    name: "Vịnh Hạ Long",
    country: "Quảng Ninh",
    description: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá.",
    rating: 5.0,
    visits: "25.760",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80",
  },
];

const DestinationManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Quản lý địa điểm
          </h1>
          <p className="text-gray-500">Quản lý các địa điểm du lịch nổi bật</p>
        </div>

        <button
          onClick={() => navigate("/destinations/add")}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition-all shadow-xl shadow-blue-100 font-bold active:scale-95"
        >
          <Plus size={20} className="mr-2 border-2 rounded-full" />
          Thêm địa danh
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Tìm kiếm địa điểm..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />

              {/* Rating */}
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-slate-700">
                  {dest.rating}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-800">
                  {dest.name}
                </h3>

                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  <span>{dest.country}</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[40px]">
                {dest.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {dest.visits}
                  </p>
                  <p className="text-xs text-gray-400">lượt tham quan</p>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Edit3 size={16} />
                  </button>

                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={16} />
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationManagement;
