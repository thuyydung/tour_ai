import api from './api';

const postService = {
  // Lấy danh sách tất cả bài viết từ cộng đồng
  getAllPosts: () => api.get('/posts'),

  // Lấy chi tiết một bài viết cụ thể
  getPostById: (id) => api.get(`/posts/${id}`),

  // Tạo bài viết mới (nếu admin cần đăng thông báo/tin tức)
  createPost: (data) => api.post('/posts', data),

  // Cập nhật nội dung bài viết
  updatePost: (id, data) => api.put(`/posts/${id}`, data),

  // Xóa bài viết (Chức năng quan trọng của Admin để gỡ bỏ nội dung vi phạm)
  deletePost: (id) => api.delete(`/posts/${id}`),

  // Quản lý bình luận trong bài viết
  getComments: (postId) => api.get(`/posts/${postId}/comments`),

  // Xóa bình luận không phù hợp
  deleteComment: (commentId) => api.delete(`/comments/${commentId}`)
};

// QUAN TRỌNG: Dòng này sửa lỗi SyntaxError của bạn
export default postService;