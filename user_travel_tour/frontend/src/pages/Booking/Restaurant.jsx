import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Search } from "lucide-react";

const Restaurant = () => {
  const navigate = useNavigate();

  // FILTER STATES
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // DATA
  const restaurants = [
    {
      id: 1,
      name: "Nhà Hàng Hải Sản Hạ Long",
      location: "Hạ Long",
      type: "Hải sản",
      price: 450000,
      rating: 4.9,
      reviews: 1200,
      stars: 5,
      time: "09:00 - 22:00",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de",

      menu: [
        {
          id: 1,
          name: "Tôm Hùm Nướng",
          price: 850000,
          image:
            "https://images.unsplash.com/photo-1559847844-5315695dadae",
        },
        {
          id: 2,
          name: "Cua Rang Me",
          price: 550000,
          image:
            "https://images.unsplash.com/photo-1559847844-d721426d6edc",
        },
        {
          id: 3,
          name: "Mực Nướng",
          price: 320000,
          image:
            "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        },
      ],
    },

    {
      id: 2,
      name: "Phở Hà Nội Xưa",
      location: "Hà Nội",
      type: "Món Việt",
      price: 120000,
      rating: 4.8,
      reviews: 980,
      stars: 5,
      time: "06:00 - 21:00",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",

      menu: [
        {
          id: 1,
          name: "Phở Bò",
          price: 70000,
          image:
            "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
        },
        {
          id: 2,
          name: "Bún Chả",
          price: 65000,
          image:
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c",
        },
        {
          id: 3,
          name: "Nem Rán",
          price: 50000,
          image:
            "https://images.unsplash.com/photo-1547592180-85f173990554",
        },
      ],
    },

    {
      id: 3,
      name: "Saigon Rooftop BBQ",
      location: "TP. Hồ Chí Minh",
      type: "BBQ",
      price: 350000,
      rating: 4.7,
      reviews: 1500,
      stars: 4,
      time: "16:00 - 23:30",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

      menu: [
        {
          id: 1,
          name: "Bò Wagyu Nướng",
          price: 650000,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947",
        },
        {
          id: 2,
          name: "Sườn BBQ",
          price: 420000,
          image:
            "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
        },
        {
          id: 3,
          name: "Burger Khói",
          price: 180000,
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        },
      ],
    },

    {
      id: 4,
      name: "Ẩm Thực Phú Quốc",
      location: "Phú Quốc",
      type: "Hải sản",
      price: 280000,
      rating: 4.8,
      reviews: 720,
      stars: 5,
      time: "10:00 - 22:00",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",

      menu: [
        {
          id: 1,
          name: "Gỏi Cá Trích",
          price: 220000,
          image:
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
        },
        {
          id: 2,
          name: "Nhum Biển Nướng",
          price: 300000,
          image:
            "https://images.unsplash.com/photo-1559847844-5315695dadae",
        },
        {
          id: 3,
          name: "Lẩu Hải Sản",
          price: 450000,
          image:
            "https://images.unsplash.com/photo-1547592180-85f173990554",
        },
      ],
    },

    {
      id: 5,
      name: "Bà Nà Hills Buffet",
      location: "Bà Nà Hills",
      type: "Buffet",
      price: 320000,
      rating: 4.6,
      reviews: 860,
      stars: 4,
      time: "08:00 - 21:00",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",

      menu: [
        {
          id: 1,
          name: "Buffet Hải Sản",
          price: 320000,
          image:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        },
        {
          id: 2,
          name: "Bò Nướng",
          price: 280000,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947",
        },
        {
          id: 3,
          name: "Bánh Ngọt",
          price: 120000,
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        },
      ],
    },

    {
      id: 6,
      name: "Hội An Riverside Cafe",
      location: "Hội An",
      type: "Cafe",
      price: 150000,
      rating: 4.9,
      reviews: 640,
      stars: 5,
      time: "07:00 - 23:00",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9",

      menu: [
        {
          id: 1,
          name: "Cao Lầu",
          price: 85000,
          image:
            "https://images.unsplash.com/photo-1512058564366-18510be2db19",
        },
        {
          id: 2,
          name: "Mì Quảng",
          price: 75000,
          image:
            "https://images.unsplash.com/photo-1604908554027-5fbc65b846d4",
        },
        {
          id: 3,
          name: "Cà Phê Sữa Đá",
          price: 45000,
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        },
      ],
    },
  ];

  // FILTER LOGIC
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((res) => {
      const matchCuisine =
        selectedCuisines.length === 0 ||
        selectedCuisines.includes(res.type);

      const matchStars =
        selectedStars.length === 0 ||
        selectedStars.includes(res.stars);

      const matchSearch = res.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchCuisine && matchStars && matchSearch;
    });
  }, [selectedCuisines, selectedStars, searchQuery]);

  // TOGGLE FILTER
  const handleToggle = (item, state, setState) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 2xl:px-32 py-12 font-sans">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Tìm Nhà Hàng
        </h1>

        <p className="text-sm text-gray-500 font-medium">
          Khám phá {filteredRestaurants.length} địa điểm ăn uống nổi bật
        </p>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px,1fr] gap-8 items-start">

        {/* SIDEBAR */}
        <aside className="sticky top-28 bg-white p-7 rounded-[28px] border border-gray-100 shadow-sm space-y-8">

          {/* LOẠI */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Loại Ẩm Thực
            </h3>

            <div className="space-y-3">
              {[
                "Hải sản",
                "Món Việt",
                "BBQ",
                "Buffet",
                "Cafe",
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(type)}
                    onChange={() =>
                      handleToggle(type, selectedCuisines, setSelectedCuisines)
                    }
                    className="w-5 h-5 rounded-lg border-2 border-gray-200"
                  />

                  <span
                    className={`text-[15px] font-medium ${
                      selectedCuisines.includes(type)
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ĐÁNH GIÁ */}
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">
              Đánh Giá
            </h3>

            <div className="space-y-3">
              {[5, 4, 3].map((star) => (
                <label
                  key={star}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(star)}
                    onChange={() =>
                      handleToggle(star, selectedStars, setSelectedStars)
                    }
                    className="w-5 h-5 rounded-lg border-2 border-gray-200"
                  />

                  <div className="flex items-center gap-2">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-yellow-400"
                    />

                    <span className="text-[15px] font-medium text-gray-600">
                      {star} Sao
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="space-y-8">

          {/* SEARCH */}
          <div className="relative">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Tìm theo tên nhà hàng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-3xl py-4 pl-14 pr-5 font-medium text-gray-900 outline-none focus:border-blue-200 shadow-sm"
            />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRestaurants.map((res) => (
              <div
                key={res.id}
                onClick={() =>
                  navigate(`/booking/restaurant/${res.id}`, {
                    state: res,
                  })
                }
                className="bg-white rounded-[36px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                    <span className="text-blue-600 font-semibold text-sm">
                      {res.type}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                      <MapPin size={15} className="text-blue-600" />
                      {res.location}
                    </div>

                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="text-yellow-400 fill-current"
                      />

                      <span className="font-semibold text-gray-900">
                        {res.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                    {res.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        Giá trung bình
                      </p>

                      <p className="text-blue-600 text-2xl font-bold">
                        {res.price.toLocaleString("vi-VN")}đ
                      </p>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
                      Xem Thực Đơn
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY */}
          {filteredRestaurants.length === 0 && (
            <div className="bg-white rounded-[32px] border border-dashed border-gray-200 py-20 text-center">
              <p className="text-gray-400 font-medium text-lg">
                Không tìm thấy nhà hàng phù hợp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;