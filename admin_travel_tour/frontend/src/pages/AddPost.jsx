import React, { useState } from "react";
import { ArrowLeft, Save, FilePlus2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "Du lịch",
    status: "pending",
    content: "",
    image: "",
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

    alert("Thêm bài viết thành công!");

    navigate("/posts");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Thêm bài viết</h1>

          <p className="text-gray-500 mt-1">
            Tạo bài viết du lịch mới cho hệ thống
          </p>
        </div>

        <button
          onClick={() => navigate("/posts")}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition font-medium"
        >
          <ArrowLeft size={18} />
          Quay lại
        </button>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <FilePlus2 size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Nội dung bài viết
            </h2>

            <p className="text-gray-500 text-sm">
              Điền đầy đủ thông tin bài viết
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TIÊU ĐỀ */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tiêu đề bài viết
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* TÁC GIẢ */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tác giả
              </label>

              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nhập tên tác giả..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* DANH MỤC */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Danh mục
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Du lịch</option>
                <option>Ẩm thực</option>
                <option>Khách sạn</option>
                <option>Review</option>
              </select>
            </div>

            {/* HÌNH ẢNH */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Link hình ảnh
              </label>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* NỘI DUNG */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nội dung bài viết
              </label>

              <textarea
                rows={8}
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Nhập nội dung..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>

            {/* TRẠNG THÁI */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Trạng thái
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="pending">Chờ duyệt</option>
                <option value="approved">Đã duyệt</option>
              </select>
            </div>
          </div>

          {/* BUTTON */}
          <div className="pt-6 border-t border-gray-200 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/posts")}
              className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold transition"
            >
              Hủy
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg shadow-blue-100"
            >
              <Save size={18} />
              Lưu bài viết
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
