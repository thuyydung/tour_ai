import { Send, Smile } from 'lucide-react';

export const CommentBox = () => (
  <div className="relative mt-4">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-2 text-gray-400">
      <Smile size={20} className="cursor-pointer hover:text-blue-600" />
    </div>
    <input 
      type="text" 
      placeholder="Viết bình luận..." 
      className="w-full pl-12 pr-16 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
    />
    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:shadow-lg shadow-blue-200 transition-all">
      <Send size={18} />
    </button>
  </div>
);