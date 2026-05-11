import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Upload,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddDestination = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    rating: "",
    visits: "",
    image: "",
    description: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thêm địa điểm thành công!");

    navigate("/destinations");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Thêm Địa điểm
            </h1>

            <p className="text-gray-500 mt-1">
              Tạo địa điểm du lịch mới trong hệ thống
            </p>
          </div>

          <button
            onClick={() => navigate("/destinations")}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition font-medium"
          >
            <ArrowLeft size={18} />
            Quay lại
          </button>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
          {/* TOP */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <MapPin size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Thông tin địa điểm
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Điền đầy đủ thông tin bên dưới
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TÊN */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tên địa điểm
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập tên địa điểm..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* KHU VỰC */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Khu vực
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value="">-- Chọn khu vực --</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>Phú Quốc</option>
                  <option>Bà Nà Hills</option>
                  <option>Fansipan</option>
                  <option>Hội An</option>
                  <option>Vịnh Hạ Long</option>
                </select>
              </div>

              {/* ĐÁNH GIÁ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Đánh giá
                </label>

                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="4.8"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* LƯỢT THAM QUAN */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Lượt tham quan
                </label>

                <input
                  type="text"
                  name="visits"
                  value={formData.visits}
                  onChange={handleChange}
                  placeholder="15.000"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* LINK ẢNH */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Link hình ảnh
                </label>

                <div className="relative">
                  <Upload
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* MÔ TẢ */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mô tả địa điểm
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Nhập mô tả địa điểm..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* TRẠNG THÁI */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Trạng thái
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Tạm khóa</option>
                </select>
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-6 border-t border-gray-200 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate("/destinations")}
                className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold transition"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg shadow-blue-100 active:scale-95"
              >
                <Save size={18} />
                Lưu địa điểm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;