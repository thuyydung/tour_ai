import React from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Map, Star, Zap } from "lucide-react";

const DestinationCard = ({
  id,
  title,
  country,
  image,
  rating,
  tours,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/destination/${id}`)}
      className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* RATING */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="font-black text-sm">{rating}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-2xl font-black mb-2 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.15em]">
            {country}
          </p>

          <span className="text-blue-600 font-extrabold text-sm">
            {tours} tour
          </span>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* WRAPPER */}
      <div className="px-10 xl:px-20 2xl:px-32">

        {/* HERO */}
        <section className="relative pt-24 pb-28 flex flex-col items-center justify-center">

          {/* TITLE */}
          <div className="text-center max-w-5xl mb-16">
            <h1 className="text-[60px] md:text-[78px] font-black tracking-[-0.05em] text-gray-900 mb-6 leading-[0.95]">
              Khám Phá Những <br />
              <span className="text-blue-600">
                Điểm Đến Tuyệt Đẹp
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
              Tải ảnh du lịch lên để AI nhận diện địa điểm,
              tìm khách sạn và lên kế hoạch chuyến đi hoàn hảo cho bạn.
            </p>
          </div>

          {/* UPLOAD BOX */}
          <div className="w-full max-w-[1600px] min-h-[520px] bg-white rounded-[56px] border border-blue-100 shadow-[0_30px_90px_rgba(59,130,246,0.10)] flex flex-col items-center justify-center text-center relative overflow-hidden px-8">

            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

            {/* ICON */}
            <div className="w-28 h-28 bg-blue-50 rounded-[32px] flex items-center justify-center text-blue-600 mb-8 shadow-inner">
              <Camera size={58} strokeWidth={2.5} />
            </div>

            {/* TEXT */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
              Thả ảnh du lịch của bạn vào đây
            </h2>

            <p className="text-lg text-gray-400 font-semibold mb-10">
              hoặc nhấn để chọn ảnh từ thiết bị
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/detection")}
              className="bg-blue-600 text-white px-14 py-5 rounded-[24px] text-xl font-black shadow-2xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all"
            >
              Thử AI Nhận Diện
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-14 flex-wrap justify-center">
            <button
              onClick={() => navigate("/feed")}
              className="px-10 py-4 rounded-[22px] bg-white border border-gray-200 font-black text-lg text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm"
            >
              Khám Phá Cộng Đồng
            </button>

            <button
              onClick={() => navigate("/planner")}
              className="px-10 py-4 rounded-[22px] bg-white border border-gray-200 font-black text-lg text-gray-700 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm"
            >
              Lên Kế Hoạch Với AI
            </button>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="pb-28">

          <div className="mb-14">
            <h2 className="text-5xl font-black tracking-tight mb-4 text-gray-900">
              Điểm Đến Nổi Bật
            </h2>

            <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.25em]">
              Những địa điểm du lịch nổi tiếng tại Việt Nam
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">

            <DestinationCard
              id="halong"
              title="Vịnh Hạ Long"
              country="Việt Nam"
              rating="4.9"
              tours="320"
              image="https://images.unsplash.com/photo-1528127269322-539801943592"
            />

            <DestinationCard
              id="hanoi"
              title="Hà Nội"
              country="Việt Nam"
              rating="4.8"
              tours="210"
              image="https://images.unsplash.com/photo-1555921015-5532091f6026"
            />

            <DestinationCard
              id="saigon"
              title="TP. Hồ Chí Minh"
              country="Việt Nam"
              rating="4.7"
              tours="280"
              image="https://images.unsplash.com/photo-1583417319070-4a69db38a482"
            />

            <DestinationCard
              id="phuquoc"
              title="Phú Quốc"
              country="Việt Nam"
              rating="4.9"
              tours="180"
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            />

            <DestinationCard
              id="banahill"
              title="Bà Nà Hills"
              country="Đà Nẵng"
              rating="4.8"
              tours="150"
              image="https://images.unsplash.com/photo-1519046904884-53103b34b206"
            />

            <DestinationCard
              id="fansipan"
              title="Fansipan"
              country="Sa Pa"
              rating="4.9"
              tours="140"
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            />

            <DestinationCard
              id="hoian"
              title="Hội An"
              country="Quảng Nam"
              rating="5.0"
              tours="260"
              image="https://images.unsplash.com/photo-1528127269322-539801943592"
            />
          </div>
        </section>
      </div>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50 rounded-t-[70px]">
        
        <div className="px-10 xl:px-20 2xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white p-12 rounded-[32px] shadow-sm min-h-[320px]">
              <div className="w-18 h-18 bg-blue-600 rounded-[22px] flex items-center justify-center text-white mb-7">
                <Camera size={34} />
              </div>

              <h4 className="text-3xl font-black mb-4 text-gray-900">
                Nhận Diện Hình Ảnh AI
              </h4>

              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Tải ảnh du lịch lên và AI sẽ tự động nhận diện địa điểm cho bạn.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white p-12 rounded-[32px] shadow-sm min-h-[320px]">
              <div className="w-18 h-18 bg-blue-600 rounded-[22px] flex items-center justify-center text-white mb-7">
                <Zap size={34} />
              </div>

              <h4 className="text-3xl font-black mb-4 text-gray-900">
                Gợi Ý Thông Minh
              </h4>

              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Đề xuất khách sạn, quán ăn và hoạt động phù hợp với sở thích của bạn.
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white p-12 rounded-[32px] shadow-sm min-h-[320px]">
              <div className="w-18 h-18 bg-blue-600 rounded-[22px] flex items-center justify-center text-white mb-7">
                <Map size={34} />
              </div>

              <h4 className="text-3xl font-black mb-4 text-gray-900">
                Lên Lịch Trình AI
              </h4>

              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Tạo lịch trình du lịch tối ưu dựa trên ngân sách và nhu cầu của bạn.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;