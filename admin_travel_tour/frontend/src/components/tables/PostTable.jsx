import React from 'react';

const PostTable = ({ data, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bài viết</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tác giả</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đăng</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tương tác</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {post.image && (
                    <img className="h-10 w-10 rounded object-cover mr-3" src={post.image} alt="post" />
                  )}
                  <div className="text-sm text-gray-900 line-clamp-1 w-48">
                    {post.content || post.title}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {post.authorName || 'User'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {post.createdAt ? new Date(post.createdAt).toLocaleDateString('vi-VN') : '---'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="flex items-center space-x-2">
                  <span>❤️ {post.likesCount || 0}</span>
                  <span>💬 {post.commentsCount || 0}</span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-4">Xem</button>
                <button 
                  onClick={() => onDelete(post.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          Chưa có bài viết nào được đăng tải.
        </div>
      )}
    </div>
  );
};

export default PostTable;