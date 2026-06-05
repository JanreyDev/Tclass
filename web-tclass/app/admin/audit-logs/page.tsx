import React from 'react';
import { 
  FileText, 
  UserCheck, 
  Edit2, 
  Trash2, 
  ShieldAlert, 
  Search, 
  ChevronDown, 
  RotateCcw,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
  User,
  Plus,
  Shield,
  Calendar,
  Download
} from 'lucide-react';

export default function AdminAuditLogsPage() {
  const stats = [
    { title: 'Total Logs', value: '8,542', desc: 'All time', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'User Logins', value: '2,156', desc: 'All time', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Data Changes', value: '4,782', desc: 'All time', icon: Edit2, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Deleted Records', value: '436', desc: 'All time', icon: Trash2, color: 'text-purple-500', bg: 'bg-purple-50' },
    { title: 'Security Events', value: '1,168', desc: 'All time', icon: ShieldAlert, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  const logs = [
    { id: 1, type: 'LOGIN', time: 'May 16, 2026 10:30:45 AM', user: 'Admin User', email: 'admin@tclass.edu.ph', module: 'User Management', action: 'LOGIN', desc: 'User logged in to the system', ip: '192.168.1.10' },
    { id: 2, type: 'UPDATE', time: 'May 16, 2026 10:25:12 AM', user: 'Admin User', email: 'admin@tclass.edu.ph', module: 'Students', action: 'UPDATE', desc: 'Updated student information\nID: 20241078', ip: '192.168.1.10' },
    { id: 3, type: 'CREATE', time: 'May 16, 2026 10:15:33 AM', user: 'Registrar Staff', email: 'registrar@tclass.edu.ph', module: 'Enrollment', action: 'CREATE', desc: 'Created new enrollment record\nStudent ID: 20241078', ip: '192.168.1.15' },
    { id: 4, type: 'UPDATE', time: 'May 16, 2026 09:58:21 AM', user: 'Faculty User', email: 'faculty@tclass.edu.ph', module: 'Grades', action: 'UPDATE', desc: 'Updated grades for section\nBSCS 2A - Data Structures', ip: '192.168.1.22' },
    { id: 5, type: 'DELETE', time: 'May 16, 2026 09:40:05 AM', user: 'Admin User', email: 'admin@tclass.edu.ph', module: 'Subjects', action: 'DELETE', desc: 'Deleted subject record\nSubject Code: OLD123', ip: '192.168.1.10' },
    { id: 6, type: 'LOGIN', time: 'May 16, 2026 09:22:18 AM', user: 'Student User', email: 'student2024@tclass.edu.ph', module: 'Authentication', action: 'LOGIN', desc: 'Student logged in to the portal', ip: '192.168.1.35' },
    { id: 7, type: 'LOCKOUT', time: 'May 16, 2026 08:55:44 AM', user: 'System', email: 'system@tclass.edu.ph', module: 'Security', action: 'LOCKOUT', desc: 'Failed login attempt detected\nUser: unknown@example.com', ip: '192.168.1.50' },
    { id: 8, type: 'CREATE', time: 'May 16, 2026 08:30:11 AM', user: 'Registrar Staff', email: 'registrar@tclass.edu.ph', module: 'Class & Section', action: 'CREATE', desc: 'Created new section\nBSIT 1A - 2nd Semester', ip: '192.168.1.15' },
    { id: 9, type: 'UPDATE', time: 'May 15, 2026 05:45:29 PM', user: 'Admin User', email: 'admin@tclass.edu.ph', module: 'Settings', action: 'UPDATE', desc: 'Updated system settings\nAcademic Year: 2025-2026', ip: '192.168.1.10' },
    { id: 10, type: 'LOGIN', time: 'May 15, 2026 04:12:07 PM', user: 'Finance Staff', email: 'finance@tclass.edu.ph', module: 'Payments', action: 'LOGIN', desc: 'User logged in to the system', ip: '192.168.1.18' },
  ];

  const getActionStyle = (action: string) => {
    switch(action) {
      case 'LOGIN': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'UPDATE': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'CREATE': return 'text-purple-600 bg-purple-50 border border-purple-100';
      case 'DELETE': return 'text-rose-600 bg-rose-50 border border-rose-100';
      case 'LOCKOUT': return 'text-blue-600 bg-blue-50 border border-blue-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  const getActionIcon = (action: string) => {
    switch(action) {
      case 'LOGIN': return <User className="w-4 h-4" />;
      case 'UPDATE': return <Edit2 className="w-4 h-4" />;
      case 'CREATE': return <Plus className="w-4 h-4" />;
      case 'DELETE': return <Trash2 className="w-4 h-4" />;
      case 'LOCKOUT': return <Shield className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getActionIconStyle = (action: string) => {
    switch(action) {
      case 'LOGIN': return 'text-emerald-600 bg-emerald-50';
      case 'UPDATE': return 'text-amber-600 bg-amber-50';
      case 'CREATE': return 'text-purple-600 bg-purple-50';
      case 'DELETE': return 'text-rose-600 bg-rose-50';
      case 'LOCKOUT': return 'text-blue-600 bg-blue-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
          <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
          <span className="text-blue-600">Audit Logs</span>
        </div>
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Audit Logs</h1>
        <p className="text-[13px] font-medium text-slate-500">Track and review all system activities and changes for accountability and security.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 xl:p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] xl:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.title}</p>
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[20px] xl:text-[22px] font-black text-slate-800 leading-none">{stat.value}</span>
              </div>
              <p className="text-[11px] xl:text-[12px] font-medium text-slate-500">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Top Filters (above table) */}
      <div className="flex flex-wrap lg:flex-nowrap items-end gap-4 mb-6">
        <div className="flex flex-col gap-1.5 w-full lg:flex-1 lg:min-w-[200px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search Logs</span>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by user, action, module or details..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Module</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Modules</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Action</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Actions</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">User</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Users</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[200px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Range</span>
          <div className="relative">
            <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              defaultValue="May 10, 2026 - May 16, 2026" 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-semibold text-slate-700 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex items-end gap-3 w-full sm:w-auto shrink-0">
          <button className="h-[42px] flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors w-full">
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Col: Table Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="w-12"></th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date & Time</th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">User</th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Module</th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Action</th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Description</th>
                  <th className="py-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">IP Address</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 text-center">
                      <div className={`w-8 h-8 mx-auto rounded-lg flex items-center justify-center ${getActionIconStyle(log.action)}`}>
                        {getActionIcon(log.action)}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-bold text-slate-700">{log.time}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-[#0B1A3D]">{log.user}</span>
                        <span className="text-[11px] font-medium text-slate-500">{log.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-medium text-slate-600">{log.module}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getActionStyle(log.action)}`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="text-[12px] font-medium text-slate-700">{log.desc.split('\n')[0]}</span>
                        {log.desc.split('\n')[1] && (
                          <span className="text-[11px] font-medium text-slate-500">{log.desc.split('\n')[1]}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-medium text-slate-600">{log.ip}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <p className="text-[12px] font-medium text-slate-500">
              Showing 1 to 10 of 8,542 logs
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-[13px]">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">5</button>
                <span className="text-slate-400 px-1">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">855</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 sm:ml-2">
                <span className="text-[13px] font-medium text-slate-500">Rows per page:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Advanced Sidebar Filters */}
        <div className="w-full xl:w-[280px] shrink-0 flex flex-col">
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col p-5">
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Filter Logs</h3>
            
            <div className="flex flex-col gap-6">
              
              {/* Log Level Checkboxes */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold text-slate-500">Log Level</span>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-bold text-slate-700">All Levels</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-4 h-4 rounded border border-slate-300"></div>
                  <span className="text-[13px] font-medium text-slate-600">Info</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-4 h-4 rounded border border-slate-300"></div>
                  <span className="text-[13px] font-medium text-slate-600">Warning</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-4 h-4 rounded border border-slate-300"></div>
                  <span className="text-[13px] font-medium text-slate-600">Error</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-4 h-4 rounded border border-slate-300"></div>
                  <span className="text-[13px] font-medium text-slate-600">Critical</span>
                </label>
              </div>

              {/* Module Dropdown */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">Module</span>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>All Modules</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Action Dropdown */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">Action</span>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>All Actions</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* User Dropdown */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">User</span>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>All Users</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* IP Address Text Input */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-slate-500">IP Address</span>
                <input 
                  type="text" 
                  placeholder="Search by IP address..." 
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] font-medium text-slate-700 placeholder:text-slate-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <button className="flex items-center justify-center bg-[#1E5EFF] hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full">
                  Apply Filters
                </button>
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full mt-1">
                  <Download className="w-4 h-4" />
                  Export Logs
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
