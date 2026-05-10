import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  MapPin,
  Star,
  Wifi,
  ShieldCheck,
  Minus,
  Plus,
  Coffee,
  Waves,
  Car,
} from "lucide-react";

const HOTEL_DATA = {
  "1": {
    name: "Vinpearl Resort Hạ Long",
    location: "Hạ Long, Quảng Ninh",
    price: 320,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    desc:
      "Khu nghỉ dưỡng sang trọng bên bờ vịnh Hạ Long với tầm nhìn tuyệt đẹp và dịch vụ đẳng cấp.",
    amenities: [
      "Wifi miễn phí",
      "Hồ bơi vô cực",
      "Ăn sáng buffet",
      "Xe đưa đón",
      "Phòng gym",
    ],
  },

  "2": {
    name: "Lotte Hotel Hà Nội",
    location: "Hà Nội",
    price: 280,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    desc:
      "Khách sạn cao cấp nằm giữa trung tâm Hà Nội với view thành phố cực đẹp.",
    amenities: [
      "View thành phố",
      "Spa cao cấp",
      "Hồ bơi",
      "Wifi miễn phí",
      "Nhà hàng 5 sao",
    ],
  },

  "3": {
    name: "Rex Hotel Sài Gòn",
    location: "Hồ Chí Minh",
    price: 250,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    desc:
      "Khách sạn nổi tiếng ngay trung tâm Sài Gòn, gần phố đi bộ và các địa điểm vui chơi.",
    amenities: [
      "Trung tâm thành phố",
      "Hồ bơi",
      "Wifi miễn phí",
      "Buffet sáng",
      "Quầy bar",
    ],
  },

  "4": {
    name: "JW Marriott Phú Quốc",
    location: "Phú Quốc",
    price: 450,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    desc:
      "Resort sát biển đẳng cấp quốc tế với bãi biển riêng và không gian nghỉ dưỡng tuyệt đẹp.",
    amenities: [
      "Biển riêng",
      "Resort cao cấp",
      "Spa",
      "Wifi miễn phí",
      "Hồ bơi vô cực",
    ],
  },

  "5": {
    name: "Mercure Bana Hills",
    location: "Bà Nà Hills",
    price: 300,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    desc:
      "Khách sạn nằm trên đỉnh Bà Nà Hills với khí hậu mát mẻ quanh năm.",
    amenities: [
      "View núi",
      "Cáp treo",
      "Wifi miễn phí",
      "Ăn sáng",
      "Không khí mát mẻ",
    ],
  },

  "6": {
    name: "Hotel de la Coupole",
    location: "Fansipan, Sapa",
    price: 340,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    desc:
      "Khách sạn sang trọng gần Fansipan với thiết kế châu Âu độc đáo.",
    amenities: [
      "View núi",
      "Spa",
      "Wifi miễn phí",
      "Nhà hàng",
      "Hồ bơi nước nóng",
    ],
  },

  "7": {
    name: "Hoi An Ancient Hotel",
    location: "Hội An",
    price: 190,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    desc:
      "Khách sạn gần phố cổ Hội An với không gian đậm chất truyền thống.",
    amenities: [
      "Phố cổ",
      "Đèn lồng",
      "Wifi miễn phí",
      "Hồ bơi",
      "Ăn sáng",
    ],
  },
};

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = HOTEL_DATA[id];

  const [nights, setNights] = useState(1);

  // Không tìm thấy khách sạn
  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Không tìm thấy khách sạn.
      </div>
    );
  }

  const handleBookNow = () => {
    navigate("/booking/payment", {
      state: {
        items: [
          {
            name: `${hotel.name} (${nights} đêm)`,
            price: hotel.price * nights,
          },
        ],
        total: hotel.price * nights,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 font-sans">
      
      {/* Banner */}
      <div className="relative h-[550px]">
        <img
          src={hotel.image}
          className="w-full h-full object-cover"
          alt={hotel.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-16">
          <div className="max-w-7xl mx-auto w-full">
            
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest w-fit mb-4">
              Khách sạn nổi bật
            </div>

            <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
              {hotel.name}
            </h1>

            <div className="flex gap-6 text-white/90 font-medium flex-wrap">
              
              <span className="flex items-center gap-2">
                <MapPin size={20} />
                {hotel.location}
              </span>

              <span className="flex items-center gap-2 text-yellow-400">
                <Star size={20} fill="currentColor" />
                {hotel.rating} đánh giá
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-[1000] mb-8 tracking-tight">
              Tổng quan
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed">
              {hotel.desc}
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-3xl font-[1000] mb-8 tracking-tight">
              Tiện nghi
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {hotel.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white p-5 rounded-[28px] border border-gray-100 shadow-sm font-medium text-gray-600"
                >
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-xl">
                    <Wifi size={20} />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Extra Services */}
          <section>
            <h2 className="text-3xl font-[1000] mb-8 tracking-tight">
              Dịch vụ nổi bật
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm">
                <Coffee className="text-blue-600 mb-4" size={28} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  Buffet sáng
                </h3>
                <p className="text-gray-500">
                  Thực đơn đa dạng với nhiều món ăn địa phương và quốc tế.
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm">
                <Waves className="text-blue-600 mb-4" size={28} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  Hồ bơi cao cấp
                </h3>
                <p className="text-gray-500">
                  Hồ bơi hiện đại với không gian thư giãn tuyệt đẹp.
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm">
                <Car className="text-blue-600 mb-4" size={28} />
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  Xe đưa đón
                </h3>
                <p className="text-gray-500">
                  Hỗ trợ đưa đón sân bay và tham quan địa điểm du lịch.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT BOOKING CARD */}
        <div className="lg:col-span-4">
          
          <div className="sticky top-32 bg-white rounded-[45px] p-10 border border-gray-100 shadow-xl">
            
            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">
                Giá mỗi đêm
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-600 tracking-tight">
                  ${hotel.price}
                </span>

                <span className="text-gray-400 font-bold">
                  / đêm
                </span>
              </div>
            </div>

            {/* Nights */}
            <div className="mb-8">
              <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-3">
                Số đêm
              </p>

             <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl p-4">
                
                <button
                  onClick={() =>
                    setNights((prev) => Math.max(1, prev - 1))
                  }
                  className="bg-white p-3 rounded-xl shadow-sm hover:scale-105 transition-all"
                >
                  <Minus size={18} />
                </button>

                <span className="text-2xl font-bold text-gray-900">
                  {nights}
                </span>

                <button
                  onClick={() => setNights((prev) => prev + 1)}
                  className="bg-white p-3 rounded-xl shadow-sm hover:scale-105 transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="pt-6 border-t border-gray-100 mb-8">
              
              <div className="flex justify-between font-bold text-gray-500 mb-2">
                <span>
                  ${hotel.price} x {nights} đêm
                </span>

                <span>${hotel.price * nights}</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold text-gray-900">
                  Tổng cộng
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  ${hotel.price * nights}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleBookNow}
              className="w-full bg-[#2563EB] text-white py-6 rounded-[28px] font-[1000] text-xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 hover:scale-[1.03] transition-all"
            >
              Xác nhận đặt phòng
              <ShieldCheck size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;