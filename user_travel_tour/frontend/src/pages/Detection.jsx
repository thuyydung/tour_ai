import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UploadCloud,
  MapPin,
  Tag,
  BrainCircuit,
  Hotel,
  Compass,
} from "lucide-react";

const Detection = () => {
  const navigate = useNavigate();

  // Demo state
  const [hasResult] = useState(true);

  // Dữ liệu demo AI Detection
  const resultData = {
    confidence: 98,
    location: "Hạ Long Bay, Việt Nam",
    slug: "ha-long",
    coords: "20.9101° N, 107.1839° E",
    description:
      "Vịnh Hạ Long nổi tiếng với hàng nghìn đảo đá vôi kỳ vĩ, là Di sản Thiên nhiên Thế giới được UNESCO công nhận. Đây là một trong những điểm du lịch đẹp nhất Việt Nam với cảnh biển tuyệt đẹp và các du thuyền sang trọng.",
    tags: ["Biển", "Du thuyền", "UNESCO", "Hang động", "Thiên nhiên"],
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",
  };

  return (
    /* Đổi font-['Plus_Jakarta_Sans'] thành font-sans */
    <div className="min-h-screen bg-[#F8FAFC] px-6 md:px-10 py-14 font-sans">
      
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 mb-6 leading-tight">
          Khám Phá Địa Điểm
          <span className="block text-blue-600">Bằng AI</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 font-bold leading-relaxed max-w-2xl mx-auto">
          Tải ảnh du lịch lên và AI sẽ nhận diện địa điểm cùng thông tin chi
          tiết về nơi đó.
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 xl:grid-cols-[1.15fr,1fr] gap-10 items-start">
        
        {/* LEFT */}
        <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-2">
              Tải Ảnh Lên
            </h2>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
              Hỗ trợ JPG, PNG hoặc WEBP
            </p>
          </div>

          {/* DROPZONE */}
          <div className="border-[3px] border-dashed border-gray-100 rounded-[36px] p-12 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group min-h-[380px]">
            <div className="w-24 h-24 bg-blue-50 rounded-[32px] flex items-center justify-center text-blue-600 mb-8 group-hover:scale-105 transition-all shadow-inner">
              <UploadCloud size={48} strokeWidth={2.5} />
            </div>

            <p className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
              Kéo ảnh vào đây
            </p>

            <p className="text-lg text-gray-400 font-bold mb-10">
              hoặc nhấn để chọn ảnh từ thiết bị
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-[24px] text-xl font-black shadow-xl shadow-blue-200 transition-all active:scale-95">
              Chọn Ảnh
            </button>
          </div>

          {/* PREVIEW IMAGE */}
          {hasResult && (
            <div className="relative rounded-[36px] overflow-hidden border border-gray-100 shadow-2xl group">
              <img
                src={resultData.image}
                alt="Detected"
                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/50">
                <BrainCircuit size={20} className="text-blue-600" />
                <span className="font-bold text-gray-600">AI nhận diện:</span>
                <span className="font-black text-blue-600">{resultData.location}</span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        {hasResult && (
          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm flex flex-col h-full">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-10">
              Kết Quả Nhận Diện
            </h2>

            {/* CONFIDENCE */}
            <div className="mb-10 bg-gray-50/50 rounded-[32px] p-8 border border-gray-100">
              <div className="flex justify-between items-end mb-6">
                <span className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Độ chính xác
                </span>
                <span className="text-6xl font-black text-blue-600 tracking-tighter leading-none">
                  {resultData.confidence}%
                </span>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  style={{ width: `${resultData.confidence}%` }}
                />
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-blue-600 rounded-[32px] p-8 mb-10 flex items-center gap-6 shadow-xl shadow-blue-100">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[24px] flex items-center justify-center text-white shadow-inner">
                <MapPin size={36} strokeWidth={2.5} />
              </div>

              <div className="text-white">
                <p className="text-3xl font-black tracking-tight mb-1">
                  {resultData.location}
                </p>
                <p className="text-blue-100 font-bold text-lg opacity-80">
                  {resultData.coords}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-10">
              <h4 className="text-xl font-black tracking-widest uppercase text-gray-400 flex items-center gap-3 mb-6">
                <Compass size={20} className="text-blue-600" />
                Mô Tả Địa Danh
              </h4>

              <div className="bg-gray-50 rounded-[28px] p-7 border border-gray-50">
                <p className="text-lg text-gray-600 leading-relaxed font-bold">
                  {resultData.description}
                </p>
              </div>
            </div>

            {/* TAGS */}
            <div className="mb-12">
              <h4 className="text-xl font-black tracking-widest uppercase text-gray-400 flex items-center gap-3 mb-6">
                <Tag size={20} className="text-blue-600" />
                Phân Loại AI
              </h4>

              <div className="flex flex-wrap gap-3">
                {resultData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white px-6 py-3 rounded-2xl border border-gray-100 text-gray-700 font-black text-sm shadow-sm hover:border-blue-200 hover:text-blue-600 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-1 gap-5 mt-auto">
              <button
                onClick={() => navigate(`/destination/${resultData.slug}`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-[28px] text-xl font-black shadow-2xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-95"
              >
                Xem Chi Tiết Địa Điểm
              </button>

              <button
                onClick={() => navigate("/booking/hotels")}
                className="w-full bg-white text-blue-600 py-6 rounded-[28px] text-xl font-black border-2 border-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <Hotel size={24} />
                Đặt Khách Sạn Gần Đây
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detection;