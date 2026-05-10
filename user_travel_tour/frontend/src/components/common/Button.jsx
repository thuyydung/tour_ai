import React from 'react';

// Sử dụng Named Export để khớp với lệnh import { Button } trong các trang khác
export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  // Định nghĩa các kiểu nút bấm dựa trên biến thể (variant)
  const baseStyles = "px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50";
  
  const variants = {
    // Màu xanh chuẩn Figma #2563EB
    primary: "bg-[#2563EB] text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300",
    // Nút phụ màu trắng/xám
    secondary: "bg-white text-gray-700 border border-gray-100 hover:bg-gray-50 hover:border-gray-200",
    // Nút viền xanh
    outline: "bg-transparent border-2 border-[#2563EB] text-[#2563EB] hover:bg-blue-50",
    // Nút nguy hiểm (ví dụ: Logout/Delete)
    danger: "bg-red-50 text-red-600 hover:bg-red-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};