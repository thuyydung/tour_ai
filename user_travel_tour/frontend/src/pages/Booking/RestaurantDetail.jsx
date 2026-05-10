import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Utensils,
  CheckCircle,
  Users,
} from "lucide-react";

const RESTAURANT_DATA = {
  "1": {
    name: "Hải Sản Hạ Long",
    location: "Hạ Long",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Nhà hàng hải sản nổi tiếng với view vịnh Hạ Long tuyệt đẹp và thực đơn tươi sống cao cấp.",
    menu: [
      {
        name: "Tôm Hùm Nướng",
        price: 48,
        image:
          "https://images.unsplash.com/photo-1559847844-d721426d6edc?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Cua Hoàng Đế",
        price: 52,
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Mực Nướng Than",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "2": {
    name: "Bò Bít Tết Hà Nội",
    location: "Hà Nội",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Không gian sang trọng giữa trung tâm Hà Nội với các món steak chuẩn Âu.",
    menu: [
      {
        name: "Bò Wagyu",
        price: 46,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Sườn BBQ",
        price: 34,
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Burger Phô Mai",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "3": {
    name: "Ẩm Thực Sài Gòn",
    location: "TP. Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Thiên đường món Việt nổi tiếng với hương vị đậm chất Sài Gòn.",
    menu: [
      {
        name: "Cơm Tấm",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Bún Bò",
        price: 14,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Gỏi Cuốn",
        price: 10,
        image:
          "https://images.unsplash.com/photo-1604908554027-5fbc65b846d4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "4": {
    name: "Ý Vị Phú Quốc",
    location: "Phú Quốc",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Nhà hàng phong cách Địa Trung Hải gần biển Phú Quốc với pizza và pasta nổi tiếng.",
    menu: [
      {
        name: "Pasta Carbonara",
        price: 24,
        image:
          "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Pizza Hải Sản",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Tiramisu",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "5": {
    name: "Đặc Sản Bà Nà",
    location: "Bà Nà Hills",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Không gian châu Âu giữa núi rừng Bà Nà Hills với thực đơn phong phú.",
    menu: [
      {
        name: "Gà Nướng",
        price: 22,
        image:
          "https://images.unsplash.com/photo-1604908176997-431221e2d2f2?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Xúc Xích Đức",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1612392062798-2c6b7d5f89c4?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Bia Thủ Công",
        price: 10,
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "6": {
    name: "Fansipan Mountain View",
    location: "Fansipan",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Nhà hàng trên núi với view săn mây tuyệt đẹp tại Fansipan.",
    menu: [
      {
        name: "Lẩu Cá Hồi",
        price: 26,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Thịt Trâu Gác Bếp",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Cơm Lam",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  "7": {
    name: "Phố Cổ Hội An",
    location: "Hội An",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1400&auto=format&fit=crop",
    desc:
      "Nhà hàng đậm chất phố cổ với các món ăn truyền thống Hội An.",
    menu: [
      {
        name: "Cao Lầu",
        price: 14,
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Mì Quảng",
        price: 13,
        image:
          "https://images.unsplash.com/photo-1604908554027-5fbc65b846d4?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Bánh Mì Hội An",
        price: 8,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
};

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = RESTAURANT_DATA[id];

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Không tìm thấy nhà hàng.
      </div>
    );
  }

  const totalMenuPrice = restaurant.menu.reduce(
    (sum, dish) => sum + dish.price,
    0
  );

  const handleCheckout = (items, total) => {
    navigate("/booking/payment", {
      state: { items, total },
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 font-sans">
      {/* Banner */}
      <div className="relative h-[450px]">
        <img
          src={restaurant.image}
          className="w-full h-full object-cover"
          alt={restaurant.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-blue-300 font-semibold uppercase tracking-wide mb-3 text-sm">
              {restaurant.location}
            </p>

            <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
              {restaurant.name}
            </h1>

            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {restaurant.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* MENU */}
        <div className="lg:col-span-8">
          <h2 className="text-4xl font-bold mb-10 tracking-tight text-gray-900">
            Món ăn nổi bật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {restaurant.menu.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={dish.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={dish.name}
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {dish.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 text-3xl font-bold tracking-tight">
                      ${dish.price}
                    </span>

                    <button
                      onClick={() =>
                        handleCheckout(
                          [{ name: dish.name, price: dish.price }],
                          dish.price
                        )
                      }
                      className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Đặt món
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER ALL */}
          <div className="bg-blue-600 rounded-[45px] p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-200">
            <div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">
                Gọi toàn bộ thực đơn
              </h3>

              <p className="text-blue-100 font-medium">
                Trải nghiệm tất cả món đặc trưng
              </p>
            </div>

            <div className="flex items-center gap-8 mt-6 md:mt-0">
              <div className="text-right">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide">
                  Tổng tiền
                </p>

                <p className="text-4xl font-bold tracking-tight">
                  ${totalMenuPrice}
                </p>
              </div>

              <button
                onClick={() =>
                  handleCheckout(
                    restaurant.menu.map((dish) => ({
                      name: dish.name,
                      price: dish.price,
                    })),
                    totalMenuPrice
                  )
                }
                className="bg-white text-blue-600 px-10 py-5 rounded-[25px] font-[1000] text-xl hover:scale-105 transition-all flex items-center gap-3"
              >
                Đặt tất cả <CheckCircle size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* BOOK TABLE */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-[45px] p-10 border border-gray-100 shadow-xl">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
              <Utensils size={32} />
            </div>

            <h3 className="text-3xl font-bold mb-2 tracking-tight text-gray-900">
              Đặt bàn
            </h3>

            <p className="text-gray-400 font-medium mb-10 text-sm leading-relaxed">
              Đặt chỗ tại {restaurant.name}
            </p>

            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="bg-gray-50 rounded-2xl flex-1 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 block mb-1">
                    Ngày
                  </span>

                  <input
                    type="date"
                    className="bg-transparent w-full font-medium text-sm text-gray-900 outline-none"
                  />
                </div>

                <div className="bg-gray-50 rounded-2xl flex-1 p-4">
                  <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">
                    Giờ
                  </span>

                  <input
                    type="time"
                    className="bg-transparent w-full font-bold text-sm outline-none"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">
                  Số người
                </span>

                <div className="flex items-center gap-3">
                  <Users size={16} className="text-gray-400" />

                  <select className="bg-transparent w-full font-medium text-sm text-gray-900 outline-none appearance-none">
                    <option>2 người</option>
                    <option>4 người</option>
                    <option>6+ người</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-6 rounded-[28px] font-[1000] text-lg mt-4 hover:bg-blue-600 transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-3">
                Xác nhận đặt bàn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;