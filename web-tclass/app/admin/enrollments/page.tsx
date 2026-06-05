import React from 'react';
import { 
  Users, 
  FilePlus, 
  UserX, 
  BarChart3, 
  Download, 
  Plus, 
  Search, 
  ChevronDown, 
  RotateCcw,
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall
} from 'lucide-react';

export default function AdminEnrollmentManagementPage() {
  const stats = [
    { title: 'Total Enrolled Students', value: '1,248', desc: 'All programs', trend: '↑ 8.6%', trendDesc: 'vs last semester', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trendColor: 'text-emerald-600' },
    { title: 'New Enrollments', value: '312', desc: 'This semester', trend: '↑ 12.4%', trendDesc: 'vs last semester', icon: FilePlus, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Dropped/Withdrawn', value: '45', desc: 'This semester', trend: '↑ 3.2%', trendDesc: 'vs last semester', icon: UserX, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'Retention Rate', value: '95.8%', desc: 'This semester', trend: '↑ 2.1%', trendDesc: 'vs last semester', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
  ];

  const enrollments = [
    { id: '2023-10001', name: 'Dela Cruz, Juan Miguel', program: 'BSCS - Bachelor of Science in Computer Science', year: '2nd Year', date: 'May 16, 2026', status: 'Enrolled', payment: 'Paid', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10002', name: 'Santos, Maria Isabel', program: 'BSIT - Bachelor of Science in Information Technology', year: '3rd Year', date: 'May 16, 2026', status: 'Enrolled', payment: 'Partial', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10003', name: 'Reyes, Christian Paul', program: 'BSCS - Bachelor of Science in Computer Science', year: '1st Year', date: 'May 15, 2026', status: 'Pending', payment: 'Unpaid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10004', name: 'Garcia, Andrea Mae', program: 'BSEd - Bachelor of Secondary Education', year: '2nd Year', date: 'May 14, 2026', status: 'Enrolled', payment: 'Paid', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10005', name: 'Lopez, Mark Daniel', program: 'BSIT - Bachelor of Science in Information Technology', year: '4th Year', date: 'May 13, 2026', status: 'On Hold', payment: 'Unpaid', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Enrolled': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Pending': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'On Hold': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  const getPaymentStyle = (payment: string) => {
    switch(payment) {
      case 'Paid': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Partial': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'Unpaid': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Enrollment Management</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Enrollment Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Monitor and manage student enrollments across programs and semesters.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            New Enrollment
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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

      {/* 3 Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Enrollment Overview Line Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Enrollment Overview</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Academic Year <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 relative mt-4">
            {/* Y Axis */}
            <div className="absolute inset-0 flex flex-col justify-between z-0 pb-6 pointer-events-none">
              {[1500, 1200, 900, 600, 300, 0].map(val => (
                <div key={val} className="flex items-center w-full">
                  <span className="text-[10px] font-semibold text-slate-400 w-10 text-right pr-2">{val}</span>
                  <div className="flex-1 border-t border-slate-100"></div>
                </div>
              ))}
            </div>
            
            {/* Line SVG */}
            <div className="absolute inset-0 z-10 pl-10 pb-6">
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 500 200">
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area Fill */}
                <polygon fill="url(#blueGradient)" points="50,60 130,50 210,55 290,40 370,60 450,30 450,200 50,200" />
                {/* Line */}
                <polyline fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="50,60 130,50 210,55 290,40 370,60 450,30" />
                <circle cx="50" cy="60" r="4" fill="#3b82f6" />
                <circle cx="130" cy="50" r="4" fill="#3b82f6" />
                <circle cx="210" cy="55" r="4" fill="#3b82f6" />
                <circle cx="290" cy="40" r="4" fill="#3b82f6" />
                <circle cx="370" cy="60" r="4" fill="#3b82f6" />
                <circle cx="450" cy="30" r="4" fill="#3b82f6" />
                <text x="450" y="20" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">1,248</text>
              </svg>
            </div>
            
            {/* X Axis Labels */}
            <div className="absolute bottom-0 left-10 right-0 flex justify-between z-10">
              <div className="text-center w-16 transform -translate-x-1/2 ml-[10%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Semester</p>
                <p className="text-[8px] font-medium text-slate-400">2023-2024</p>
              </div>
              <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">2nd Semester</p>
                <p className="text-[8px] font-medium text-slate-400">2023-2024</p>
              </div>
              <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Semester</p>
                <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
              </div>
              <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">2nd Semester</p>
                <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
              </div>
              <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">Summer</p>
                <p className="text-[8px] font-medium text-slate-400">2024-2025</p>
              </div>
              <div className="text-center w-16 transform -translate-x-1/2 ml-[16%]">
                <p className="text-[9px] font-bold text-slate-500 leading-tight">1st Semester</p>
                <p className="text-[8px] font-medium text-slate-400">2025-2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment by Program */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Enrollment by Program</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Semester <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between gap-4">
            <div className="relative w-36 h-36 shrink-0">
              {/* CSS Donut approximation */}
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="100.0" className="transition-all duration-1000" /> {/* BSCS 45.5% blue */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="164.9" className="transition-all duration-1000 transform -rotate-[163.8deg] origin-center" /> {/* BSIT 25% green */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="183.1" className="transition-all duration-1000 transform -rotate-[253.8deg] origin-center" /> {/* BSEd 16.7% yellow */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#8b5cf6" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="198.7" className="transition-all duration-1000 transform -rotate-[313.9deg] origin-center" /> {/* BEEd 9.6% purple */}
                <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="212.8" className="transition-all duration-1000 transform -rotate-[348.4deg] origin-center" /> {/* BAEL 3.2% red */}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-8">
                <span className="text-[18px] font-black text-[#0B1A3D] leading-none">1,248</span>
                <span className="text-[9px] font-bold text-slate-400">Total</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full">
              {[
                { name: 'BSCS', count: '568 (45.5%)', color: 'bg-blue-500' },
                { name: 'BSIT', count: '312 (25.0%)', color: 'bg-emerald-500' },
                { name: 'BSEd', count: '208 (16.7%)', color: 'bg-amber-500' },
                { name: 'BEEd', count: '120 (9.6%)', color: 'bg-purple-500' },
                { name: 'BAEL', count: '40 (3.2%)', color: 'bg-rose-500' },
              ].map(prog => (
                <div key={prog.name} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${prog.color}`}></span>
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{prog.name}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 pl-4 leading-tight">{prog.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Status */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Enrollment Status</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Semester <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col justify-around flex-1 py-2">
            {[
              { label: 'Enrolled', count: '1,248', pct: '89.7%', color: 'bg-emerald-500', w: 'w-[90%]' },
              { label: 'Pending', count: '98', pct: '7.0%', color: 'bg-amber-500', w: 'w-[7%]' },
              { label: 'For Approval', count: '28', pct: '2.0%', color: 'bg-blue-500', w: 'w-[2%]' },
              { label: 'On Hold', count: '14', pct: '1.0%', color: 'bg-rose-500', w: 'w-[1%]' },
            ].map(status => (
              <div key={status.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="font-semibold text-slate-600">{status.label}</span>
                  <span className="font-bold text-[#0B1A3D]">{status.count} <span className="font-medium text-slate-400">({status.pct})</span></span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${status.color} ${status.w} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>1st Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Programs</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Year Levels</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:max-w-[280px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search</span>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by name or ID..." 
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full shrink-0">
          <button className="h-[42px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full xl:w-auto">
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1100px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student ID</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Enrollment Date</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Payment Status</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-[13px] font-medium text-slate-500">{enrollment.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src={enrollment.avatar} alt={enrollment.name} className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0" />
                      <span className="text-[13px] font-bold text-[#0B1A3D]">{enrollment.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[12px] font-medium text-slate-600 max-w-[200px] leading-tight">{enrollment.program}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-medium text-slate-600">{enrollment.year}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[12px] font-medium text-slate-600">{enrollment.date}</p>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getStatusStyle(enrollment.status)}`}>
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getPaymentStyle(enrollment.payment)}`}>
                      {enrollment.payment}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors" title="More">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto bg-white">
          <p className="text-[12px] font-medium text-slate-500">
            Showing 1 to 10 of 1,248 entries
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">125</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 sm:ml-2">
              <span className="text-[12px] font-medium text-slate-500">Rows per page:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
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

    </div>
  );
}
