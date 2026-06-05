import React from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Sun, 
  Moon, 
  Monitor,
  ChevronRight
} from 'lucide-react';

export default function FacultySettingsPage() {
  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Settings</h1>
        <p className="text-[13px] font-medium text-slate-500">Manage your account and application preferences.</p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Profile Information */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[16px] font-black text-[#0B1A3D] mb-1">Profile Information</h2>
                <p className="text-[13px] font-medium text-slate-500">View and update your personal information.</p>
              </div>
            </div>
            <button className="flex items-center justify-center bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-5 py-2 rounded-lg text-[13px] font-bold transition-colors">
              Edit Profile
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">Prof. Maria Dela Cruz</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">+63 912 345 6789</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">maria.delacruz@tclass.edu.ph</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Employee ID</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">EMP-2021-00123</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Department</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">Computer Studies Department</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Date Joined</p>
              <p className="text-[14px] font-bold text-[#0B1A3D]">August 16, 2021</p>
            </div>
          </div>
        </div>

        {/* Password & Security */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[16px] font-black text-[#0B1A3D] mb-1">Password & Security</h2>
                <p className="text-[13px] font-medium text-slate-500">Manage your password and keep your account secure.</p>
              </div>
            </div>
            <button className="flex items-center justify-center bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-5 py-2 rounded-lg text-[13px] font-bold transition-colors">
              Change Password
            </button>
          </div>
          
          <div className="mb-8">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Password</p>
            <p className="text-[16px] font-black text-[#0B1A3D] tracking-[0.2em] leading-none mt-1">••••••••••••••••</p>
          </div>
          
          <div className="border-t border-slate-100 pt-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 -mx-6 px-6 py-2 rounded-lg transition-colors">
            <div>
              <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">Two-Factor Authentication</h3>
              <p className="text-[13px] font-medium text-slate-500">Add an extra layer of security to your account.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-[13px] font-bold">Off</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[16px] font-black text-[#0B1A3D] mb-1">Notification Preferences</h2>
              <p className="text-[13px] font-medium text-slate-500">Choose what notifications you want to receive.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[13px] font-black text-[#0B1A3D] mb-1">Email Notifications</h3>
                <p className="text-[12px] font-medium text-slate-500">Receive important updates via email</p>
              </div>
              {/* Toggle Switch */}
              <button className="w-11 h-6 bg-blue-600 rounded-full relative flex items-center px-0.5 transition-colors shrink-0">
                <div className="w-5 h-5 bg-white rounded-full translate-x-5 transition-transform"></div>
              </button>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[13px] font-black text-[#0B1A3D] mb-1">Assignment Notifications</h3>
                <p className="text-[12px] font-medium text-slate-500">Get notified about new assignments and due dates</p>
              </div>
              <button className="w-11 h-6 bg-blue-600 rounded-full relative flex items-center px-0.5 transition-colors shrink-0">
                <div className="w-5 h-5 bg-white rounded-full translate-x-5 transition-transform"></div>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[13px] font-black text-[#0B1A3D] mb-1">Grade Notifications</h3>
                <p className="text-[12px] font-medium text-slate-500">Get notified when grades are posted</p>
              </div>
              <button className="w-11 h-6 bg-blue-600 rounded-full relative flex items-center px-0.5 transition-colors shrink-0">
                <div className="w-5 h-5 bg-white rounded-full translate-x-5 transition-transform"></div>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[13px] font-black text-[#0B1A3D] mb-1">Announcement Notifications</h3>
                <p className="text-[12px] font-medium text-slate-500">Receive notifications for class announcements</p>
              </div>
              <button className="w-11 h-6 bg-blue-600 rounded-full relative flex items-center px-0.5 transition-colors shrink-0">
                <div className="w-5 h-5 bg-white rounded-full translate-x-5 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[16px] font-black text-[#0B1A3D] mb-1">Appearance</h2>
              <p className="text-[13px] font-medium text-slate-500">Customize how the application looks for you.</p>
            </div>
          </div>
          
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Theme</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden p-1">
              <button className="flex items-center justify-center gap-2 bg-blue-50/50 border border-blue-200 text-blue-600 py-3 rounded-lg text-[13px] font-bold transition-colors">
                <Sun className="w-4 h-4" />
                Light
              </button>
              <button className="flex items-center justify-center gap-2 bg-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-50 py-3 rounded-lg text-[13px] font-bold transition-colors">
                <Moon className="w-4 h-4" />
                Dark
              </button>
              <button className="flex items-center justify-center gap-2 bg-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-50 py-3 rounded-lg text-[13px] font-bold transition-colors">
                <Monitor className="w-4 h-4" />
                System Default
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
