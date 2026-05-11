import React from "react";
import { ArrowLeft, Hotel } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddHotel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Thêm khách sạn
            </h1>

            <p className="text-gray-500 mt-1">
              Thêm khách sạn mới vào hệ thống
            </p>
          </div>

          <button
            onClick={() => navigate("/hotels")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Tên khách sạn */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Tên khách sạn
            </label>

            <input
              type="text"
              placeholder="Nhập tên khách sạn..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Địa điểm + Giá */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Địa điểm
              </label>

              <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Phú Quốc</option>
                <option>Bà Nà Hills</option>
                <option>Fansipan</option>
                <option>Hội An</option>
                <option>Vịnh Hạ Long</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Giá / đêm
              </label>

              <input
                type="number"
                placeholder="VD: 250"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Số phòng + Đánh giá */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Số phòng
              </label>

              <input
                type="number"
                placeholder="VD: 120"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Đánh giá
              </label>

              <input
                type="number"
                step="0.1"
                placeholder="VD: 4.8"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Ảnh */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Link hình ảnh
            </label>

            <input
              type="text"
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mô tả */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Mô tả
            </label>

            <textarea
              rows="4"
              placeholder="Nhập mô tả khách sạn..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-bold transition flex items-center justify-center gap-2"
          >
            <Hotel size={20} />
            Thêm khách sạn
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;