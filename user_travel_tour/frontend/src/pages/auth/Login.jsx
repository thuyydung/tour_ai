import { Button } from "../../components/common/Button";
import { Mail, Lock, Chrome } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex">
      
      {/* Bên trái: Form đăng nhập */}
      <div className="flex-1 flex flex-col justify-center px-12 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              T
            </div>

            <span className="text-2xl font-bold">TravelAI</span>
          </div>

          {/* Tiêu đề */}
          <h2 className="text-4xl font-black mb-2">
            Chào mừng quay trở lại
          </h2>

          <p className="text-gray-500 mb-10">
            Bắt đầu chuyến phiêu lưu tiếp theo cùng AI.
          </p>

          {/* Form */}
          <form className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Địa chỉ email
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="ten@congty.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2">
                Mật khẩu
              </label>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Button */}
            <Button className="w-full py-4 text-lg shadow-xl shadow-blue-100">
              Đăng nhập
            </Button>
          </form>

          {/* Login khác */}
          <div className="mt-8">
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-100"></div>

              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                Hoặc tiếp tục với
              </span>

              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <button className="w-full py-4 border border-gray-100 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-gray-50 transition-all">
              <Chrome size={20} />
              Google
            </button>
          </div>
        </div>
      </div>

      {/* Bên phải: Ảnh */}
      <div className="hidden lg:block flex-1 bg-blue-600 m-4 rounded-[40px] relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206')] bg-cover bg-center opacity-60"></div>

        <div className="absolute bottom-20 left-20 text-white max-w-md">
          
          <h3 className="text-4xl font-bold mb-4">
            "AI đã gợi ý cho tôi một bãi biển bí mật ở Việt Nam và điều đó đã thay đổi cuộc đời tôi."
          </h3>

          <p className="text-blue-100">
            — Sarah J., Blogger du lịch
          </p>
        </div>
      </div>
    </div>
  );
}