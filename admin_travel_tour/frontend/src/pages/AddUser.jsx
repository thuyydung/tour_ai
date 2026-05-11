import React, { useState } from "react";
import { ArrowLeft, Save, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
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

    alert("Thêm người dùng thành công!");

    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Thêm Người dùng
            </h1>

            <p className="text-gray-500 mt-1">
              Tạo tài khoản người dùng mới cho hệ thống
            </p>
          </div>

          <button
            onClick={() => navigate("/users")}
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
              <UserPlus size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Thông tin người dùng
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Điền đầy đủ thông tin bên dưới
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Họ và tên
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Số điện thoại
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mật khẩu
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nhập mật khẩu..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* STATUS */}
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
                onClick={() => navigate("/users")}
                className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold transition"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg shadow-blue-100 active:scale-95"
              >
                <Save size={18} />
                Lưu người dùng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;