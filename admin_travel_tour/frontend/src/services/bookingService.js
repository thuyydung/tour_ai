import api from './api';

const bookingService = {
  // Lấy tất cả các giao dịch đặt chỗ (Hotels, Tours, Restaurants)
  getAll: () => api.get('/bookings'),

  // Cập nhật trạng thái đơn hàng (Ví dụ: từ Chờ duyệt -> Xác nhận)
  updateStatus: (id, status) => api.patch(`/bookings/${id}`, { status }),

  // Lấy thống kê doanh thu cho Dashboard
  getStats: () => api.get('/bookings/stats'),

  // Xóa lịch sử đặt chỗ (nếu cần)
  delete: (id) => api.delete(`/bookings/${id}`)
};

export default bookingService;