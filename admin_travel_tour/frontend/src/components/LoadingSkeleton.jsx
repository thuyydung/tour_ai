import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      {/* Giả lập tiêu đề trang */}
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      
      {/* Giả lập bảng dữ liệu */}
      <div className="space-y-3">
        <div className="grid grid-cols-5 gap-4 border-b pb-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Tạo 5 dòng giả lập */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="grid grid-cols-5 gap-4 py-3">
            <div className="h-10 bg-gray-100 rounded-full w-10"></div>
            <div className="h-4 bg-gray-100 rounded mt-3"></div>
            <div className="h-4 bg-gray-100 rounded mt-3"></div>
            <div className="h-4 bg-gray-100 rounded mt-3"></div>
            <div className="h-4 bg-gray-100 rounded mt-3 w-1/2 justify-self-end"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dòng này cực kỳ quan trọng để sửa lỗi SyntaxError
export default LoadingSkeleton;