import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  Hotel,
  Utensils,
  Compass,
  ArrowRight,
} from "lucide-react";

const DESTINATIONS_DATA = {
  halong: {
    id: "halong",
    title: "Vịnh Hạ Long",
    country: "Quảng Ninh, Việt Nam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",

    description:
      "Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi kỳ vĩ, du thuyền sang trọng và cảnh biển tuyệt đẹp.",

    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],

    coords: "20.9101° N, 107.1839° E",

    hotels: [
      {
        id: 1,
        name: "Vinpearl Resort Hạ Long",
        price: 3200000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 2,
        name: "Wyndham Legend Hạ Long",
        price: 2400000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
      {
        id: 3,
        name: "FLC Grand Hotel",
        price: 2900000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Nhà Hàng Cua Vàng",
        type: "Hải sản",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      },
      {
        id: 2,
        name: "Hồng Hạnh",
        type: "Ẩm thực Việt",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      },
      {
        id: 3,
        name: "Phương Nam",
        type: "Hải sản cao cấp",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour Du Thuyền",
        price: 1800000,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        id: 2,
        name: "Hang Sửng Sốt",
        price: 850000,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 3,
        name: "Đảo Ti Tốp",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      },
    ],
  },

  hanoi: {
    id: "hanoi",
    title: "Hà Nội",
    country: "Việt Nam",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",

    description:
      "Hà Nội mang vẻ đẹp cổ kính với phố cổ, hồ Hoàn Kiếm và nền ẩm thực đặc sắc.",

    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      "https://images.unsplash.com/photo-1540959733332-e9ab65ea61c0",
    ],

    coords: "21.0278° N, 105.8342° E",

    hotels: [
      {
        id: 1,
        name: "Lotte Hotel Hà Nội",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 2,
        name: "Melia Hanoi",
        price: 2900000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
      {
        id: 3,
        name: "Peridot Grand",
        price: 3100000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Phở Thìn",
        type: "Phở Hà Nội",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
      {
        id: 2,
        name: "Bún Chả Hương Liên",
        type: "Bún chả",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
      {
        id: 3,
        name: "Chả Cá Lã Vọng",
        type: "Đặc sản Hà Nội",
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour Phố Cổ",
        price: 500000,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      },
      {
        id: 2,
        name: "Tour Hồ Gươm",
        price: 350000,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      },
      {
        id: 3,
        name: "Food Tour Hà Nội",
        price: 700000,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      },
    ],
  },

  saigon: {
    id: "saigon",
    title: "TP. Hồ Chí Minh",
    country: "Việt Nam",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",

    description:
      "TP.HCM sôi động với các tòa nhà hiện đại, ẩm thực đường phố và cuộc sống về đêm náo nhiệt.",

    gallery: [
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
      "https://images.unsplash.com/photo-1526481280695-3c4691f3f8e7",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    ],

    coords: "10.8231° N, 106.6297° E",

    hotels: [
      {
        id: 1,
        name: "Rex Hotel",
        price: 2800000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 2,
        name: "The Reverie Saigon",
        price: 5500000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
      {
        id: 3,
        name: "Hotel Nikko",
        price: 3300000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Pizza 4P's",
        type: "Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
      {
        id: 2,
        name: "Bếp Mẹ Ỉn",
        type: "Ẩm thực Việt",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
      {
        id: 3,
        name: "Hum Vegetarian",
        type: "Chay",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      },
    ],

    tours: [
      {
        id: 1,
        name: "City Tour Sài Gòn",
        price: 650000,
        image: "https://images.unsplash.com/photo-1526481280695-3c4691f3f8e7",
      },
      {
        id: 2,
        name: "Tour Địa Đạo Củ Chi",
        price: 950000,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      },
      {
        id: 3,
        name: "Food Tour Đêm",
        price: 800000,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      },
    ],
  },

  phuquoc: {
    id: "phuquoc",
    title: "Phú Quốc",
    country: "Kiên Giang, Việt Nam",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    description:
      "Phú Quốc nổi tiếng với biển xanh, cát trắng và các resort nghỉ dưỡng cao cấp.",

    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    ],

    coords: "10.2899° N, 103.9840° E",

    hotels: [
      {
        id: 1,
        name: "JW Marriott Phú Quốc",
        price: 7800000,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      },
      {
        id: 2,
        name: "Vinpearl Resort",
        price: 4200000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 3,
        name: "InterContinental",
        price: 6900000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Ra Khơi",
        type: "Hải sản",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      },
      {
        id: 2,
        name: "Xin Chào",
        type: "Seafood & BBQ",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      },
      {
        id: 3,
        name: "The Home Pizza",
        type: "Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour 4 Đảo",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      },
      {
        id: 2,
        name: "Lặn Ngắm San Hô",
        price: 950000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      },
      {
        id: 3,
        name: "Cáp Treo Hòn Thơm",
        price: 700000,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    ],
  },

  banahill: {
    id: "banahill",
    title: "Bà Nà Hills",
    country: "Đà Nẵng",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",

    description:
      "Bà Nà Hills nổi bật với Cầu Vàng, khí hậu mát mẻ và kiến trúc châu Âu độc đáo.",

    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],

    coords: "15.9950° N, 107.9967° E",

    hotels: [
      {
        id: 1,
        name: "Mercure Danang French Village",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
      {
        id: 2,
        name: "Bana Hills Mountain Lodge",
        price: 2500000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 3,
        name: "Golden Peak Hotel",
        price: 2800000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Beer Plaza",
        type: "Buffet",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      },
      {
        id: 2,
        name: "La Lavande",
        type: "Ẩm thực Pháp",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
      {
        id: 3,
        name: "Arapang",
        type: "Việt Nam",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour Cầu Vàng",
        price: 850000,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 2,
        name: "Fantasy Park",
        price: 650000,
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      },
      {
        id: 3,
        name: "Tour Cáp Treo",
        price: 950000,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      },
    ],
  },

  fansipan: {
    id: "fansipan",
    title: "Fansipan",
    country: "Sa Pa",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

    description:
      "Fansipan được mệnh danh là nóc nhà Đông Dương với cảnh núi non hùng vĩ.",

    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8",
    ],

    coords: "22.3033° N, 103.7786° E",

    hotels: [
      {
        id: 1,
        name: "Hotel de la Coupole",
        price: 4200000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
      {
        id: 2,
        name: "Pao's Sapa Leisure",
        price: 2600000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 3,
        name: "KK Sapa Hotel",
        price: 2200000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "A Quỳnh",
        type: "Đặc sản Tây Bắc",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
      {
        id: 2,
        name: "Red Dao House",
        type: "Ẩm thực địa phương",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
      {
        id: 3,
        name: "Moment Romantic",
        type: "BBQ",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour Chinh Phục Fansipan",
        price: 1500000,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
      {
        id: 2,
        name: "Tour Trekking Sapa",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8",
      },
      {
        id: 3,
        name: "Tour Cáp Treo",
        price: 900000,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      },
    ],
  },

  hoian: {
    id: "hoian",
    title: "Hội An",
    country: "Quảng Nam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",

    description:
      "Hội An nổi tiếng với phố cổ lung linh đèn lồng và nét văn hóa truyền thống đặc sắc.",

    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    ],

    coords: "15.8801° N, 108.3380° E",

    hotels: [
      {
        id: 1,
        name: "Anantara Hội An",
        price: 4100000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },
      {
        id: 2,
        name: "La Siesta Resort",
        price: 3300000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      },
      {
        id: 3,
        name: "Almanity Hoi An",
        price: 2900000,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    restaurants: [
      {
        id: 1,
        name: "Morning Glory",
        type: "Ẩm thực Hội An",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },
      {
        id: 2,
        name: "Bale Well",
        type: "BBQ",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      },
      {
        id: 3,
        name: "Cargo Club",
        type: "Cafe & Bakery",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      },
    ],

    tours: [
      {
        id: 1,
        name: "Tour Phố Cổ",
        price: 550000,
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      },
      {
        id: 2,
        name: "Tour Rừng Dừa",
        price: 700000,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      },
      {
        id: 3,
        name: "Tour Thả Hoa Đăng",
        price: 400000,
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      },
    ],
  },
};

const ServiceCard = ({ title, image, price, subTitle, btnText, onClick }) => {
  // Hàm bổ trợ để format giá ngay trong card
  const formatPrice = (val) => {
    if (!val) return "";
    // Nếu giá đã là string có chữ 'đ' thì trả về luôn, nếu là số thì format
    return typeof val === "number" ? `${val.toLocaleString("vi-VN")}đ` : val;
  };

  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black text-gray-900 tracking-tight">
          {title}
        </h3>
        {subTitle && (
          <p className="text-gray-400 font-bold text-xs uppercase mt-1 tracking-widest">
            {subTitle}
          </p>
        )}

        {price && (
          <p className="text-blue-600 font-black mt-4 text-xl tracking-tight">
            {formatPrice(price)}
          </p>
        )}

        <button
          onClick={onClick}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-[20px] font-black transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("hotels");

  const data = DESTINATIONS_DATA[id] || DESTINATIONS_DATA.halong;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[1400px] mx-auto px-6 pb-14">
            <div className="flex items-center gap-2 text-white/80 font-medium mb-4">
              <MapPin size={18} />
              {data.country}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
              {data.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2">
                <Star size={16} className="text-yellow-400 fill-current" />

                <span className="text-white font-bold">4.9</span>
              </div>

              <span className="text-white font-medium">
                120+ địa điểm du lịch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* DESCRIPTION */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Giới thiệu</h2>

          <p className="text-lg text-gray-500 leading-relaxed max-w-4xl font-medium">
            {data.description}
          </p>
        </section>

        {/* GALLERY */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black text-gray-900">Thư viện ảnh</h2>

            <button className="text-blue-600 font-bold hover:underline">
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery.map((img, index) => (
              <div
                key={index}
                className="h-[280px] rounded-[28px] overflow-hidden group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Vị trí</h2>

          <div className="bg-blue-50 rounded-[32px] border border-blue-100 p-16 text-center">
            <div className="w-20 h-20 rounded-[24px] bg-white flex items-center justify-center text-blue-600 mx-auto mb-5 shadow-md">
              <MapPin size={36} />
            </div>

            <h3 className="text-3xl font-black text-gray-900 mb-3">
              {data.title}
            </h3>

            <p className="inline-block bg-white px-5 py-3 rounded-full text-blue-600 font-bold shadow-sm">
              {data.coords}
            </p>
          </div>
        </section>

        {/* TABS */}
        <section className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          {/* TAB BUTTONS */}
          <div className="flex flex-wrap border-b border-gray-100">
            {[
              {
                id: "hotels",
                label: "Khách sạn",
                icon: Hotel,
              },

              {
                id: "restaurants",
                label: "Nhà hàng",
                icon: Utensils,
              },

              {
                id: "tours",
                label: "Tour",
                icon: Compass,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[200px] py-5 flex items-center justify-center gap-3 font-bold text-lg transition-all ${
                  activeTab === tab.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <tab.icon size={22} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* 1. HOTELS: Nhảy tới /booking/hotels/1 */}
            {/* 1. HOTELS */}
            {activeTab === "hotels" &&
              data.hotels.map((item) => (
                <ServiceCard
                  key={item.id}
                  title={item.name}
                  image={item.image}
                  // Thêm Number() để tránh lỗi nếu price đang là chuỗi
                  price={`${Number(item.price).toLocaleString("vi-VN")}đ / đêm`}
                  btnText="Đặt phòng"
                  onClick={() => navigate(`/booking/hotels/${item.id}`)}
                />
              ))}

            {/* 2. RESTAURANTS */}
            {activeTab === "restaurants" &&
              data.restaurants.map((item) => (
                <ServiceCard
                  key={item.id}
                  title={item.name}
                  image={item.image}
                  subTitle={item.type}
                  // Nếu nhà hàng có giá trung bình, bạn cũng nên format tương tự
                  price={
                    item.avgPrice
                      ? `${Number(item.avgPrice).toLocaleString("vi-VN")}đ`
                      : "Giá liên hệ"
                  }
                  btnText="Đặt bàn"
                  onClick={() =>
                    navigate(`/booking/payment`, {
                      state: { restaurantId: item.id },
                    })
                  }
                />
              ))}

            {/* 3. TOURS */}
            {activeTab === "tours" &&
              data.tours.map((item) => (
                <ServiceCard
                  key={item.id}
                  title={item.name}
                  image={item.image}
                  // Thêm Number() ở đây
                  price={`${Number(item.price).toLocaleString("vi-VN")}đ`}
                  btnText="Đặt tour"
                  onClick={() => navigate(`/booking/tours/${item.id}`)}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
