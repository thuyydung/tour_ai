import api from './api';

const authService = {
  // Đăng nhập admin
  login: async (credentials) => {
    // credentials thường là { email, password }
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('admin_token', response.data.token);
    }
    return response.data;
  },

  // Đăng xuất
  logout: () => {
    localStorage.removeItem('admin_token');
    window.location.href = '/login'; // Chuyển hướng về trang login
  },

  // Lấy thông tin admin hiện tại (dùng cho AuthContext)
  getCurrentUser: async () => {
    const token = localStorage.getItem('admin_token');
    if (!token) return null;
    
    try {
      const response = await api.get('/auth/me');
      return response.data; // Trả về thông tin user như name, role...
    } catch (error) {
      localStorage.removeItem('admin_token');
      return null;
    }
  }
};

// QUAN TRỌNG: Dòng này sửa lỗi SyntaxError của bạn
export default authService;