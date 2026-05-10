import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import Landing from "./pages/Landing";
import Detection from "./pages/Detection";
import Feed from "./pages/Feed";
import Hotel from "./pages/Booking/Hotel";
import TripPlanner from "./pages/TripPlanner";
import DestinationDetail from "./pages/DestinationDetail";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import Tours from "./pages/Booking/Tours";
import Restaurant from "./pages/Booking/Restaurant";
import Payment from "./pages/Booking/Payment";
import RestaurantDetail from "./pages/Booking/RestaurantDetail";
import TourDetail from "./pages/Booking/TourDetail";
import HotelDetail from "./pages/Booking/HotelDetail";

function App() {
  return (
    // 1. Đổi "flex" thành "flex flex-col" hoặc bỏ "flex" để Navbar nằm trên, main nằm dưới
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Navbar cố định ở trên cùng */}
      <Navbar />

      {/* 2. Quan trọng: pt-28 (padding top) để đẩy nội dung xuống dưới Navbar. 
        Nếu không có cái này, Header của các trang sẽ bị che mất.
      */}
      <main className="pt-28 flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ai-detection" element={<Detection />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/booking/hotels" element={<Hotel />} />
          <Route path="/booking/tours" element={<Tours />} />
          <Route
            path="/booking/restaurant/:id"
            element={<RestaurantDetail />}
          />
          <Route path="/booking/hotels/:id" element={<HotelDetail />} />
          <Route path="/booking/tours/:id" element={<TourDetail />} />
          <Route path="/booking/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking/restaurant" element={<Restaurant />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
