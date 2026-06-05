import React from 'react';
import { 
  BarChart2, 
  Settings, 
  BookOpen, 
  Users, 
  Award, 
  UserCheck, 
  ClipboardCheck,
  ChevronDown,
  Calendar,
  MoreVertical,
  Download,
  FileText,
  FileBarChart,
  FileSpreadsheet,
  FilePieChart,
  FileSignature,
  Search,
  File,
  Eye,
  AlertTriangle,
  MessageSquare,
  Mail
} from 'lucide-react';

export default function FacultyReportsPage() {
  const stats = [
    { title: 'Classes Handled', value: '6', desc: 'Across all semesters', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Total Students', value: '142', desc: 'Across all classes', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Average Grade', value: '86.43', desc: 'B+', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50', descColor: 'text-emerald-600 font-bold' },
    { title: 'Attendance Rate', value: '89.2%', desc: 'This semester', icon: UserCheck, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Assignment Completion', value: '92%', desc: 'This semester', icon: ClipboardCheck, color: 'text-teal-600', bg: 'bg-teal-50' },
  ];

  const classPerformance = [
    { class: 'Data Structures and Algorithms', sub: '(CCS 201) - BSCS 2A', students: 28, grade: '89.20 (B+)', att: '94%', comp: '96%', trendColor: 'text-emerald-500' },
    { class: 'Web Development 1', sub: '(CCS 204) - BSCS 2B', students: 26, grade: '87.50 (B)', att: '91%', comp: '93%', trendColor: 'text-emerald-500' },
    { class: 'Database Systems', sub: '(CCS 302) - BSCS 3A', students: 25, grade: '85.80 (B)', att: '89%', comp: '91%', trendColor: 'text-amber-500' },
    { class: 'Software Engineering', sub: '(CCS 305) - BSCS 3B', students: 24, grade: '83.40 (B)', att: '87%', comp: '90%', trendColor: 'text-amber-500' },
    { class: 'Data Structures', sub: '(CCS 203) - BSCS 2A', students: 20, grade: '84.10 (B)', att: '88%', comp: '89%', trendColor: 'text-amber-500' },
    { class: 'Information Management', sub: '(CCS 101) - BSCS 1A', students: 19, grade: '82.30 (B-)', att: '85%', comp: '86%', trendColor: 'text-rose-500' },
  ];

  const quickReports = [
    { title: 'Class Grade Report', desc: 'Detailed grades and statistics for all classes.', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Attendance Report', desc: 'Attendance summary and trends.', icon: FileBarChart, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Student Performance Report', desc: 'Individual and class performance overview.', icon: FileSpreadsheet, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Assignment Submission Report', desc: 'Submission status and completion analytics.', icon: FilePieChart, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Evaluation Summary Report', desc: 'Evaluation results and feedback summary.', icon: FileSignature, color: 'text-teal-600', bg: 'bg-teal-50' },
  ];

  const atRiskStudents = [
    { name: 'Juan Dela Cruz', class: 'BSCS 2A', grade: '72.00 (C)', att: '68%', status: 'At Risk' },
    { name: 'Maria Santos', class: 'BSCS 3A', grade: '75.00 (C+)', att: '70%', status: 'At Risk' },
    { name: 'Mark Anthony Reyes', class: 'BSCS 2B', grade: '76.50 (C+)', att: '72%', status: 'At Risk' },
  ];

  // SVG Sparkline component
  const Sparkline = ({ colorClass }: { colorClass: string }) => (
    <svg width="60" height="20" viewBox="0 0 60 20" className={`stroke-current ${colorClass} fill-transparent`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {colorClass.includes('emerald') && <path d="M5 15 L15 10 L25 12 L40 5 L55 2" />}
      {colorClass.includes('amber') && <path d="M5 5 L15 8 L25 6 L40 12 L55 10" />}
      {colorClass.includes('rose') && <path d="M5 2 L15 6 L25 4 L40 15 L55 18" />}
    </svg>
  );

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1 leading-none">Reports</h1>
            <p className="text-[13px] font-medium text-slate-500">Overview and analytics of your classes and students.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
          <Settings className="w-4 h-4" />
          Customize Dashboard
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col xl:flex-row xl:items-center gap-4 shrink-0">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 leading-tight">{stat.title}</p>
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[22px] font-black text-slate-800 leading-none">{stat.value}</span>
              </div>
              <p className={`text-[12px] font-medium ${stat.descColor || 'text-slate-500'}`}>{stat.desc}</p>
            </div>
          </div>
        ))}
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
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Classes</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Report Type</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Report Types</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-56">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Range</span>
            <div className="relative">
              <div className="w-full flex items-center gap-2 bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 cursor-pointer">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-[13px] font-semibold text-slate-700">Apr 15 - May 15, 2026</span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Grade Distribution Bar Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Grade Distribution</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Semester <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 flex items-end justify-between relative mt-4">
            {/* Y Axis Lines */}
            <div className="absolute inset-0 flex flex-col justify-between z-0 pb-6 pointer-events-none">
              {[50, 40, 30, 20, 10, 0].map(val => (
                <div key={val} className="flex items-center w-full">
                  <span className="text-[10px] font-semibold text-slate-400 w-8">{val}%</span>
                  <div className="flex-1 border-t border-slate-100"></div>
                </div>
              ))}
            </div>
            
            {/* Bars */}
            <div className="relative z-10 flex items-end justify-around w-full pl-8 h-[200px] pb-6">
              {[
                { label: 'A', range: '(90-100)', pct: 25, h: 'h-[50%]', color: 'bg-emerald-500' },
                { label: 'B', range: '(80-89)', pct: 40, h: 'h-[80%]', color: 'bg-blue-500' },
                { label: 'C', range: '(70-79)', pct: 20, h: 'h-[40%]', color: 'bg-amber-400' },
                { label: 'D', range: '(60-69)', pct: 10, h: 'h-[20%]', color: 'bg-orange-500' },
                { label: 'F', range: '(0-59)', pct: 5, h: 'h-[10%]', color: 'bg-rose-500' },
              ].map(bar => (
                <div key={bar.label} className="flex flex-col items-center group w-12">
                  <span className="text-[10px] font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{bar.pct}%</span>
                  <div className={`w-8 rounded-t-sm ${bar.h} ${bar.color} transition-all duration-500`}></div>
                  <div className="absolute bottom-0 text-center translate-y-full pt-2">
                    <p className="text-[12px] font-bold text-slate-700 leading-tight">{bar.label}</p>
                    <p className="text-[9px] font-medium text-slate-400">{bar.range}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[11px] font-medium text-slate-500">Total Students: 142</p>
          </div>
        </div>

        {/* Attendance Trend Line Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Attendance Trend</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Month <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 relative mt-4">
            {/* Y Axis */}
            <div className="absolute inset-0 flex flex-col justify-between z-0 pb-6 pointer-events-none">
              {[100, 80, 60, 40, 20, 0].map(val => (
                <div key={val} className="flex items-center w-full">
                  <span className="text-[10px] font-semibold text-slate-400 w-8">{val}%</span>
                  <div className="flex-1 border-t border-slate-100"></div>
                </div>
              ))}
            </div>
            
            {/* Line SVG */}
            <div className="absolute inset-0 z-10 pl-8 pb-6">
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 400 200">
                <polyline fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="40,20 146,40 253,20 360,40" />
                <circle cx="40" cy="20" r="5" fill="#3b82f6" />
                <circle cx="146" cy="40" r="5" fill="#3b82f6" />
                <circle cx="253" cy="20" r="5" fill="#3b82f6" />
                <circle cx="360" cy="40" r="5" fill="#3b82f6" />
                
                {/* Labels above points */}
                <text x="40" y="10" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">92%</text>
                <text x="146" y="28" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">89%</text>
                <text x="253" y="10" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">91%</text>
                <text x="360" y="28" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">88%</text>
              </svg>
            </div>
            
            {/* X Axis Labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between z-10">
              <div className="text-center w-20 transform -translate-x-1/2 ml-[10%]">
                <p className="text-[10px] font-bold text-slate-600 leading-tight">Week 1</p>
                <p className="text-[9px] font-medium text-slate-400">Apr 15-21</p>
              </div>
              <div className="text-center w-20 transform -translate-x-1/2 ml-[26%]">
                <p className="text-[10px] font-bold text-slate-600 leading-tight">Week 2</p>
                <p className="text-[9px] font-medium text-slate-400">Apr 22-28</p>
              </div>
              <div className="text-center w-20 transform -translate-x-1/2 ml-[26%]">
                <p className="text-[10px] font-bold text-slate-600 leading-tight">Week 3</p>
                <p className="text-[9px] font-medium text-slate-400">Apr 29-May 5</p>
              </div>
              <div className="text-center w-20 transform -translate-x-1/2 ml-[26%]">
                <p className="text-[10px] font-bold text-slate-600 leading-tight">Week 4</p>
                <p className="text-[9px] font-medium text-slate-400">May 6-12</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <p className="text-[11px] font-bold text-slate-500">Attendance Rate (%)</p>
          </div>
        </div>

        {/* Assignment Completion Donut Chart */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Assignment Completion</h3>
            <button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 border border-slate-200 rounded px-2 py-1">
              This Semester <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center gap-8">
            <div className="relative w-40 h-40">
              {/* CSS Donut approximation */}
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="20" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="20.096" className="transition-all duration-1000" /> {/* 92% green */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="238.64" className="transition-all duration-1000 transform -rotate-[28.8deg] origin-center" /> {/* 5% yellow */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="243.664" className="transition-all duration-1000 transform -rotate-[46.8deg] origin-center" /> {/* 3% red */}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[28px] font-black text-[#0B1A3D] leading-none">142</span>
                <span className="text-[11px] font-bold text-slate-400">Total</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[12px] font-bold text-slate-700">Submitted</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 pl-4.5">92% (131)</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-[12px] font-bold text-slate-700">Late</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 pl-4.5">5% (7)</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="text-[12px] font-bold text-slate-700">Missing</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 pl-4.5">3% (4)</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[11px] font-bold text-emerald-600">Completion Rate: 92%</p>
          </div>
        </div>

      </div>

      {/* Class Performance Overview */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-[16px] font-black text-[#0B1A3D]">Class Performance Overview</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Students</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Average Grade</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Attendance Rate</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Assignment Completion</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-32">Trend</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-16"></th>
              </tr>
            </thead>
            <tbody>
              {classPerformance.map((cls, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">{cls.class}</p>
                    <p className="text-[11px] font-medium text-slate-500">{cls.sub}</p>
                  </td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-700 text-center">{cls.students}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-[13px] font-bold ${cls.grade.includes('C') || cls.grade.includes('B-') ? 'text-amber-600' : 'text-slate-800'}`}>{cls.grade}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{cls.att}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{cls.comp}</span>
                  </td>
                  <td className="py-4 px-4 flex items-center justify-center">
                    <Sparkline colorClass={cls.trendColor} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-100 flex items-center justify-center bg-slate-50/30">
          <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            View Detailed Class Reports
          </button>
        </div>
      </div>

      {/* Quick Report Downloads */}
      <div className="mb-8">
        <h2 className="text-[16px] font-black text-[#0B1A3D] mb-4">Quick Report Downloads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {quickReports.map((report, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:border-blue-300 transition-colors cursor-pointer group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mb-4 ${report.bg} ${report.color}`}>
                <report.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[13px] font-black text-[#0B1A3D] mb-2 leading-tight group-hover:text-blue-600 transition-colors">{report.title}</h3>
              <p className="text-[11px] font-medium text-slate-500 mb-6 flex-1">{report.desc}</p>
              
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 mt-auto">
                <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors flex-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">Preview</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg transition-colors flex-1">
                  <File className="w-4 h-4" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">PDF</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-emerald-600 hover:bg-emerald-50 p-1.5 rounded-lg transition-colors flex-1">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">Excel</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* At Risk Students */}
      <div className="bg-white border border-rose-200 rounded-2xl overflow-hidden shadow-sm shadow-rose-100/50 relative">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500"></div>
        <div className="p-5 border-b border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-rose-50/30 pl-7">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <div>
              <h2 className="text-[15px] font-black text-[#0B1A3D] mb-0.5">At Risk Students</h2>
              <p className="text-[11px] font-medium text-slate-500">Students who may need additional support.</p>
            </div>
          </div>
          <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800 transition-colors">
            View All At Risk Students
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-rose-100 bg-white">
                <th className="py-3 px-7 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Average Grade</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Attendance Rate</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {atRiskStudents.map((stu, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors bg-white">
                  <td className="py-4 px-7">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[12px] shrink-0 border border-slate-200 overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${stu.name.split(' ').join('+')}&background=f1f5f9&color=64748b`} alt={stu.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[13px] font-bold text-[#0B1A3D]">{stu.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{stu.class}</td>
                  <td className="py-4 px-4 text-[13px] font-bold text-amber-500 text-center">{stu.grade}</td>
                  <td className="py-4 px-4 text-[13px] font-bold text-amber-500 text-center">{stu.att}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                      {stu.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="Message">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="Email">
                        <Mail className="w-4 h-4" />
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
        
        <div className="p-4 border-t border-rose-100 flex items-center justify-center bg-white">
          <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 text-[13px] font-bold transition-colors">
            <Users className="w-4 h-4" />
            View All Students
          </button>
        </div>
      </div>

    </div>
  );
}
