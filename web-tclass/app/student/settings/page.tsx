import React from 'react';
import { 
  User,
  Lock,
  Bell,
  Shield,
  Palette,
  Globe,
  MonitorSmartphone,
  HelpCircle,
  Edit3,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Book,
  Award,
  ShieldCheck,
  Megaphone,
  ClipboardList,
  Star,
  Clock,
  Settings as SettingsIcon,
  Monitor,
  LogOut,
  Eye,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function SettingsPage() {
  const navItems = [
    { id: 'account', title: 'Account Settings', desc: 'Personal information', icon: User, active: true },
    { id: 'security', title: 'Password & Security', desc: 'Update password', icon: Lock, active: false },
    { id: 'notifications', title: 'Notifications', desc: 'Notification preferences', icon: Bell, active: false },
    { id: 'privacy', title: 'Privacy', desc: 'Privacy settings', icon: Shield, active: false },
    { id: 'appearance', title: 'Appearance', desc: 'Theme and display', icon: Palette, active: false },
    { id: 'language', title: 'Language', desc: 'Choose language', icon: Globe, active: false },
    { id: 'devices', title: 'Connected Devices', desc: 'Active sessions', icon: MonitorSmartphone, active: false },
    { id: 'support', title: 'Help & Support', desc: 'Contact support', icon: HelpCircle, active: false },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1280px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-8 border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Settings</h1>
          <p className="text-[14px] font-medium text-slate-500">Manage your account preferences and application settings.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm">
          <Edit3 className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Settings Navigation Sidebar */}
        <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-1.5">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              className={`flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                item.active 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : 'bg-transparent hover:bg-slate-100 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.active ? 'bg-white/20' : 'bg-white border border-slate-200'}`}>
                  <item.icon className={`w-4 h-4 ${item.active ? 'text-white' : 'text-slate-500'}`} />
                </div>
                <div>
                  <p className={`text-[13px] font-bold leading-tight mb-0.5 ${item.active ? 'text-white' : 'text-slate-800'}`}>
                    {item.title}
                  </p>
                  <p className={`text-[11px] font-medium leading-tight ${item.active ? 'text-blue-100' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
              {item.active && <ChevronRight className="w-4 h-4 text-white/70" />}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8 w-full min-w-0">
          
          {/* Account Settings */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="mb-6 pb-6 border-b border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[18px] font-black text-[#0B1A3D]">Account Information</h2>
                <p className="text-[13px] font-medium text-slate-500">Your personal details and academic status.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
                <p className="text-[14px] font-bold text-slate-800">Shekainah Ashley Guevarra</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-[14px] font-bold text-slate-800 break-all">shekainah.guevarra@tsu.edu.ph</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Student ID</p>
                <p className="text-[14px] font-bold text-slate-800">2023200331</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                <p className="text-[14px] font-bold text-slate-800">+63 912 345 6789</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Program</p>
                <p className="text-[14px] font-bold text-slate-800">Bachelor of Technical Vocational Teacher Education</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Year & Semester</p>
                <p className="text-[14px] font-bold text-slate-800">2nd Year, 2nd Semester</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Academic Status</p>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-black uppercase px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Good Standing
                </span>
              </div>
            </div>
          </section>

          {/* Security & Password Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Change Password */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-[16px] font-black text-[#0B1A3D]">Change Password</h2>
                  <p className="text-[12px] font-medium text-slate-500">Keep your account secure.</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <input 
                    type="password" 
                    placeholder="Current password" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white text-[13px] font-medium transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    placeholder="New password" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white text-[13px] font-medium transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    placeholder="Confirm new password" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white text-[13px] font-medium transition-all"
                  />
                </div>
              </div>
              <button className="w-full mt-6 bg-[#0B1A3D] hover:bg-slate-800 text-white font-bold text-[13px] py-3 rounded-xl transition-colors">
                Update Password
              </button>
            </section>

            {/* Two-Factor Authentication */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-[16px] font-black text-[#0B1A3D]">Two-Factor Auth</h2>
                  <p className="text-[12px] font-medium text-slate-500">Extra layer of security.</p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[12px] font-black text-emerald-800">Status</p>
                    <p className="text-[11px] font-medium text-emerald-600">Currently protected</p>
                  </div>
                  <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">Enabled</span>
                </div>
                
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Registered Email</p>
                  <p className="text-[13px] font-bold text-slate-800 break-all">shekainah.guevarra@tsu.edu.ph</p>
                </div>
                
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Last Updated</p>
                  <p className="text-[13px] font-bold text-slate-800">May 20, 2024 10:15 AM</p>
                </div>
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-[13px] py-2.5 rounded-xl transition-colors">
                <SettingsIcon className="w-4 h-4" />
                Manage 2FA
              </button>
            </section>
          </div>

          {/* Notification Preferences */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-[16px] font-black text-[#0B1A3D]">Notification Preferences</h2>
                <p className="text-[12px] font-medium text-slate-500">Choose how and when you want to be notified.</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 pr-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Category</th>
                    <th className="pb-4 px-2 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20">Email</th>
                    <th className="pb-4 px-2 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20">SMS</th>
                    <th className="pb-4 px-2 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider w-20">Push</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <NotificationRow 
                    icon={Megaphone} iconColor="text-purple-600" bgColor="bg-purple-50"
                    title="Announcements" desc="Updates from instructors and the school."
                    email={true} sms={false} push={true}
                  />
                  <NotificationRow 
                    icon={ClipboardList} iconColor="text-pink-600" bgColor="bg-pink-50"
                    title="Assignments" desc="New assignments and approaching due dates."
                    email={true} sms={true} push={true}
                  />
                  <NotificationRow 
                    icon={Star} iconColor="text-amber-500" bgColor="bg-amber-50"
                    title="Grades & Results" desc="Updates about your academic results."
                    email={true} sms={false} push={true}
                  />
                  <NotificationRow 
                    icon={Clock} iconColor="text-teal-600" bgColor="bg-teal-50"
                    title="Schedule Changes" desc="Class schedule changes or cancellations."
                    email={true} sms={true} push={true}
                  />
                </tbody>
              </table>
            </div>
          </section>

          {/* Sessions */}
          <section className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <h4 className="text-[15px] font-black text-[#0B1A3D]">Windows • Chrome</h4>
                  <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">Current Session</span>
                </div>
                <p className="text-[12px] font-medium text-slate-600">Tarlac City, Philippines <span className="mx-2">•</span> May 20, 2024 10:15 AM</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 text-[12px] font-bold text-rose-600 bg-white border border-rose-100 hover:border-rose-200 shadow-sm px-5 py-2.5 rounded-xl transition-colors shrink-0">
              <LogOut className="w-4 h-4" />
              Log out other sessions
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}

// Helper component for Notification Rows
function NotificationRow({ icon: Icon, iconColor, bgColor, title, desc, email, sms, push }: any) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="py-4 pr-4">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${bgColor} ${iconColor}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[13px] font-black text-slate-800 mb-0.5">{title}</p>
            <p className="text-[11px] font-medium text-slate-500">{desc}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-2 text-center"><ToggleSwitch checked={email} /></td>
      <td className="py-4 px-2 text-center"><ToggleSwitch checked={sms} /></td>
      <td className="py-4 px-2 text-center"><ToggleSwitch checked={push} /></td>
    </tr>
  );
}

const ToggleSwitch = ({ checked }: { checked: boolean }) => (
  <button 
    className={`w-10 h-5 rounded-full relative transition-all shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${checked ? 'bg-blue-600' : 'bg-slate-200 hover:bg-slate-300'}`}
    aria-pressed={checked}
  >
    <span 
      className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-all shadow-sm ${checked ? 'translate-x-5' : 'translate-x-0'}`} 
    />
  </button>
);
