import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  CreditCard,
  Wallet,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { items, total } = location.state || {
    items: [],
    total: 0,
  };

  const [method, setMethod] = useState("card");
  const [isPaid, setIsPaid] = useState(false);

  // Thanh toán
  const handlePayNow = () => {
    setTimeout(() => setIsPaid(true), 1500);
  };

  // Màn hình thành công
  if (isPaid) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        
        <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle2 className="text-green-500" size={48} />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Thanh toán thành công!
        </h1>

        <p className="text-gray-500 font-medium mb-10 max-w-sm leading-relaxed">
          Đơn đặt của bạn đã được xác nhận. 
          Vui lòng kiểm tra email để xem hóa đơn chi tiết.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all"
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20 font-sans">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
        
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-medium text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft size={20} />
            Quay lại
          </button>

          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Thanh toán bảo mật
          </h1>

          <div className="w-10"></div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Payment Method */}
          <section>
            <h2 className="text-2xl font-bold mb-6 tracking-tight text-gray-900">
              Phương thức thanh toán
            </h2>

            <div className="grid grid-cols-1 gap-4">
              
              {/* Card */}
              <div
                onClick={() => setMethod("card")}
                className={`p-6 rounded-[32px] border-2 cursor-pointer transition-all flex items-center gap-4 ${
                  method === "card"
                    ? "border-blue-600 bg-blue-50/30"
                    : "border-white bg-white shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    method === "card"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <CreditCard size={24} />
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    Thẻ tín dụng / ghi nợ
                  </p>

                  <p className="text-sm font-medium text-gray-400">
                    Visa, Mastercard, American Express
                  </p>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    method === "card"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                >
                  {method === "card" && (
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  )}
                </div>
              </div>

              {/* Wallet */}
              <div
                onClick={() => setMethod("wallet")}
                className={`p-6 rounded-[32px] border-2 cursor-pointer transition-all flex items-center gap-4 ${
                  method === "wallet"
                    ? "border-blue-600 bg-blue-50/30"
                    : "border-white bg-white shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    method === "wallet"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <Wallet size={24} />
                </div>

                <div className="flex-1">
                  <p className="font-black text-gray-900">
                    Ví điện tử
                  </p>

                  <p className="text-xs font-bold text-gray-400">
                    Apple Pay, Google Pay, PayPal
                  </p>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    method === "wallet"
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
                >
                  {method === "wallet" && (
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Card Form */}
          {method === "card" && (
            <div className="bg-white rounded-[40px] p-8 shadow-sm space-y-4 animate-in fade-in slide-in-from-top-4">
              
              {/* Card Number */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-400 ml-2">
                  Số thẻ
                </label>

                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 ring-blue-100"
                />
              </div>

              {/* Date + CVV */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                    Ngày hết hạn
                  </label>

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 ring-blue-100"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                    Mã CVV
                  </label>

                  <input
                    type="text"
                    placeholder="123"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 ring-blue-100"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          
          <div className="bg-white rounded-[45px] p-10 shadow-xl border border-gray-50 sticky top-32">
            
            <h3 className="text-2xl font-bold mb-6 tracking-tight text-gray-900">
              Tóm tắt đơn hàng
            </h3>

            {/* Items */}
            <div className="space-y-4 mb-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="font-medium text-gray-500">
                    {item.name}
                  </span>

                  <span className="font-semibold text-gray-900">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="pt-6 border-t-2 border-dashed border-gray-100 space-y-4">
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold">
                  Tạm tính
                </span>

                <span className="font-black text-gray-900">
                  ${total}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold">
                  Phí dịch vụ
                </span>

                <span className="font-black text-gray-900">
                  $2.00
                </span>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="text-xl font-bold text-gray-900">
                  Tổng thanh toán
                </span>

                <span className="text-3xl font-bold text-blue-600">
                  ${total + 2}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handlePayNow}
              className="w-full bg-blue-600 text-white py-6 rounded-[28px] font-[1000] text-xl mt-10 hover:bg-gray-900 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
            >
              Thanh toán ngay
              <ShieldCheck size={24} />
            </button>

            <p className="text-center text-xs font-medium uppercase tracking-wide text-gray-400 mt-6">
              Kết nối SSL 256-bit được mã hóa bảo mật
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;