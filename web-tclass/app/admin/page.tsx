import React from 'react';
import { 
  Users, 
  UserSquare2, 
  BookOpen, 
  ClipboardCheck, 
  Calendar,
  ArrowUpRight,
  ChevronDown,
  UserPlus,
  BookPlus,
  Megaphone,
  UserCheck,
  FileBarChart,
  Settings,
  FileText,
  FileSpreadsheet,
  FileBarChart2,
  ListChecks,
  Activity,
  CheckCircle2
} from 'lucide-react';

export default function AdminDashboardOverview() {
  const stats = [
    { title: 'Total Students', value: '1,248', change: '+5.2%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', linkText: 'View all students' },
    { title: 'Total Faculty', value: '86', change: '+3.6%', icon: UserSquare2, color: 'text-emerald-500', bg: 'bg-emerald-50', linkText: 'View all faculty' },
    { title: 'Total Classes', value: '156', change: '+4.1%', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-50', linkText: 'View all classes' },
    { title: 'Active Enrollments', value: '1,156', change: '+6.3%', icon: ClipboardCheck, color: 'text-orange-500', bg: 'bg-orange-50', linkText: 'View enrollment' },
  ];

  const recentEnrollments = [
    { id: '2024-00125', name: 'Santos, Juan Miguel', program: 'BS Information Technology', year: '2nd Year', date: 'May 20, 2024', status: 'Active' },
    { id: '2024-00126', name: 'Dela Cruz, Maria Angelica', program: 'BS Business Administration', year: '1st Year', date: 'May 20, 2024', status: 'Active' },
    { id: '2024-00127', name: 'Reyes, Daniel Mateo', program: 'BS Information Technology', year: '1st Year', date: 'May 19, 2024', status: 'Active' },
    { id: '2024-00128', name: 'Garcia, Samantha Mae', program: 'BS Education', year: '2nd Year', date: 'May 19, 2024', status: 'Active' },
    { id: '2024-00129', name: 'Mendoza, Adrian Kyle', program: 'BSIT', year: '3rd Year', date: 'May 18, 2024', status: 'Active' },
  ];

  const announcements = [
    { title: 'Midterm Examination Schedule', desc: 'Please be informed that the midterm examinations will start on May 27, 2024.', date: 'May 19, 2024', author: 'Admin', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Faculty Meeting', desc: 'There will be a faculty meeting on May 24, 2024 at 2:00 PM in the Audio Visual Room.', date: 'May 18, 2024', author: 'Admin', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { title: 'Library Orientation', desc: 'New students are required to attend the library orientation on May 22, 2024 at 2:00 PM.', date: 'May 17, 2024', author: 'Library', icon: BookOpen, color: 'text-sky-500', bg: 'bg-sky-50' },
  ];

  const quickActions = [
    { name: 'Add New User', icon: UserPlus },
    { name: 'Create Class', icon: BookPlus },
    { name: 'Create Announcement', icon: Megaphone },
    { name: 'Enroll Student', icon: UserCheck },
    { name: 'Generate Report', icon: FileBarChart },
    { name: 'System Settings', icon: Settings },
  ];

  const upcomingEvents = [
    { date: '24', month: 'MAY', title: 'Faculty Meeting', time: '2:00 PM - AV Room' },
    { date: '27', month: 'MAY', title: 'Midterm Examinations Begin', time: '8:00 AM - All Classrooms' },
    { date: '03', month: 'JUN', title: 'Foundation Day', time: 'All Day Event' },
  ];

  const systemStatus = [
    { name: 'Portal', status: 'Operational' },
    { name: 'Database', status: 'Operational' },
    { name: 'File Storage', status: 'Operational' },
    { name: 'Email Service', status: 'Operational' },
    { name: 'Backup System', status: 'Operational' },
  ];

  const quickReports = [
    { name: 'Enrollment Report', icon: FileText, color: 'text-blue-500' },
    { name: 'Class List Report', icon: FileSpreadsheet, color: 'text-emerald-500' },
    { name: 'Grades Summary', icon: FileBarChart2, color: 'text-amber-500' },
    { name: 'Attendance Report', icon: ListChecks, color: 'text-indigo-500' },
    { name: 'User Activity Log', icon: Activity, color: 'text-sky-500' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-6 bg-[#F8FAFC]">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            Welcome back, Administrator! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-slate-500 mt-1">Here's what's happening in TCLASS today.</p>
        </div>
        <div className="flex items-center text-slate-500 font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
          May 20, 2024 <span className="mx-2 text-gray-300">|</span> Monday
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-[16px] p-6 border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[130px]">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-1">{stat.title}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-[26px] font-bold text-slate-900 leading-none">{stat.value}</p>
                    <div className="flex flex-col items-start pb-0.5">
                      <span className="text-[10px] font-bold text-emerald-500 flex items-center leading-none">
                        <ArrowUpRight className="w-3 h-3 mr-0.5" />
                        {stat.change}
                      </span>
                      <span className="text-[9px] font-medium text-slate-400 leading-none mt-0.5">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <button className="flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                {stat.linkText} <ArrowUpRight className="w-3 h-3 ml-1 opacity-70" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Enrollment Overview Chart */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden lg:col-span-1 flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Enrollment Overview</h2>
            <div className="flex items-center text-xs font-medium text-slate-600 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-50">
              This Semester <ChevronDown className="w-3 h-3 ml-1 text-slate-400" />
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col relative">
            <div className="flex-1 w-full h-[200px] relative">
              {/* Dummy SVG Line Chart */}
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(37, 99, 235, 0.2)" />
                    <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="0" x2="400" y2="0" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="#f1f5f9" strokeWidth="1" />
                
                {/* Y Axis Labels */}
                <text x="0" y="10" fontSize="10" fill="#94a3b8">1.5K</text>
                <text x="0" y="60" fontSize="10" fill="#94a3b8">1.2K</text>
                <text x="0" y="110" fontSize="10" fill="#94a3b8">900</text>
                <text x="0" y="160" fontSize="10" fill="#94a3b8">600</text>
                <text x="0" y="195" fontSize="10" fill="#94a3b8">300</text>
                
                {/* Area & Line */}
                <path d="M 30 160 L 100 110 L 170 100 L 240 85 L 310 75 L 380 40 L 380 200 L 30 200 Z" fill="url(#gradient)" />
                <path d="M 30 160 L 100 110 L 170 100 L 240 85 L 310 75 L 380 40" fill="none" stroke="#3b82f6" strokeWidth="3" />
                
                {/* Dots */}
                <circle cx="30" cy="160" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="100" cy="110" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="170" cy="100" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="240" cy="85" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="310" cy="75" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                <circle cx="380" cy="40" r="4" fill="#fff" stroke="#3b82f6" strokeWidth="2" />

                {/* X Axis Labels */}
                <text x="30" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">Dec</text>
                <text x="100" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">Jan</text>
                <text x="170" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">Feb</text>
                <text x="240" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">Mar</text>
                <text x="310" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">Apr</text>
                <text x="380" y="215" fontSize="10" fill="#94a3b8" textAnchor="middle">May</text>
              </svg>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Enrollments</p>
                <p className="text-2xl font-bold text-slate-900">1,156</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] font-bold text-emerald-500 flex items-center leading-none mb-1">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                  6.3%
                </span>
                <span className="text-[10px] font-medium text-slate-400">vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Distribution */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden lg:col-span-1 flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Student Distribution</h2>
            <div className="flex items-center text-xs font-medium text-slate-600 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-50">
              By Program <ChevronDown className="w-3 h-3 ml-1 text-slate-400" />
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between gap-6">
              {/* Donut Chart */}
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'conic-gradient(#3b82f6 0% 28%, #10b981 28% 52%, #8b5cf6 52% 72%, #f59e0b 72% 87%, #ef4444 87% 100%)' }}>
                <div className="w-[110px] h-[110px] bg-white rounded-full flex flex-col items-center justify-center shadow-sm z-10">
                  <span className="text-2xl font-extrabold text-slate-900">1,248</span>
                  <span className="text-[10px] font-semibold text-slate-500">Total</span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3.5 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">Information Technology</span>
                  </div>
                  <p className="text-[10px] text-slate-500 ml-4.5">28% (349)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">Business Administration</span>
                  </div>
                  <p className="text-[10px] text-slate-500 ml-4.5">24% (299)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">Education</span>
                  </div>
                  <p className="text-[10px] text-slate-500 ml-4.5">20% (250)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">Engineering</span>
                  </div>
                  <p className="text-[10px] text-slate-500 ml-4.5">15% (187)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">Other Programs</span>
                  </div>
                  <p className="text-[10px] text-slate-500 ml-4.5">13% (163)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-5 pt-3">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center">
              View full report <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden lg:col-span-1 flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Quick Actions</h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4 flex-1">
            {quickActions.map((action, idx) => (
              <button key={idx} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-colors text-slate-600 group">
                <action.icon className="w-6 h-6 mb-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[11px] font-bold text-center leading-tight">{action.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Main Grid: Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Enrollments Table */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden lg:col-span-2 flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Recent Enrollments</h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center">
              View All <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Student ID</th>
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Student Name</th>
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Program</th>
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Year Level</th>
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Date Enrolled</th>
                  <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentEnrollments.map((enrollment, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-3.5 text-[12px] font-medium text-slate-900">{enrollment.id}</td>
                    <td className="px-5 py-3.5 text-[12px] font-bold text-slate-900">{enrollment.name}</td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-600">{enrollment.program}</td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-600">{enrollment.year}</td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-600">{enrollment.date}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-600">
                        {enrollment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-50 text-right mt-auto">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">View all enrollments →</button>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              Recent Announcements
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
            {announcements.map((ann, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] font-bold text-slate-900 leading-snug">{ann.title}</h3>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">{ann.desc}</p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-slate-400">
                    <span>{ann.date}</span>
                    <span>•</span>
                    <span>{ann.author}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${ann.bg}`}>
                    <ann.icon className={`w-4 h-4 ${ann.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Main Grid: Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Reports */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden lg:col-span-2">
          <div className="p-5 border-b border-gray-50">
            <h2 className="text-base font-bold text-slate-900">Quick Reports</h2>
          </div>
          <div className="p-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickReports.map((report, idx) => (
              <button key={idx} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all group">
                <report.icon className={`w-6 h-6 mb-3 ${report.color} group-hover:scale-110 transition-transform`} />
                <span className="text-[11px] font-bold text-slate-700 text-center leading-tight mb-2">{report.name}</span>
                <span className="text-[10px] font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">View Report</span>
              </button>
            ))}
          </div>
        </div>

        {/* System Status / Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:col-span-1">
          
          {/* Upcoming Events Mini */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-50">
              <h2 className="text-[14px] font-bold text-slate-900">Upcoming Events</h2>
            </div>
            <div className="p-4 space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="flex flex-col items-center justify-center w-10 flex-shrink-0 text-center">
                    <span className="text-[10px] font-bold text-slate-400 leading-none">{event.month}</span>
                    <span className="text-[16px] font-black text-slate-900 mt-1 leading-none">{event.date}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-slate-900 truncate">{event.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-50">
              <h2 className="text-[14px] font-bold text-slate-900">System Status</h2>
            </div>
            <div className="p-4 space-y-3">
              {systemStatus.map((sys, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[12px] font-medium text-slate-700">{sys.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {sys.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-50 text-left mt-auto bg-gray-50/50">
              <button className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center px-2">
                View system logs <ArrowUpRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-[12px] text-slate-500">
        © 2024 Provincial Government of Tarlac. All rights reserved.
      </footer>
    </div>
  );
}
