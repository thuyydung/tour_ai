import React, { useState } from "react";
import { ArrowLeft, Upload, Utensils, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: "",
    rating: "",
    reservations: "",
    priceRange: "",
    status: "active",
    image: "",
    description: "",
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

    alert("Thêm nhà hàng thành công!");

    navigate("/restaurants");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Thêm Nhà hàng</h1>

            <p className="text-gray-500 mt-1">
              Tạo nhà hàng mới trong hệ thống
            </p>
          </div>

          <button
            onClick={() => navigate("/restaurants")}
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
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Utensils size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Thông tin nhà hàng
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
                  Tên nhà hàng
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập tên nhà hàng..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* ĐỊA ĐIỂM */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Địa điểm
                </label>

                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                >
                  <option value="">-- Chọn địa điểm --</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>Phú Quốc</option>
                  <option>Bà Nà Hills</option>
                  <option>Fansipan</option>
                  <option>Hội An</option>
                  <option>Vịnh Hạ Long</option>
                </select>
              </div>

              {/* ẨM THỰC */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Loại ẩm thực
                </label>

                <input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                  placeholder="Ví dụ: Hải sản, BBQ..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
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
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              {/* ĐẶT BÀN */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Lượt đặt bàn
                </label>

                <input
                  type="number"
                  name="reservations"
                  value={formData.reservations}
                  onChange={handleChange}
                  placeholder="250"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              {/* MỨC GIÁ */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mức giá
                </label>

                <select
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="">-- Chọn mức giá --</option>
                  <option>$</option>
                  <option>$$</option>
                  <option>$$$</option>
                  <option>$$$$</option>
                </select>
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
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* MÔ TẢ */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mô tả
                </label>

                <textarea
                  rows="5"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Nhập mô tả nhà hàng..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
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
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
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
                onClick={() => navigate("/restaurants")}
                className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold transition"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg shadow-blue-100 active:scale-95"
              >
                <Save size={18} />
                Lưu nhà hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
