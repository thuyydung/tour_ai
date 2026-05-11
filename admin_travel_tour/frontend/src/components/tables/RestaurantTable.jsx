import React from 'react';
import StatusBadge from '../StatusBadge';

const RestaurantTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên nhà hàng</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Loại hình</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Địa điểm</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{item.cuisineType || 'Ẩm thực'}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{item.address}</td>
              <td className="px-6 py-4">
                <StatusBadge status={item.status || 'active'} />
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-800 mr-3">Sửa</button>
                <button className="text-red-600 hover:text-red-800">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantTable;