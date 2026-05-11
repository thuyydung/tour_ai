import React from "react";
import {
  Settings as SettingsIcon,
  Globe,
  Mail,
  ShieldAlert,
  Bell,
  Lock,
  Save,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-blue-600" />
          Cài đặt hệ thống
        </h1>

        <p className="text-gray-500 mt-2">
          Quản lý thông tin hệ thống và cấu hình ứng dụng
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <form className="space-y-8">
            {/* Website Info */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-5">
                Thông tin website
              </h2>

              <div className="space-y-5">
                {/* Website Name */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Globe size={16} />
                    Tên trang web
                  </label>

                  <input
                    type="text"
                    defaultValue="Travel AI Admin"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Admin Email */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Mail size={16} />
                    Email quản trị
                  </label>

                  <input
                    type="email"
                    defaultValue="admin@travel.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="border-t pt-8">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Bell size={18} />
                Thông báo
              </h2>

              <div className="space-y-4">
                <label className="flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Thông báo email
                    </p>
                    <p className="text-sm text-gray-500">
                      Nhận email khi có hoạt động mới
                    </p>
                  </div>

                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>

                <label className="flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl border border-gray-100">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Thông báo hệ thống
                    </p>
                    <p className="text-sm text-gray-500">
                      Hiển thị thông báo trong dashboard
                    </p>
                  </div>

                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
              </div>
            </div>

            {/* Security */}
            <div className="border-t pt-8">
              <h2 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Lock size={18} />
                Bảo mật
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    Mật khẩu mới
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    Xác nhận mật khẩu
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
            >
              <Save size={18} />
              Lưu thay đổi
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Admin Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-4">
                A
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                Admin TravelAI
              </h3>

              <p className="text-sm text-gray-500">
                Quản trị viên hệ thống
              </p>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="text-red-500" size={20} />

              <h3 className="text-lg font-bold text-red-600">
                Vùng nguy hiểm
              </h3>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              Các thao tác bên dưới có thể ảnh hưởng đến toàn bộ hệ thống.
            </p>

            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-semibold py-3 rounded-xl transition">
              Bảo trì hệ thống
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;