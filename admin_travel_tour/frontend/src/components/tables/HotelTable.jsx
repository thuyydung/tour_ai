import React from 'react';
import StatusBadge from '../StatusBadge';

const HotelTable = ({ data, onRefresh }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Khách sạn</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Địa chỉ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Giá/Đêm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((hotel) => (
            <tr key={hotel.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{hotel.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{hotel.address}</td>
              <td className="px-6 py-4 text-sm font-bold text-blue-600">{hotel.price?.toLocaleString()}đ</td>
              <td className="px-6 py-4">
                <StatusBadge status={hotel.status || 'active'} />
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Sửa</button>
                <button className="text-red-600 hover:text-red-900">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelTable;