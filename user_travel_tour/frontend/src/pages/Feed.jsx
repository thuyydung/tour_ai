import React from "react";
import {
  Image,
  Send,
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  TrendingUp,
} from "lucide-react";

const Feed = () => {
  // DATA VIỆT NAM
  const posts = [
    {
      id: 1,
      user: "Nguyễn Minh",
      avatar: "https://i.pravatar.cc/150?u=minh",
      time: "2 giờ trước",
      content:
        "Hoàng hôn ở Hội An thật sự quá đẹp 🌅 Đèn lồng và dòng sông tạo nên khung cảnh cực kỳ yên bình.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",
      likes: 542,
      comments: 64,
      shares: 28,
    },

    {
      id: 2,
      user: "Trần Khánh",
      avatar: "https://i.pravatar.cc/150?u=khanh",
      time: "5 giờ trước",
      content:
        "Lần đầu đi cáp treo Bà Nà Hills và cảm giác như đang ở châu Âu vậy 😍",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      likes: 821,
      comments: 92,
      shares: 51,
    },

    {
      id: 3,
      user: "Lê Hoàng",
      avatar: "https://i.pravatar.cc/150?u=hoang",
      time: "1 ngày trước",
      content:
        "Vịnh Hạ Long nhìn từ du thuyền đúng là đỉnh luôn 🚢",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      likes: 1240,
      comments: 103,
      shares: 76,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-5 md:px-8 py-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-8">
          {/* CREATE POST */}
          <div className="bg-white p-7 rounded-[32px] shadow-sm border border-gray-100">
            <div className="flex gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-extrabold shadow-lg shadow-blue-100">
                U
              </div>

              <textarea
                placeholder="Chia sẻ chuyến đi của bạn..."
                className="flex-1 bg-gray-50 rounded-[24px] p-5 text-lg font-medium border border-transparent focus:border-blue-200 focus:ring-4 focus:ring-blue-50 outline-none resize-none h-28 transition-all"
              />
            </div>

            <div className="flex justify-between items-center pt-5 border-t border-gray-100">
              <button className="flex items-center gap-2 text-gray-500 font-bold hover:bg-gray-50 px-4 py-3 rounded-2xl transition-all">
                <Image size={22} className="text-blue-600" />
                Ảnh
              </button>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-[20px] font-extrabold text-lg flex items-center gap-3 shadow-xl shadow-blue-100 transition-all hover:scale-105">
                <Send size={20} />
                Đăng bài
              </button>
            </div>
          </div>

          {/* POSTS */}
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-[36px] shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* HEADER */}
                <div className="p-7 flex items-center gap-4">
                  <img
                    src={post.avatar}
                    className="w-14 h-14 rounded-full object-cover"
                    alt={post.user}
                  />

                  <div>
                    <h4 className="text-xl font-extrabold text-gray-900">
                      {post.user}
                    </h4>

                    <p className="text-gray-400 font-medium text-sm">
                      {post.time}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-7 pb-6">
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="h-[500px] overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt="Post"
                  />
                </div>

                {/* ACTIONS */}
                <div className="p-7 flex items-center gap-8 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-red-500 transition-colors">
                    <Heart
                      size={24}
                      className={
                        post.id === 2
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                    />
                    {post.likes}
                  </button>

                  <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors">
                    <MessageCircle size={24} />
                    {post.comments}
                  </button>

                  <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-green-600 transition-colors">
                    <Share2 size={24} />
                    {post.shares}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8 sticky top-28">
          {/* PROFILE */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-extrabold mx-auto mb-6 shadow-xl shadow-blue-100">
              U
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
              Hồ Sơ Của Bạn
            </h3>

            <p className="text-gray-400 font-medium mb-8">
              Người yêu du lịch ✈️
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-7">
              <div>
                <p className="text-2xl font-extrabold text-gray-900">
                  42
                </p>

                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Bài viết
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-gray-900">
                  1.2K
                </p>

                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Theo dõi
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-gray-900">
                  834
                </p>

                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Đang theo dõi
                </p>
              </div>
            </div>
          </div>

          {/* TRENDING */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
              <TrendingUp size={26} className="text-blue-600" />
              Địa Điểm Xu Hướng
            </h3>

            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Hạ Long",
                  posts: "1.247 bài viết",
                },
                {
                  name: "Hội An",
                  posts: "892 bài viết",
                },
                {
                  name: "Phú Quốc",
                  posts: "1.531 bài viết",
                },
                {
                  name: "Bà Nà Hills",
                  posts: "743 bài viết",
                },
                {
                  name: "Fansipan",
                  posts: "602 bài viết",
                },
              ].map((dest, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h5 className="font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dest.name}
                    </h5>

                    <p className="text-sm text-gray-400 font-medium">
                      {dest.posts}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;