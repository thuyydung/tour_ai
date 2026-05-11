import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, X, Plus, Search } from "lucide-react";

// Dữ liệu bài viết
const posts = [
  {
    id: 1,
    title: "Top 10 địa điểm bí mật tại Hà Nội",
    author: "Nguyễn Văn Minh",
    category: "Cẩm nang du lịch",
    status: "pending",
    date: "12/04/2026",
    views: 0,
  },
  {
    id: 2,
    title: "Hành trình khám phá ẩm thực Đà Nẵng",
    author: "Trần Thị Lan",
    category: "Ẩm thực",
    status: "approved",
    date: "10/04/2026",
    views: 1523,
  },
  {
    id: 3,
    title: "Khách sạn giá rẻ tốt nhất tại Sài Gòn",
    author: "Lê Hoàng Nam",
    category: "Khách sạn",
    status: "approved",
    date: "08/04/2026",
    views: 2341,
  },
  {
    id: 4,
    title: "Cẩm nang mua sắm Hội An 2026",
    author: "Phạm Quốc Bảo",
    category: "Mua sắm",
    status: "pending",
    date: "11/04/2026",
    views: 0,
  },
  {
    id: 5,
    title: "Những điểm đến lãng mạn tại Fansipan",
    author: "Ngọc Anh",
    category: "Cẩm nang du lịch",
    status: "approved",
    date: "05/04/2026",
    views: 3102,
  },
];

const PostManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Quản lý Bài viết
          </h1>

          <p className="text-gray-500 mt-1">
            Kiểm duyệt và quản lý nội dung do người dùng đăng tải
          </p>
        </div>

        <button
          onClick={() => navigate("/add-post")}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition font-medium"
        >
          <Plus size={18} className="mr-2" />
          Thêm bài viết
        </button>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* SEARCH */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <th className="px-6 py-4">Tiêu đề</th>
                <th className="px-6 py-4">Tác giả</th>
                <th className="px-6 py-4">Danh mục</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4">Ngày đăng</th>
                <th className="px-6 py-4 text-center">Lượt xem</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition">
                  {/* TITLE */}
                  <td className="px-6 py-4 max-w-xs">
                    <p className="font-semibold text-slate-800 truncate">
                      {post.title}
                    </p>
                  </td>

                  {/* AUTHOR */}
                  <td className="px-6 py-4 text-gray-500">{post.author}</td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4">
                    <div className="w-[140px]">
                      <span className="w-full inline-flex justify-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">
                        {post.category}
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <div className="w-[120px]">
                      <span
                        className={`w-full inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium border ${
                          post.status === "approved"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : "bg-orange-50 text-orange-500 border-orange-100"
                        }`}
                      >
                        {post.status === "approved" ? "Đã duyệt" : "Chờ duyệt"}
                      </span>
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-4 text-gray-500">{post.date}</td>

                  {/* VIEWS */}
                  <td className="px-6 py-4 text-center text-gray-500">
                    {post.views.toLocaleString("vi-VN")}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                      {post.status === "pending" && (
                        <>
                          <button className="text-green-500 hover:text-green-700 transition">
                            <Check size={18} />
                          </button>

                          <button className="text-red-400 hover:text-red-600 transition">
                            <X size={18} />
                          </button>
                        </>
                      )}

                      <button className="text-red-400 hover:text-red-600 transition">
                        <X size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
          <span className="text-gray-500 text-sm">Hiển thị 5 / 5 bài viết</span>

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

export default PostManagement;
