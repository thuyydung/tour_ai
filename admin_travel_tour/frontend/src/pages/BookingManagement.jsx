import React from "react";
import { Search, Filter } from "lucide-react";

// Dữ liệu đặt chỗ
const bookings = [
  {
    id: "#000001",
    user: "Nguyễn Văn Minh",
    email: "minh@email.com",
    type: "hotel",
    service: "Khách sạn Grand Paris",
    date: "15/05/2026",
    amount: 250,
    status: "confirmed",
  },
  {
    id: "#000002",
    user: "Trần Thị Lan",
    email: "lan@email.com",
    type: "restaurant",
    service: "Nhà hàng Hanoi Garden",
    date: "20/04/2026",
    amount: 180,
    status: "pending",
  },
  {
    id: "#000003",
    user: "Lê Hoàng Nam",
    email: "nam@email.com",
    type: "destination",
    service: "Tour Fansipan",
    date: "01/06/2026",
    amount: 450,
    status: "confirmed",
  },
  {
    id: "#000004",
    user: "Phạm Quốc Bảo",
    email: "bao@email.com",
    type: "hotel",
    service: "Tokyo Bay Resort",
    date: "18/04/2026",
    amount: 0,
    status: "cancelled",
  },
  {
    id: "#000005",
    user: "Ngọc Anh",
    email: "ngocanh@email.com",
    type: "restaurant",
    service: "Nhà hàng Sunset BBQ",
    date: "10/04/2026",
    amount: 320,
    status: "completed",
  },
];

const BookingManagement = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <div className="mb-6">
        
        <h1 className="text-3xl font-bold text-slate-900">
          Quản lý Đặt chỗ
        </h1>

        <p className="text-gray-500 mt-1">
          Quản lý khách sạn, nhà hàng và tour đã được đặt
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        {/* SEARCH */}
        <div className="relative flex-1">
          
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Tìm kiếm đơn đặt chỗ..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        {/* FILTER */}
        <div className="flex gap-3">
          
          <div className="relative">
            
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />

            <select className="pl-9 pr-8 py-2.5 bg-white border border-gray-300 rounded-xl text-sm outline-none">
              <option>Tất cả loại</option>
              <option>Khách sạn</option>
              <option>Nhà hàng</option>
              <option>Điểm đến</option>
            </select>
          </div>

          <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm outline-none">
            <option>Tất cả trạng thái</option>
            <option>Chờ xác nhận</option>
            <option>Đã xác nhận</option>
            <option>Hoàn thành</option>
            <option>Đã hủy</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        <div className="overflow-x-auto">
          
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <th className="px-6 py-4">Mã đơn</th>
                <th className="px-6 py-4">Người dùng</th>
                <th className="px-6 py-4">Loại dịch vụ</th>
                <th className="px-6 py-4">Tên dịch vụ</th>
                <th className="px-6 py-4">Ngày</th>
                <th className="px-6 py-4">Số tiền</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {bookings.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition"
                >
                  
                  {/* ID */}
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {item.id}
                  </td>

                  {/* USER */}
                  <td className="px-6 py-4">
                    
                    <div className="font-semibold text-slate-900">
                      {item.user}
                    </div>

                    <div className="text-sm text-gray-400">
                      {item.email}
                    </div>
                  </td>

                  {/* TYPE */}
                  <td className="px-6 py-4">
                    <div className="w-[140px]">
                      
                      <span
                        className={`w-full inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium border ${
                          item.type === "hotel"
                            ? "bg-blue-50 text-blue-600 border-blue-100"
                            : item.type === "restaurant"
                            ? "bg-purple-50 text-purple-600 border-purple-100"
                            : "bg-green-50 text-green-600 border-green-100"
                        }`}
                      >
                        {item.type === "hotel"
                          ? "Khách sạn"
                          : item.type === "restaurant"
                          ? "Nhà hàng"
                          : "Điểm đến"}
                      </span>
                    </div>
                  </td>

                  {/* SERVICE */}
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {item.service}
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-4 text-gray-500">
                    {item.date}
                  </td>

                  {/* AMOUNT */}
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    ${item.amount}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4">
                    <div className="w-[140px]">
                      
                      <span
                        className={`w-full inline-flex justify-center px-3 py-1 rounded-full text-xs font-medium border ${
                          item.status === "confirmed"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : item.status === "pending"
                            ? "bg-orange-50 text-orange-500 border-orange-100"
                            : item.status === "completed"
                            ? "bg-slate-100 text-slate-600 border-slate-200"
                            : "bg-red-50 text-red-500 border-red-100"
                        }`}
                      >
                        {item.status === "confirmed"
                          ? "Đã xác nhận"
                          : item.status === "pending"
                          ? "Chờ xác nhận"
                          : item.status === "completed"
                          ? "Hoàn thành"
                          : "Đã hủy"}
                      </span>
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    
                    <div className="flex justify-end gap-2">
                      
                      {item.status === "pending" && (
                        <>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
                            Xác nhận
                          </button>

                          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
                            Hủy
                          </button>
                        </>
                      )}

                      {item.status === "confirmed" && (
                        <button className="bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium transition">
                          Hoàn thành
                        </button>
                      )}
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
          
          <span className="text-gray-500 text-sm">
            Hiển thị 5 / 5 đơn đặt chỗ
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

export default BookingManagement;