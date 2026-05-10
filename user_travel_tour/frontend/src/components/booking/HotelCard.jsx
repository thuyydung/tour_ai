import React from "react";
import { Star, MapPin } from "lucide-react";

// Named Export
export const HotelCard = ({
  name,
  price,
  image,
  rating,
  location = "Vị trí chính",
}) => {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Ảnh khách sạn */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-xs font-black text-gray-900">
            {rating}
          </span>
        </div>
      </div>

      {/* Nội dung */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          <p className="text-gray-400 text-sm flex items-center gap-1 font-medium">
            <MapPin size={14} />
            {location}
          </p>
        </div>

        {/* Giá + nút */}
        <div className="mt-auto flex justify-between items-end pt-4 border-t border-gray-50">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Giá từ
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-blue-600">
                ${price}
              </span>

              <span className="text-xs text-gray-400 font-medium">
                / đêm
              </span>
            </div>
          </div>

          <button className="bg-blue-50 text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};