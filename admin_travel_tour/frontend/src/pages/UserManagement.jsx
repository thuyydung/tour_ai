import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Edit2, Ban, Plus, Search } from "lucide-react";

// Dữ liệu người dùng
const users = [
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    email: "minhnguyen@email.com",
    role: "Premium",
    status: "active",
    joinDate: "15/01/2024",
  },
  {
    id: 2,
    name: "Trần Thị Lan",
    email: "lantran@email.com",
    role: "Miễn phí",
    status: "active",
    joinDate: "20/02/2024",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    email: "namle@email.com",
    role: "Premium",
    status: "active",
    joinDate: "10/03/2024",
  },
  {
    id: 4,
    name: "Phạm Quốc Bảo",
    email: "baopham@email.com",
    role: "Doanh nghiệp",
    status: "inactive",
    joinDate: "05/12/2023",
  },
  {
    id: 5,
    name: "Ngọc Anh",
    email: "ngocanh@email.com",
    role: "Premium",
    status: "active",
    joinDate: "01/04/2024",
  },
];

const UserManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Quản lý Người dùng
          </h1>

          <p className="text-gray-500 mt-1">
            Theo dõi và quản lý tất cả người dùng trong hệ thống
          </p>
        </div>

        <button
          onClick={() => navigate("/add-user")}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition font-medium"
        >
          <Plus size={18} className="mr-2" />
          Thêm người dùng
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* SEARCH */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Tìm kiếm người dùng..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <th className="px-6 py-4">Người dùng</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Trạng thái</th>
              <th className="px-6 py-4">Ngày tham gia</th>
              <th className="px-6 py-4 text-right">Thao tác</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                {/* USER */}
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <span className="font-medium text-slate-900">
                      {user.name}
                    </span>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="px-6 py-4 text-gray-500">{user.email}</td>

                {/* STATUS */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {user.status === "active" ? "Hoạt động" : "Tạm khóa"}
                  </span>
                </td>

                {/* DATE */}
                <td className="px-6 py-4 text-gray-500">{user.joinDate}</td>

                {/* ACTIONS */}
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-3 text-gray-400">
                    <button className="hover:text-blue-600 transition">
                      <Eye size={18} />
                    </button>

                    <button className="hover:text-slate-900 transition">
                      <Edit2 size={18} />
                    </button>

                    <button className="hover:text-red-600 transition">
                      <Ban size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
          <span className="text-gray-500 text-sm">
            Hiển thị 5 / 5 người dùng
          </span>

          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 text-sm font-medium transition">
              Trang trước
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-xl bg-white hover:bg-gray-100 text-sm font-medium transition">
              Trang sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
