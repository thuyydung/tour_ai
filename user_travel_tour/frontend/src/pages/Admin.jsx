import {
  Users,
  BarChart3,
  ShieldAlert,
  Database,
} from "lucide-react";

const StatCard = ({ label, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
        <Icon size={24} />
      </div>

      <span className="text-green-500 text-sm font-semibold">
        {trend}
      </span>
    </div>

    <p className="text-gray-500 font-medium text-sm">
      {label}
    </p>

    <h4 className="text-3xl font-bold mt-1 text-gray-900">
      {value}
    </h4>
  </div>
);

export default function Admin() {
  return (
    <div className="pl-64 p-10 min-h-screen bg-[#F9FAFB] font-sans">
      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Bảng Điều Khiển Quản Trị
        </h2>

        <p className="text-gray-500 font-medium">
          Theo dõi dữ liệu hệ thống và hoạt động AI
        </p>
      </div>

      {/* THỐNG KÊ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          label="Tổng Người Dùng"
          value="12,842"
          icon={Users}
          trend="+12%"
        />

        <StatCard
          label="Lượt Quét AI"
          value="45,200"
          icon={Database}
          trend="+24%"
        />

        <StatCard
          label="Doanh Thu"
          value="$84,200"
          icon={BarChart3}
          trend="+8%"
        />

        <StatCard
          label="Báo Cáo"
          value="12"
          icon={ShieldAlert}
          trend="-2%"
        />
      </div>

      {/* BẢNG DỮ LIỆU */}
      <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
        <h3 className="font-bold text-2xl mb-6 text-gray-900">
          Lịch Sử Truy Vấn AI
        </h3>

        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b border-gray-100">
              <th className="pb-4 font-semibold uppercase tracking-wide">
                Người dùng
              </th>

              <th className="pb-4 font-semibold uppercase tracking-wide">
                Hình ảnh
              </th>

              <th className="pb-4 font-semibold uppercase tracking-wide">
                Kết quả AI
              </th>

              <th className="pb-4 font-semibold uppercase tracking-wide">
                Trạng thái
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {[1, 2, 3].map((i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-6 font-semibold text-gray-900">
                  Người dùng #{i}42
                </td>

                <td className="py-6">
                  <div className="w-14 h-10 bg-gray-100 rounded-xl" />
                </td>

                <td className="py-6 font-medium text-gray-600">
                  Vịnh Hạ Long, Việt Nam
                </td>

                <td className="py-6">
                  <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-semibold text-center">
                    Thành công
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}