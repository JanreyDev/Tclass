import React from 'react';
import { 
  BookOpen, 
  Users, 
  UserCheck, 
  XCircle, 
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
  FileText,
  FileEdit,
  ClipboardList
} from 'lucide-react';

export default function AdminClassesPage() {
  const stats = [
    { title: 'Total Classes', value: '48', desc: 'All programs', trend: '↑ 8.3%', trendDesc: 'vs last semester', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50', trendColor: 'text-emerald-600' },
    { title: 'Total Sections', value: '124', desc: 'All programs', trend: '↑ 6.5%', trendDesc: 'vs last semester', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Active Sections', value: '112', desc: 'This semester', trend: '↑ 4.2%', trendDesc: 'vs last semester', icon: UserCheck, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
    { title: 'Inactive Sections', value: '12', desc: 'This semester', trend: '↓ 2.1%', trendDesc: 'vs last semester', icon: XCircle, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
  ];

  const classesList = [
    { code: 'BSCS 1', name: 'BSCS First Year', program: 'Bachelor of Science in Computer Science', year: '1st Year', sections: 4, students: 128, status: 'Active' },
    { code: 'BSCS 2', name: 'BSCS Second Year', program: 'Bachelor of Science in Computer Science', year: '2nd Year', sections: 4, students: 116, status: 'Active' },
    { code: 'BSCS 3', name: 'BSCS Third Year', program: 'Bachelor of Science in Computer Science', year: '3rd Year', sections: 4, students: 112, status: 'Active' },
    { code: 'BSCS 4', name: 'BSCS Fourth Year', program: 'Bachelor of Science in Computer Science', year: '4th Year', sections: 4, students: 96, status: 'Active' },
    { code: 'BSIT 1', name: 'BSIT First Year', program: 'Bachelor of Science in Information Technology', year: '1st Year', sections: 4, students: 120, status: 'Active' },
    { code: 'BSIT 2', name: 'BSIT Second Year', program: 'Bachelor of Science in Information Technology', year: '2nd Year', sections: 4, students: 98, status: 'Inactive' },
  ];

  const activities = [
    { icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'New section "BSCS 1A" has been created', time: 'May 16, 2026 10:30 AM', user: 'Admin User' },
    { icon: FileEdit, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Section "BSIT 2B" has been updated', time: 'May 16, 2026 9:15 AM', user: 'Admin User' },
    { icon: ClipboardList, color: 'text-purple-600', bg: 'bg-purple-50', title: 'Section "BSEd 3A" has been deactivated', time: 'May 15, 2026 4:20 PM', user: 'Admin User' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Class & Section</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Class & Section Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Create and manage classes and sections for all programs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Class/Section
            <ChevronDown className="w-4 h-4 ml-1" />
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

      {/* Navigation Tabs */}
      <div className="flex items-center gap-6 border-b border-slate-200 mb-6">
        <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-3 px-1">Classes</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 border-b-2 border-transparent px-1">Sections</button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:max-w-[320px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search Class</span>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by class name or program..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Programs</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Year Levels</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-40">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full shrink-0">
          <button className="h-[38px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2 rounded-lg text-[13px] font-bold transition-colors w-full xl:w-auto">
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Code</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Sections</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Students</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classesList.map((cls, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-[13px] font-bold text-slate-700">{cls.code}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-bold text-[#0B1A3D]">{cls.name}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[12px] font-medium text-blue-600 max-w-[200px] leading-tight">{cls.program}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-medium text-slate-600">{cls.year}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{cls.sections}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{cls.students}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${cls.status === 'Active' ? 'text-emerald-600 bg-emerald-50 border border-emerald-100' : 'text-rose-500 bg-rose-50 border border-rose-100'}`}>
                      {cls.status}
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
                      <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors" title="More actions">
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
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
          <p className="text-[12px] font-medium text-slate-500">
            Showing 1 to 6 of 48 classes
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
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">8</button>
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

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Overview (Charts) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-[15px] font-black text-[#0B1A3D] mb-6">Quick Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sections per Program Donut */}
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold text-slate-700 mb-4 text-center">Sections per Program</h3>
              <div className="flex items-center justify-between gap-4">
                <div className="relative w-32 h-32 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="134.8" className="transition-all duration-1000" /> {/* BSCS 38.7% blue */}
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="163.1" className="transition-all duration-1000 transform -rotate-[139.3deg] origin-center" /> {/* BSIT 25.8% green */}
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="177.2" className="transition-all duration-1000 transform -rotate-[232.2deg] origin-center" /> {/* BSEd 19.4% yellow */}
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#a855f7" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="198.5" className="transition-all duration-1000 transform -rotate-[302.0deg] origin-center" /> {/* BEEd 9.7% purple */}
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="205.8" className="transition-all duration-1000 transform -rotate-[336.9deg] origin-center" /> {/* BAEL 6.4% red */}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-8">
                    <span className="text-[16px] font-black text-[#0B1A3D] leading-none">124</span>
                    <span className="text-[9px] font-bold text-slate-400 mt-0.5">Total</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'BSCS', count: '48 (38.7%)', color: 'bg-blue-500' },
                    { name: 'BSIT', count: '32 (25.8%)', color: 'bg-emerald-500' },
                    { name: 'BSEd', count: '24 (19.4%)', color: 'bg-amber-500' },
                    { name: 'BEEd', count: '12 (9.7%)', color: 'bg-purple-500' },
                    { name: 'BAEL', count: '8 (6.4%)', color: 'bg-rose-500' },
                  ].map(prog => (
                    <div key={prog.name} className="flex items-center gap-3">
                      <div className="flex items-center gap-2 w-12">
                        <span className={`w-2 h-2 rounded-full ${prog.color}`}></span>
                        <span className="text-[11px] font-bold text-slate-700 leading-tight">{prog.name}</span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 leading-tight">{prog.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section Status Donut */}
            <div className="flex flex-col border-l border-slate-100 md:pl-8">
              <h3 className="text-[13px] font-bold text-slate-700 mb-4 text-center">Section Status</h3>
              <div className="flex items-center justify-center gap-6">
                <div className="relative w-32 h-32 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="21.3" className="transition-all duration-1000" /> {/* Active 90.3% green */}
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="30" strokeDasharray="219.9" strokeDashoffset="198.6" className="transition-all duration-1000 transform -rotate-[325deg] origin-center" /> {/* Inactive 9.7% red */}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-8">
                    <span className="text-[16px] font-black text-[#0B1A3D] leading-none">124</span>
                    <span className="text-[9px] font-bold text-slate-400 mt-0.5">Total</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 w-16">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">Active</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 leading-tight">112 (90.3%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 w-16">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span className="text-[11px] font-bold text-slate-700 leading-tight">Inactive</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 leading-tight">12 (9.7%)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-[15px] font-black text-[#0B1A3D]">Recent Activities</h2>
            <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {activities.map((act, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${act.bg} ${act.color}`}>
                  <act.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-bold text-[#0B1A3D] leading-snug">
                    {act.title}
                  </p>
                  <p className="text-[10px] font-medium text-slate-400 mt-1">{act.time}</p>
                </div>
                <span className="text-[10px] font-semibold text-slate-500">{act.user}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
