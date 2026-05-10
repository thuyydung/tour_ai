import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Camera, Compass, Map, Hotel, Utensils, User, LogOut } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Camera, label: 'AI Detect', path: '/ai-detection' },
    { icon: Compass, label: 'Feed', path: '/feed' },
    { icon: Map, label: 'Planner', path: '/planner' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-6 fixed left-0 top-0 z-[100]">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-100">T</div>
        <span className="text-2xl font-black tracking-tight text-gray-900">TravelAI</span>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-[20px] transition-all duration-300 font-bold ${
              isActive ? 'bg-blue-600 text-white shadow-xl shadow-blue-100 scale-[1.02]' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div className="pt-8 pb-3 px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Services</div>
        <NavLink to="/booking/hotels" className="flex items-center gap-4 px-4 py-3.5 rounded-[20px] text-gray-400 font-bold hover:bg-gray-50 transition-all">
          <Hotel size={22} /> Hotels
        </NavLink>
        <NavLink to="/booking/restaurant" className="flex items-center gap-4 px-4 py-3.5 rounded-[20px] text-gray-400 font-bold hover:bg-gray-50 transition-all">
          <Utensils size={22} /> Dining
        </NavLink>
      </nav>

      <div className="mt-auto border-t border-gray-50 pt-6">
        <NavLink to="/profile" className="flex items-center gap-4 px-4 py-3.5 rounded-[20px] text-gray-400 font-bold hover:bg-gray-50 transition-all">
          <User size={22} /> Profile
        </NavLink>
        <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-[20px] text-red-400 font-bold hover:bg-red-50 transition-all mt-2">
          <LogOut size={22} /> Logout
        </button>
      </div>
    </aside>
  );
};