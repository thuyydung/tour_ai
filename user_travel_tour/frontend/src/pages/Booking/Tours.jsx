import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, MapPin, Filter, Search } from "lucide-react";

const Tours = () => {
  const navigate = useNavigate();

  // DANH SÁCH TOUR VIỆT NAM
  const allTours = [
    {
      id: 1,
      name: "Khám Phá Vịnh Hạ Long",
      location: "Hạ Long, Quảng Ninh",
      price: 149,
      rating: 4.9,
      reviews: 534,
      duration: "1 ngày",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592",
    },

    {
      id: 2,
      name: "Food Tour Hà Nội",
      location: "Hà Nội",
      price: 89,
      rating: 4.8,
      reviews: 320,
      duration: "4 giờ",
      image:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    },

    {
      id: 3,
      name: "Khám Phá Nhà Thờ Đức Bà",
      location: "TP. Hồ Chí Minh",
      price: 59,
      rating: 4.7,
      reviews: 210,
      duration: "3 giờ",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    },

    {
      id: 4,
      name: "Tour Bà Nà Hills",
      location: "Đà Nẵng",
      price: 129,
      rating: 4.9,
      reviews: 720,
      duration: "1 ngày",
      image:
        "https://images.unsplash.com/photo-1597149833265-60c372daea22",
    },

    {
      id: 5,
      name: "Trải Nghiệm Fansipan",
      location: "Sa Pa, Lào Cai",
      price: 139,
      rating: 4.8,
      reviews: 412,
      duration: "8 giờ",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    },

    {
      id: 6,
      name: "Khám Phá Phố Cổ Hội An",
      location: "Hội An, Quảng Nam",
      price: 99,
      rating: 4.9,
      reviews: 580,
      duration: "5 giờ",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
    },

    {
      id: 7,
      name: "Tour Đảo Phú Quốc",
      location: "Phú Quốc, Kiên Giang",
      price: 159,
      rating: 4.8,
      reviews: 470,
      duration: "1 ngày",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },

    {
      id: 8,
      name: "Du Thuyền Sông Sài Gòn",
      location: "TP. Hồ Chí Minh",
      price: 110,
      rating: 4.7,
      reviews: 198,
      duration: "2 giờ",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-12 py-16 font-sans">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row justify-between xl:items-end mb-14 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Khám Phá Các <span className="text-blue-600">Tour Du Lịch</span>
          </h1>

          <p className="text-lg text-gray-500 font-semibold">
            Tìm chuyến đi hoàn hảo cho hành trình tiếp theo của bạn
          </p>
        </div>

        {/* SEARCH */}
        <div className="relative w-full xl:w-[430px]">
          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
            size={24}
          />

          <input
            type="text"
            placeholder="Tìm kiếm tour hoặc hoạt động..."
            className="w-full bg-white border border-gray-200 rounded-[24px] px-16 py-4 text-lg font-medium shadow-sm outline-none focus:border-blue-300 transition-all"
          />

          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* GRID TOUR */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {allTours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
          >
            {/* IMAGE */}
            <div className="relative h-60 rounded-[26px] overflow-hidden mb-6">
              <img
                src={tour.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={tour.name}
              />

              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
                <span className="text-blue-600 font-bold text-lg">
                  ${tour.price}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2 text-gray-500 font-semibold text-sm mb-3">
                <MapPin size={16} className="text-blue-600" />
                {tour.location}
              </div>

              <h4 className="text-xl font-bold mb-3 tracking-tight text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                {tour.name}
              </h4>

              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    className="text-yellow-400 fill-current"
                  />

                  <span className="font-bold text-base text-gray-900">
                    {tour.rating}
                  </span>

                  <span className="text-gray-400 font-medium text-sm">
                    ({tour.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 font-medium">
                  <Clock size={18} />
                  {tour.duration}
                </div>
              </div>

              <button
                onClick={() =>
                  navigate(`/booking/tours/${tour.id}`)
                }
                className="mt-auto w-full bg-[#2563EB] text-white py-4 rounded-[20px] font-bold text-lg shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                Đặt Ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;