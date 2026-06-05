import React from 'react';
import { 
  Book, 
  CheckCircle2, 
  PauseCircle, 
  Layers, 
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
  ChevronRight as ChevronRightSmall,
  Monitor,
  Code2,
  Calculator,
  BookOpen,
  FlaskConical,
  Database,
  Sigma,
  Globe2,
  Network,
  FolderPlus,
  FileSpreadsheet,
  FileBarChart,
  CalendarDays
} from 'lucide-react';

export default function AdminSubjectsPage() {
  const stats = [
    { title: 'Total Subjects', value: '248', desc: 'All subjects', trend: '↑ 9.3%', trendDesc: 'vs last month', icon: Book, color: 'text-blue-600', bg: 'bg-blue-50', trendColor: 'text-emerald-600' },
    { title: 'Active Subjects', value: '236', desc: '95.2% of total', trend: '↑ 6.8%', trendDesc: 'vs last month', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Inactive Subjects', value: '12', desc: '4.8% of total', trend: '↓ 7.1%', trendDesc: 'vs last month', icon: PauseCircle, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'Subject Groups', value: '18', desc: 'Categories', trend: '↑ 3', trendDesc: 'vs last month', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
  ];

  const subjectsList = [
    { code: 'IT101', name: 'Introduction to Information Technology', program: 'BSCS', year: '1st Year', units: 3, group: 'IT Core', status: 'Active', icon: Monitor, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { code: 'IT102', name: 'Computer Programming 1', program: 'BSCS', year: '1st Year', units: 3, group: 'IT Core', status: 'Active', icon: Code2, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { code: 'MATH101', name: 'College Algebra', program: 'BSCS', year: '1st Year', units: 3, group: 'Math', status: 'Active', icon: Calculator, iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { code: 'ENG101', name: 'Purposive Communication', program: 'All Programs', year: '1st Year', units: 3, group: 'GE', status: 'Active', icon: BookOpen, iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { code: 'SCI101', name: 'Physical Science', program: 'BSCS', year: '1st Year', units: 3, group: 'Science', status: 'Inactive', icon: FlaskConical, iconBg: 'bg-teal-50', iconColor: 'text-teal-600' },
    { code: 'IT201', name: 'Data Structures', program: 'BSCS', year: '2nd Year', units: 3, group: 'IT Core', status: 'Active', icon: Code2, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { code: 'IT202', name: 'Database Systems', program: 'BSCS', year: '2nd Year', units: 3, group: 'IT Core', status: 'Active', icon: Database, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { code: 'MATH201', name: 'Discrete Mathematics', program: 'BSCS', year: '2nd Year', units: 3, group: 'Math', status: 'Active', icon: Sigma, iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { code: 'GE201', name: 'Philippine History', program: 'All Programs', year: '2nd Year', units: 3, group: 'GE', status: 'Active', icon: Globe2, iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { code: 'IT301', name: 'Computer Networks', program: 'BSCS', year: '3rd Year', units: 3, group: 'IT Core', status: 'Active', icon: Network, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Inactive': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Subjects</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Subject Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Create, manage, and organize all academic subjects in the system.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Subjects
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Subject
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
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

      {/* Filters */}
      <div className="flex flex-wrap lg:flex-nowrap items-end gap-4 mb-6">
        <div className="flex flex-col gap-1.5 w-full lg:flex-1 lg:min-w-[200px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search subject</span>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by code, name or description..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Programs</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Year Levels</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Semesters</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>All Status</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Col: Table Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden w-full">
          
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-[14px] font-black text-[#0B1A3D]">Subjects List</h3>
            <button className="h-[36px] flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors shrink-0">
              <RotateCcw className="w-3.5 h-3.5" />
              Clear Filters
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="py-3 px-6 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Code</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Subject Name</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Program</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Year Level</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Units</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Group</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                  <th className="py-3 px-6 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjectsList.map((subject, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded flex items-center justify-center shrink-0 ${subject.iconBg} ${subject.iconColor}`}>
                          <subject.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[12px] font-bold text-slate-700">{subject.code}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[12px] font-bold text-[#0B1A3D]">{subject.name}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[12px] font-medium text-slate-600">{subject.program}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[12px] font-medium text-slate-600">{subject.year}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[12px] font-semibold text-slate-700">{subject.units}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[12px] font-medium text-slate-600">{subject.group}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${getStatusStyle(subject.status)}`}>
                        {subject.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded-lg transition-colors" title="View details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded-lg transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1 rounded-lg transition-colors" title="More">
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
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <p className="text-[12px] font-medium text-slate-500">
              Showing 1 to 10 of 248 subjects
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-[12px]">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">2</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">3</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">4</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">5</button>
                <span className="text-slate-400 px-0.5">...</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">25</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2 sm:ml-2">
                <span className="text-[12px] font-medium text-slate-500">Rows per page:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-2 pr-7 py-1 text-[12px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Sidebar */}
        <div className="w-full lg:w-[320px] xl:w-[340px] shrink-0 flex flex-col gap-6">
          
          {/* Subjects by Group Chart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Subjects by Group</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="134.8" className="transition-all duration-1000" /> {/* IT Core 38.7% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="159.6" className="transition-all duration-1000 transform -rotate-[139.3deg] origin-center" /> {/* GE 27.4% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="188.0" className="transition-all duration-1000 transform -rotate-[237.9deg] origin-center" /> {/* Math 14.5% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#a855f7" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="195.0" className="transition-all duration-1000 transform -rotate-[290.1deg] origin-center" /> {/* Science 11.3% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="202.0" className="transition-all duration-1000 transform -rotate-[330.8deg] origin-center" /> {/* Other 8.1% */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[15px] font-black text-[#0B1A3D] leading-none">248</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {[
                  { name: 'IT Core', count: '96 (38.7%)', color: 'bg-blue-500' },
                  { name: 'General Education', count: '68 (27.4%)', color: 'bg-emerald-500' },
                  { name: 'Math', count: '36 (14.5%)', color: 'bg-amber-500' },
                  { name: 'Science', count: '28 (11.3%)', color: 'bg-purple-500' },
                  { name: 'Other', count: '20 (8.1%)', color: 'bg-rose-500' },
                ].map(type => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${type.color}`}></span>
                      <span className="text-[10px] font-bold text-slate-700">{type.name}</span>
                    </div>
                    <span className="text-[9px] font-medium text-slate-500">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subject Details */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Subject Details</h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              
              <div className="flex items-start justify-between pb-3 border-b border-slate-50">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Monitor className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[12px] font-bold text-[#0B1A3D] leading-tight">Introduction to Information Technology</p>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block text-emerald-600 bg-emerald-50 border border-emerald-100 shrink-0 ml-2">
                  Active
                </span>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Code</span>
                  <span className="text-[11px] font-bold text-slate-700">IT101</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Program</span>
                  <span className="text-[11px] font-bold text-slate-700">BSCS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Year Level</span>
                  <span className="text-[11px] font-bold text-slate-700">1st Year</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Units</span>
                  <span className="text-[11px] font-bold text-slate-700">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Group</span>
                  <span className="text-[11px] font-bold text-slate-700">IT Core</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Prerequisite</span>
                  <span className="text-[11px] font-bold text-slate-700">None</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] font-medium text-slate-500">Description</span>
                  <p className="text-[11px] font-medium text-slate-700 leading-tight">Basics of computer systems, software, hardware and digital literacy.</p>
                </div>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-50">
                  <span className="text-[10px] font-medium text-slate-500">Last Updated</span>
                  <span className="text-[10px] font-bold text-slate-700">May 16, 2026 10:30 AM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Quick Actions</h3>
            </div>
            <div className="flex flex-col p-3 gap-1">
              
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FolderPlus className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Add Subject Group</p>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight">Create and manage subject groups</p>
                  </div>
                </div>
                <ChevronRightSmall className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Import Subjects</p>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight">Import subjects from Excel/CSV</p>
                  </div>
                </div>
                <ChevronRightSmall className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileBarChart className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Subject Utilization Report</p>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight">View subject usage across sections</p>
                  </div>
                </div>
                <ChevronRightSmall className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CalendarDays className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Subject Offering Plan</p>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight">Manage subject offerings by semester</p>
                  </div>
                </div>
                <ChevronRightSmall className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
