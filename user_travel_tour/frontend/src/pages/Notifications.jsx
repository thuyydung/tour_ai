import {
  Heart,
  Calendar,
  MessageSquare,
} from "lucide-react";

const NotificationItem = ({
  icon: Icon,
  color,
  title,
  time,
  read,
}) => (
  <div
    className={`rounded-[28px] p-6 flex items-start gap-5 transition-all border ${
      read
        ? "bg-white border-gray-100 shadow-sm"
        : "bg-blue-50/60 border-blue-100 shadow-sm"
    }`}
  >
    {/* ICON */}
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${color}`}
    >
      <Icon size={22} className="text-white" />
    </div>

    {/* CONTENT */}
    <div className="flex-1 min-w-0">
      <h4
        className={`text-lg font-black tracking-tight leading-snug ${
          read ? "text-gray-900" : "text-blue-900"
        }`}
      >
        {title}
      </h4>

      <p className="text-sm font-bold text-gray-400 mt-2">
        {time}
      </p>
    </div>

    {/* STATUS */}
    {!read && (
      <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 shrink-0"></div>
    )}
  </div>
);

export default function Notifications() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 lg:px-10 py-10 font-sans">
      
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          
          <div>
            <p className="text-blue-600 font-black uppercase tracking-[0.25em] text-xs mb-3">
              Trung tâm thông báo
            </p>

            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
              Thông báo
            </h1>
          </div>

          <button className="bg-white border border-gray-100 px-6 py-3 rounded-2xl font-black text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            Đánh dấu đã đọc
          </button>
        </div>

        {/* LIST */}
        <div className="space-y-5">
          
          <NotificationItem
            icon={Heart}
            color="bg-pink-500"
            title="Elena thích lịch trình Bali Trip của bạn"
            time="2 phút trước"
            read={false}
          />

          <NotificationItem
            icon={Calendar}
            color="bg-blue-500"
            title="Nhắc nhở: Chuyến bay đến Tokyo sẽ khởi hành sau 24 giờ"
            time="5 giờ trước"
            read={false}
          />

          <NotificationItem
            icon={MessageSquare}
            color="bg-purple-500"
            title="Có bình luận mới trong bài viết AI Detection của bạn"
            time="1 ngày trước"
            read={true}
          />
        </div>
      </div>
    </div>
  );
}