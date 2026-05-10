import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Info,
} from "lucide-react";

const TOUR_DATA = {
  "1": {
    name: "Khám Phá Vịnh Hạ Long",
    location: "Hạ Long, Quảng Ninh",
    price: 149,
    duration: "1 ngày",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592",
    desc:
      "Trải nghiệm du thuyền khám phá Vịnh Hạ Long với phong cảnh thiên nhiên tuyệt đẹp và các hang động nổi tiếng.",
    includes: [
      "Xe đưa đón",
      "Du thuyền tham quan",
      "Ăn trưa hải sản",
      "Hướng dẫn viên",
    ],
  },

  "2": {
    name: "Food Tour Hà Nội",
    location: "Hà Nội",
    price: 89,
    duration: "4 giờ",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    desc:
      "Khám phá ẩm thực Hà Nội với các món nổi tiếng như phở, bún chả và cà phê trứng.",
    includes: [
      "Hướng dẫn viên",
      "Đồ ăn địa phương",
      "Nước uống",
      "Chụp ảnh",
    ],
  },

  "3": {
    name: "Khám Phá Nhà Thờ Đức Bà",
    location: "TP. Hồ Chí Minh",
    price: 59,
    duration: "3 giờ",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    desc:
      "Tour tham quan các địa điểm nổi tiếng tại trung tâm Sài Gòn như Nhà Thờ Đức Bà và Bưu điện Thành phố.",
    includes: [
      "Vé tham quan",
      "Hướng dẫn viên",
      "Nước uống",
      "Xe di chuyển",
    ],
  },

  "4": {
    name: "Tour Bà Nà Hills",
    location: "Đà Nẵng",
    price: 129,
    duration: "1 ngày",
    image:
      "https://images.unsplash.com/photo-1597149833265-60c372daea22",
    desc:
      "Trải nghiệm cáp treo Bà Nà Hills và check-in Cầu Vàng nổi tiếng.",
    includes: [
      "Vé cáp treo",
      "Buffet trưa",
      "Xe đưa đón",
      "Hướng dẫn viên",
    ],
  },

  "5": {
    name: "Trải Nghiệm Fansipan",
    location: "Sa Pa, Lào Cai",
    price: 139,
    duration: "8 giờ",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    desc:
      "Khám phá đỉnh Fansipan với hệ thống cáp treo hiện đại và cảnh núi non hùng vĩ.",
    includes: [
      "Vé cáp treo",
      "Ăn trưa",
      "Hướng dẫn viên",
      "Xe đưa đón",
    ],
  },

  "6": {
    name: "Khám Phá Phố Cổ Hội An",
    location: "Hội An, Quảng Nam",
    price: 99,
    duration: "5 giờ",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
    desc:
      "Dạo quanh phố cổ Hội An, thả đèn hoa đăng và thưởng thức đặc sản địa phương.",
    includes: [
      "Vé tham quan",
      "Ẩm thực địa phương",
      "Đèn hoa đăng",
      "Hướng dẫn viên",
    ],
  },

  "7": {
    name: "Tour Đảo Phú Quốc",
    location: "Phú Quốc, Kiên Giang",
    price: 159,
    duration: "1 ngày",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc:
      "Khám phá biển xanh Phú Quốc với hoạt động lặn ngắm san hô và tham quan đảo.",
    includes: [
      "Tàu tham quan",
      "Ăn trưa",
      "Lặn ngắm san hô",
      "Hướng dẫn viên",
    ],
  },

  "8": {
    name: "Du Thuyền Sông Sài Gòn",
    location: "TP. Hồ Chí Minh",
    price: 110,
    duration: "2 giờ",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    desc:
      "Ngắm nhìn thành phố Hồ Chí Minh lung linh về đêm trên du thuyền sang trọng.",
    includes: [
      "Buffet tối",
      "Biểu diễn nhạc sống",
      "Du thuyền",
      "Nước uống",
    ],
  },
};

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tour = TOUR_DATA[id];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Không tìm thấy tour du lịch.
      </div>
    );
  }

  const handleGoToPayment = () => {
    navigate("/booking/payment", {
      state: {
        items: [
          {
            name: tour.name,
            price: tour.price,
          },
        ],
        total: tour.price,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24 font-['Be_Vietnam_Pro']">
      {/* Banner */}
      <div className="relative h-[500px]">
        <img
          src={tour.image}
          className="w-full h-full object-cover"
          alt={tour.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="bg-blue-600 inline-block px-4 py-1 rounded-full text-white text-xs font-bold mb-4 tracking-wide">
              Tour du lịch
            </div>

            <h1 className="text-6xl font-extrabold text-white mb-4">
              {tour.name}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90 font-medium">
              <span className="flex items-center gap-2">
                <MapPin size={20} />
                {tour.location}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={20} />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">
              Giới thiệu tour
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed">
              {tour.desc}
            </p>
          </section>

          <section className="bg-white p-10 rounded-[45px] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Info className="text-blue-600" />
              Tour bao gồm
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tour.includes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 text-gray-600 font-medium"
                >
                  <CheckCircle2
                    className="text-green-500"
                    size={24}
                  />

                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-[45px] p-10 border border-gray-100 shadow-xl">
            <div className="mb-8">
              <p className="text-gray-400 font-bold uppercase text-xs tracking-wide mb-1">
                Giá mỗi người
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-blue-600">
                  ${tour.price}
                </span>

                <span className="text-gray-400 font-medium">
                  / người
                </span>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div className="bg-gray-50 rounded-2xl p-4 border border-transparent focus-within:border-blue-100 transition-all">
                <span className="text-[10px] font-bold uppercase text-gray-400 block mb-1 tracking-wide">
                  Chọn ngày
                </span>

                <div className="flex items-center gap-3">
                  <Calendar
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="date"
                    className="bg-transparent w-full font-medium text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleGoToPayment}
              className="w-full bg-[#2563EB] text-white py-6 rounded-[28px] font-bold text-lg shadow-xl shadow-blue-100 flex items-center justify-center gap-3 hover:scale-[1.03] transition-all"
            >
              Đặt & Thanh toán
              <ShieldCheck size={24} />
            </button>

            <p className="text-center text-gray-400 text-xs font-medium mt-6 px-4">
              Miễn phí hủy tour trước 24 giờ khởi hành.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;