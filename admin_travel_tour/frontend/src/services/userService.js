import api from './api';

const userService = {
  // Lấy danh sách tất cả người dùng
  getAll: () => api.get('/users'),

  // Lấy chi tiết một người dùng
  getById: (id) => api.get(`/users/${id}`),

  // Cập nhật thông tin người dùng (ví dụ: đổi vai trò, khóa tài khoản)
  update: (id, data) => api.put(`/users/${id}`, data),

  // Xóa người dùng khỏi hệ thống
  delete: (id) => api.delete(`/users/${id}`),

  // Tìm kiếm người dùng theo tên hoặc email
  search: (query) => api.get(`/users/search?q=${query}`)
};

// QUAN TRỌNG: Dòng này sửa lỗi SyntaxError của bạn
export default userService;