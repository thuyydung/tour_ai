import React from 'react';
import StatusBadge from '../StatusBadge';

const BookingTable = ({ data, onUpdateStatus }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dịch vụ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                #{booking.id.slice(-6).toUpperCase()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{booking.userName}</div>
                <div className="text-xs text-gray-500">{booking.userEmail}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-medium">{booking.serviceName}</div>
                <div className="text-xs text-gray-400 capitalize">{booking.type}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(booking.totalPrice)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={booking.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <select 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 mr-2"
                  value={booking.status}
                  onChange={(e) => onUpdateStatus(booking.id, e.target.value)}
                >
                  <option value="pending">Chờ duyệt</option>
                  <option value="confirmed">Xác nhận</option>
                  <option value="cancelled">Hủy đơn</option>
                </select>
                <button className="text-gray-400 hover:text-gray-600">
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          Chưa có giao dịch đặt chỗ nào.
        </div>
      )}
    </div>
  );
};

export default BookingTable;