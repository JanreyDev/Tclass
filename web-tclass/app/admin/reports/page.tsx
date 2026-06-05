import React from 'react';
import { 
  FileText, 
  Clock, 
  DownloadCloud, 
  Database,
  Users,
  GraduationCap,
  BookOpen,
  PieChart,
  UserCircle,
  CreditCard,
  CalendarCheck,
  Layers,
  Settings,
  Download,
  Calendar,
  ChevronDown,
  RotateCcw,
  MoreVertical,
  ChevronRight,
  FileSpreadsheet,
  FileIcon,
  PlusSquare
} from 'lucide-react';

export default function AdminReportsPage() {
  const stats = [
    { title: 'Reports Generated', value: '248', desc: 'All time', trend: '↑ 12.5%', trendDesc: 'vs last month', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', trendColor: 'text-emerald-600' },
    { title: 'Scheduled Reports', value: '18', desc: 'Active', trend: '↑ 8.3%', trendDesc: 'vs last month', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Downloads (This Month)', value: '356', desc: 'All reports', trend: '↑ 15.7%', trendDesc: 'vs last month', icon: DownloadCloud, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
    { title: 'Data Sets', value: '32', desc: 'Available', trend: '↑ 6.2%', trendDesc: 'vs last month', icon: Users, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-emerald-600' },
  ];

  const categories = [
    { id: 'enrollment', label: 'Enrollment Reports', desc: 'Student enrollment and trends', icon: FileText, active: true },
    { id: 'academic', label: 'Academic Reports', desc: 'Grades, performance, GPA', icon: GraduationCap, active: false },
    { id: 'student', label: 'Student Reports', desc: 'Student demographics and info', icon: Users, active: false },
    { id: 'faculty', label: 'Faculty Reports', desc: 'Faculty workload and performance', icon: UserCircle, active: false },
    { id: 'finance', label: 'Finance Reports', desc: 'Fees, payments and collections', icon: CreditCard, active: false },
    { id: 'attendance', label: 'Attendance Reports', desc: 'Attendance and absenteeism', icon: Clock, active: false },
    { id: 'classes', label: 'Class & Section Reports', desc: 'Class and section statistics', icon: Layers, active: false },
    { id: 'custom', label: 'Custom Reports', desc: 'Create custom reports', icon: FileText, active: false },
  ];

  const recentReports = [
    { title: 'Enrollment Summary Report', time: 'May 16, 2026 10:30 AM', type: 'Excel', user: 'Admin User', icon: FileSpreadsheet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Academic Performance Report', time: 'May 15, 2026 02:15 PM', type: 'PDF', user: 'Admin User', icon: FileIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
    { title: 'Collection Summary Report', time: 'May 15, 2026 09:45 AM', type: 'Excel', user: 'Admin User', icon: FileSpreadsheet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Student Demographics Report', time: 'May 14, 2026 04:20 PM', type: 'PDF', user: 'Admin User', icon: FileIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
    { title: 'Faculty Workload Report', time: 'May 14, 2026 11:05 AM', type: 'Excel', user: 'Admin User', icon: FileSpreadsheet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const quickActions = [
    { title: 'Create Custom Report', desc: 'Build a report using custom filters', icon: FileText },
    { title: 'Schedule New Report', desc: 'Set up automated report delivery', icon: Clock },
    { title: 'Report Templates', desc: 'Manage and edit report templates', icon: FileText },
    { title: 'Data Export', desc: 'Export raw data sets', icon: Download },
  ];

  const programData = [
    { name: 'BSCS - Bachelor of Science in Computer Science', students: '568', pct: '45.5%', stroke: '#10b981' }, // green line
    { name: 'BSIT - Bachelor of Science in Information Technology', students: '312', pct: '25.0%', stroke: '#10b981' }, // green line
    { name: 'BSED - Bachelor of Secondary Education', students: '208', pct: '16.7%', stroke: '#f59e0b' }, // orange line
    { name: 'BEED - Bachelor of Elementary Education', students: '120', pct: '9.6%', stroke: '#a855f7' }, // purple line
    { name: 'BAEL - Bachelor of Arts in English Language', students: '40', pct: '3.2%', stroke: '#ef4444' }, // red line
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
          <ChevronRight className="w-3.5 h-3.5 mx-1" />
          <span className="text-blue-600">Reports</span>
        </div>
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Reports</h1>
        <p className="text-[13px] font-medium text-slate-500">Generate and analyze reports to make informed decisions.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-right">
                <p className={`text-[12px] font-bold ${stat.trendColor} leading-none mb-1`}>{stat.trend}</p>
                <p className="text-[10px] font-medium text-slate-400 leading-none">{stat.trendDesc}</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.title}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[22px] font-black text-slate-800 leading-none">{stat.value}</span>
              </div>
              <p className="text-[12px] font-medium text-slate-500">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column (Sidebar) */}
        <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6">
          
          {/* Report Categories */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Report Categories</h3>
            </div>
            <div className="flex flex-col p-2">
              {categories.map((cat) => (
                <div key={cat.id} className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${cat.active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}>
                  <div className={`mt-0.5 ${cat.active ? 'text-blue-600' : 'text-slate-400'}`}>
                    <cat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[12px] font-bold ${cat.active ? 'text-blue-700' : 'text-slate-700'} leading-none mb-1`}>{cat.label}</p>
                    <p className={`text-[10px] font-medium ${cat.active ? 'text-blue-500/80' : 'text-slate-400'} leading-tight`}>{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Filters</h3>
            
            <div className="flex flex-col gap-1.5 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>2025-2026</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>2nd Semester</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Programs</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <button className="flex items-center justify-center bg-[#1E5EFF] hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full">
                Apply Filters
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full">
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>
          </div>

        </div>

        {/* Middle Column (Main Content) */}
        <div className="flex-1 flex flex-col gap-6 w-full min-w-0">
          
          {/* Main Report Viewer */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-[16px] font-black text-[#0B1A3D] mb-1">Enrollment Summary Report</h2>
                <p className="text-[12px] font-medium text-slate-500">Overview of student enrollment across programs and year levels.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  Schedule Report
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white pl-4 pr-3 py-2 rounded-lg text-[12px] font-bold transition-colors">
                  Generate Report
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5 border-l border-blue-400 pl-1" />
                </button>
              </div>
            </div>

            {/* Summary Overview */}
            <div className="mb-8">
              <h3 className="text-[13px] font-bold text-[#0B1A3D] mb-4">Summary Overview</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Students</span>
                  <span className="text-[20px] font-black text-[#0B1A3D]">1,248</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Programs</span>
                  <span className="text-[20px] font-black text-[#0B1A3D]">12</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Sections</span>
                  <span className="text-[20px] font-black text-[#0B1A3D]">48</span>
                </div>
                <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enrollment Rate</span>
                  <span className="text-[20px] font-black text-[#0B1A3D]">95.8%</span>
                </div>
              </div>
            </div>

            {/* Enrollment Trend Chart */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[13px] font-bold text-[#0B1A3D]">Enrollment Trend</h3>
                <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1 hover:bg-slate-50">
                  This Academic Year <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="relative h-[220px] w-full">
                {/* Y Axis */}
                <div className="absolute inset-0 flex flex-col justify-between z-0 pb-6 pointer-events-none">
                  {[1500, 1200, 900, 600, 300, 0].map(val => (
                    <div key={val} className="flex items-center w-full">
                      <span className="text-[10px] font-semibold text-slate-400 w-8 text-right pr-2">{val}</span>
                      <div className="flex-1 border-t border-slate-100"></div>
                    </div>
                  ))}
                </div>
                
                {/* Line SVG */}
                <div className="absolute inset-0 z-10 pl-8 pb-6">
                  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="blueGradientReports" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon fill="url(#blueGradientReports)" points="50,60 130,50 210,55 290,40 370,60 450,30 450,200 50,200" />
                    <polyline fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="50,60 130,50 210,55 290,40 370,60 450,30" />
                    <circle cx="50" cy="60" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <circle cx="130" cy="50" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <circle cx="210" cy="55" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <circle cx="290" cy="40" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <circle cx="370" cy="60" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <circle cx="450" cy="30" r="4" fill="#3b82f6" className="stroke-white stroke-2" />
                    <text x="450" y="20" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">1,248</text>
                  </svg>
                </div>
                
                {/* X Axis Labels */}
                <div className="absolute bottom-0 left-8 right-0 flex justify-between z-10">
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[10%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Sem</p>
                    <p className="text-[8px] font-medium text-slate-400">2023-2024</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">2nd Sem</p>
                    <p className="text-[8px] font-medium text-slate-400">2023-2024</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">Summer</p>
                    <p className="text-[8px] font-medium text-slate-400">2023-2024</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Sem</p>
                    <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">2nd Sem</p>
                    <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">Summer</p>
                    <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
                  </div>
                  <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                    <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Sem</p>
                    <p className="text-[8px] font-medium text-slate-400">2025-2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment by Program Table */}
            <div>
              <h3 className="text-[13px] font-bold text-[#0B1A3D] mb-4">Enrollment by Program</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="py-2.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Program</th>
                      <th className="py-2.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Students</th>
                      <th className="py-2.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Percentage</th>
                      <th className="py-2.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programData.map((prog, idx) => (
                      <tr key={idx} className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50">
                        <td className="py-3">
                          <span className="text-[12px] font-bold text-slate-700">{prog.name}</span>
                        </td>
                        <td className="py-3">
                          <span className="text-[12px] font-medium text-slate-600">{prog.students}</span>
                        </td>
                        <td className="py-3">
                          <span className="text-[12px] font-medium text-slate-600">{prog.pct}</span>
                        </td>
                        <td className="py-3">
                          {/* Tiny SVG sparkline representation */}
                          <svg width="40" height="12" viewBox="0 0 40 12" className="overflow-visible">
                            <polyline fill="none" stroke={prog.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points="0,10 10,6 20,8 30,2 40,5" />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-100">
                      <td className="py-3 text-[12px] font-black text-[#0B1A3D]">Total</td>
                      <td className="py-3 text-[12px] font-black text-[#0B1A3D]">1,248</td>
                      <td className="py-3 text-[12px] font-black text-[#0B1A3D]">100%</td>
                      <td className="py-3"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Recently Generated Reports */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Recently Generated Reports</h3>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
            <div className="flex flex-col p-5 gap-5">
              {recentReports.map((report, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${report.bg} ${report.color}`}>
                    <report.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold text-[#0B1A3D] leading-snug truncate">
                      {report.title}
                    </p>
                    <p className="text-[10px] font-medium text-slate-400 mt-1">{report.time}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">{report.type}</span>
                      <span className="text-[9px] font-semibold text-slate-400">{report.user}</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-50 shrink-0">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Quick Actions</h3>
            </div>
            <div className="flex flex-col p-3 gap-1">
              {quickActions.map((action, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <action.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-blue-600 group-hover:underline">{action.title}</p>
                      <p className="text-[10px] font-medium text-slate-500 leading-tight">{action.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
