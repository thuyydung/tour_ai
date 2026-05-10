import { User, Lock, Bell, CreditCard, ChevronRight } from 'lucide-react';

const SettingRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between p-6 hover:bg-gray-50 cursor-pointer rounded-2xl">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-gray-100 rounded-lg"><Icon size={20} className="text-gray-600" /></div>
      <div>
        <p className="font-bold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{value}</p>
      </div>
    </div>
    <ChevronRight size={20} className="text-gray-300" />
  </div>
);

export default function Settings() {
  return (
    <div className="pl-64 p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-black mb-10">Settings</h2>
      
      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-50 bg-gray-50/50">
          <h3 className="font-bold uppercase text-xs tracking-widest text-gray-400">Account Settings</h3>
        </div>
        <SettingRow icon={User} label="Profile Information" value="Alex Wanderlust, alex@example.com" />
        <SettingRow icon={Lock} label="Password & Security" value="Last changed 3 months ago" />
        <SettingRow icon={Bell} label="Email Notifications" value="On" />
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 bg-gray-50/50">
          <h3 className="font-bold uppercase text-xs tracking-widest text-gray-400">Subscription</h3>
        </div>
        <SettingRow icon={CreditCard} label="Plan" value="TravelAI Pro - $19/mo" />
      </div>
    </div>
  );
}