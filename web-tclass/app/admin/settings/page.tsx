import React from 'react';
import { 
  Settings, 
  Building2, 
  GraduationCap, 
  Users, 
  FileSpreadsheet, 
  Bell, 
  CreditCard, 
  ShieldCheck, 
  CloudDownload, 
  SlidersHorizontal,
  Save,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function AdminSettingsPage() {
  const sidebarNav = [
    { id: 'general', label: 'General Settings', desc: 'Configure basic system settings', icon: Settings, active: true },
    { id: 'institution', label: 'Institution Profile', desc: 'Manage institution information', icon: Building2, active: false },
    { id: 'academic', label: 'Academic Settings', desc: 'Configure academic preferences', icon: GraduationCap, active: false },
    { id: 'enrollment', label: 'Enrollment Settings', desc: 'Manage enrollment configurations', icon: Users, active: false },
    { id: 'grading', label: 'Grading Settings', desc: 'Configure grading system', icon: FileSpreadsheet, active: false },
    { id: 'notification', label: 'Notification Settings', desc: 'Manage system notifications', icon: Bell, active: false },
    { id: 'payment', label: 'Payment Settings', desc: 'Configure payment options', icon: CreditCard, active: false },
    { id: 'security', label: 'Security Settings', desc: 'Manage security preferences', icon: ShieldCheck, active: false },
    { id: 'backup', label: 'Backup & Restore', desc: 'Backup and restore system data', icon: CloudDownload, active: false },
    { id: 'preferences', label: 'System Preferences', desc: 'Customize system preferences', icon: SlidersHorizontal, active: false },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
          <ChevronRight className="w-3.5 h-3.5 mx-1" />
          <span className="text-blue-600">Settings</span>
        </div>
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Settings</h1>
        <p className="text-[13px] font-medium text-slate-500">Manage system preferences and configurations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Sidebar Navigation */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col gap-1.5">
          {sidebarNav.map((item) => (
            <div 
              key={item.id} 
              className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-colors ${item.active ? 'bg-blue-50' : 'hover:bg-slate-50/80'}`}
            >
              <div className={`mt-0.5 ${item.active ? 'text-blue-600' : 'text-slate-500'}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className={`text-[13px] font-bold ${item.active ? 'text-blue-700' : 'text-slate-700'} leading-none mb-1`}>{item.label}</p>
                <p className={`text-[11px] font-medium ${item.active ? 'text-blue-500/80' : 'text-slate-400'} leading-tight`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl flex flex-col w-full overflow-hidden">
          
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[18px] font-black text-[#0B1A3D] mb-1">General Settings</h2>
              <p className="text-[12px] font-medium text-slate-500">Configure basic system settings and preferences.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>

          <div className="p-6 flex flex-col gap-10">
            
            {/* System Information section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[14px] font-black text-[#0B1A3D] border-b border-slate-100 pb-2">System Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">System Name</label>
                  <input 
                    type="text" 
                    defaultValue="TCLASS - School Management System"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">Academic Year</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                      <option>2025 - 2026</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">System Language</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                      <option>English</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">System Email</label>
                  <input 
                    type="email" 
                    defaultValue="info@tclass.edu.ph"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">Contact Number</label>
                  <input 
                    type="text" 
                    defaultValue="(045) 123-4567"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">Address</label>
                  <input 
                    type="text" 
                    defaultValue="Brgy. San Sebastian, Tarlac City, Tarlac, Philippines 2300"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">System Timezone</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                      <option>(GMT +08:00) Asia/Manila</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">Date Format</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                      <option>May 16, 2026 (MMM DD, YYYY)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-slate-500">Time Format</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                      <option>12-Hour (AM/PM)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>

            {/* System Preferences section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[14px] font-black text-[#0B1A3D] border-b border-slate-100 pb-2">System Preferences</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Enable User Registration</p>
                    <p className="text-[11px] font-medium text-slate-500">Allow new users to register in the system</p>
                  </div>
                  {/* Custom Toggle ON */}
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Enable SMS Notifications</p>
                    <p className="text-[11px] font-medium text-slate-500">Send SMS notifications for alerts and updates</p>
                  </div>
                  {/* Custom Toggle OFF */}
                  <div className="w-10 h-5 bg-slate-300 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Enable Email Notifications</p>
                    <p className="text-[11px] font-medium text-slate-500">Send email notifications for important updates</p>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Enable Two-Factor Authentication</p>
                    <p className="text-[11px] font-medium text-slate-500">Require 2FA for administrator accounts</p>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Enable Audit Logs</p>
                    <p className="text-[11px] font-medium text-slate-500">Record user activities and system changes</p>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Allow Data Export</p>
                    <p className="text-[11px] font-medium text-slate-500">Allow exporting data to Excel/PDF</p>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Maintenance Mode</p>
                    <p className="text-[11px] font-medium text-slate-500">Put system in maintenance mode</p>
                  </div>
                  <div className="w-10 h-5 bg-slate-300 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">Show Announcements</p>
                    <p className="text-[11px] font-medium text-slate-500">Display announcements on dashboard</p>
                  </div>
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Session Settings */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] font-black text-[#0B1A3D] border-b border-slate-100 pb-2">Session Settings</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-500">Session Timeout (Minutes)</label>
                    <input 
                      type="number" 
                      defaultValue="60"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                    />
                    <p className="text-[9px] font-medium text-slate-400">User will be logged out after inactivity</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-bold text-slate-500">Password Expiry (Days)</label>
                    <input 
                      type="number" 
                      defaultValue="90"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                    />
                    <p className="text-[9px] font-medium text-slate-400">Users will be required to change password</p>
                  </div>
                </div>
              </div>

              {/* File Upload Settings */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] font-black text-[#0B1A3D] border-b border-slate-100 pb-2">File Upload Settings</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2 col-span-1">
                    <label className="text-[11px] font-bold text-slate-500">Maximum File Size</label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                        <option>10 MB</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-[11px] font-bold text-slate-500">Allowed File Types</label>
                    <input 
                      type="text" 
                      defaultValue="PDF, JPG, PNG, DOC, DOCX, XLS, XLSX"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
                    />
                    <p className="text-[9px] font-medium text-slate-400">Separate multiple types with comma</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
