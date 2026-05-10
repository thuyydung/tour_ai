import React from 'react';
import {
  MapPin,
  Calendar,
  DollarSign,
  Sparkles,
  Clock,
} from 'lucide-react';

const TripPlanner = () => {
  const itinerary = [
    {
      day: 1,
      title: 'Khám phá Hội An cổ kính',
      events: [
        {
          time: '08:00',
          location: 'Hội An',
          activity: 'Nhận phòng khách sạn',
        },
        {
          time: '10:00',
          location: 'Chùa Cầu',
          activity: 'Tham quan Chùa Cầu nổi tiếng',
        },
        {
          time: '14:00',
          location: 'Phố cổ Hội An',
          activity: 'Khám phá phố cổ và chụp ảnh',
        },
        {
          time: '18:30',
          location: 'Sông Hoài',
          activity: 'Thả đèn hoa đăng buổi tối',
        },
      ],
    },

    {
      day: 2,
      title: 'Ẩm thực & biển Đà Nẵng',
      events: [
        {
          time: '07:00',
          location: 'Đà Nẵng',
          activity: 'Ăn sáng với mì Quảng',
        },
        {
          time: '10:00',
          location: 'Bà Nà Hills',
          activity: 'Tham quan Cầu Vàng',
        },
        {
          time: '15:00',
          location: 'Biển Mỹ Khê',
          activity: 'Tắm biển và nghỉ ngơi',
        },
        {
          time: '19:00',
          location: 'Sơn Trà',
          activity: 'Ăn hải sản địa phương',
        },
      ],
    },

    {
      day: 3,
      title: 'Trải nghiệm thiên nhiên',
      events: [
        {
          time: '06:00',
          location: 'Ngũ Hành Sơn',
          activity: 'Leo núi và ngắm bình minh',
        },
        {
          time: '11:00',
          location: 'Chợ Hàn',
          activity: 'Mua quà lưu niệm',
        },
        {
          time: '14:00',
          location: 'Đà Nẵng',
          activity: 'Thưởng thức cà phê ven biển',
        },
        {
          time: '18:00',
          location: 'Sân bay Đà Nẵng',
          activity: 'Kết thúc chuyến đi',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10 font-sans">
      {/* HEADER */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-black mb-5">
          <Sparkles size={16} />
          AI Lên Kế Hoạch Du Lịch
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-5">
          Lên Kế Hoạch Chuyến Đi
        </h1>

        <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
          AI sẽ tự động tạo lịch trình phù hợp với địa điểm,
          ngân sách và sở thích của bạn.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[420px,1fr] gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="sticky top-24 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col gap-8">

          <h2 className="text-3xl font-black tracking-tight text-gray-900">
            Thông Tin Chuyến Đi
          </h2>

          <div className="space-y-6">

            {/* DESTINATION */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-400 font-black text-sm uppercase tracking-wider">
                <MapPin size={16} className="text-blue-600" />
                Điểm đến
              </label>

              <input
                type="text"
                defaultValue="Hội An - Đà Nẵng"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-lg font-bold outline-none focus:border-blue-300"
              />
            </div>

            {/* DAYS */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-400 font-black text-sm uppercase tracking-wider">
                <Calendar size={16} className="text-blue-600" />
                Số ngày
              </label>

              <input
                type="number"
                defaultValue="3"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-lg font-bold outline-none focus:border-blue-300"
              />
            </div>

            {/* BUDGET */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-400 font-black text-sm uppercase tracking-wider">
                <DollarSign size={16} className="text-blue-600" />
                Ngân sách
              </label>

              <input
                type="number"
                defaultValue="5000000"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-lg font-bold outline-none focus:border-blue-300"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 pt-2">

            <button className="bg-blue-600 text-white py-5 rounded-2xl text-lg font-black shadow-lg shadow-blue-100 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Tạo Lịch Trình AI
            </button>

            <button className="bg-white text-blue-600 border-2 border-blue-600 py-5 rounded-2xl text-lg font-black hover:bg-blue-50 transition-all">
              Lưu Chuyến Đi
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8 pb-20">

          {itinerary.map((dayData) => (
            <div
              key={dayData.day}
              className="bg-white rounded-[36px] shadow-sm border border-gray-100 overflow-hidden"
            >

              {/* DAY HEADER */}
              <div className="bg-blue-600 p-6 flex items-center gap-5">

                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white text-xl font-black border-2 border-white/30">
                  {dayData.day}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Ngày {dayData.day}
                  </h3>

                  <p className="text-white/80 font-semibold text-sm">
                    {dayData.title}
                  </p>
                </div>
              </div>

              {/* EVENTS */}
              <div className="p-10 space-y-10 relative">

                <div className="absolute left-[56px] top-12 bottom-12 w-0.5 bg-blue-100"></div>

                {dayData.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-6 relative z-10"
                  >

                    {/* DOT */}
                    <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white ring-4 ring-blue-50 mt-1.5"></div>

                    {/* TIME */}
                    <div className="flex flex-col min-w-[140px]">
                      <div className="flex items-center gap-2 text-blue-600 font-black text-lg">
                        <Clock size={18} />
                        {event.time}
                      </div>

                      <div className="text-gray-400 font-bold text-sm mt-1">
                        {event.location}
                      </div>
                    </div>

                    {/* ACTIVITY */}
                    <div className="flex-1 text-xl font-black text-gray-900 tracking-tight">
                      {event.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* SUMMARY */}
          <div className="bg-blue-50 p-10 rounded-[36px] border border-blue-100">

            <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
              Tổng Quan Chuyến Đi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <p className="text-gray-400 font-black text-xs uppercase mb-2 tracking-widest">
                  Thời Gian
                </p>

                <p className="text-3xl font-black text-blue-600">
                  3 Ngày
                </p>
              </div>

              <div>
                <p className="text-gray-400 font-black text-xs uppercase mb-2 tracking-widest">
                  Ngân Sách
                </p>

                <p className="text-3xl font-black text-blue-600">
                  5 Triệu
                </p>
              </div>

              <div>
                <p className="text-gray-400 font-black text-xs uppercase mb-2 tracking-widest">
                  Hoạt Động
                </p>

                <p className="text-3xl font-black text-blue-600">
                  12
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TripPlanner;