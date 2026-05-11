import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Context & Layout
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';

// Import các trang (Pages)
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import AddRestaurant from './pages/AddRestaurant';
import PostManagement from './pages/PostManagement';
import BookingManagement from './pages/BookingManagement';
import HotelManagement from './pages/HotelManagement';
import RestaurantManagement from './pages/RestaurantManagement';
import DestinationManagement from './pages/DestinationManagement';
import AddUser from './pages/AddUser';
import AddDestination from './pages/AddDestination';
import AddHotel from './pages/AddHotel';
import AddPost from './pages/AddPost';
import Settings from './pages/Settings';

function App() {
  return (
    // BƯỚC 1: Cung cấp dữ liệu đăng nhập cho toàn bộ App
    <AuthProvider>
      {/* BƯỚC 2: Cấu hình điều hướng */}
      <BrowserRouter>
        <Routes>
          {/* Layout chứa Sidebar và Navbar */}
          <Route path="/" element={<Layout />}>
            {/* Các trang con hiển thị bên trong Outlet của Layout */}
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="posts" element={<PostManagement />} />
            <Route path="restaurants/add" element={<AddRestaurant />} />
            <Route path="add-post" element={<AddPost />} />
            <Route path="bookings" element={<BookingManagement />} />
            <Route path="hotels" element={<HotelManagement />} />
            <Route path="add-hotel" element={<AddHotel />} />
            <Route path="restaurants" element={<RestaurantManagement />} />
            <Route path="destinations" element={<DestinationManagement />} />
            <Route path="destinations/add" element={<AddDestination />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Nếu vào link bậy bạ thì đẩy về trang chủ */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;