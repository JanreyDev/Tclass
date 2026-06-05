import React from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  UserMinus, 
  UserPlus, 
  Download, 
  Plus, 
  Search, 
  ChevronDown, 
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
  FileText
} from 'lucide-react';

export default function AdminStudentListPage() {
  const stats = [
    { title: 'Total Students', value: '1,248', desc: 'All programs', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Students', value: '1,156', desc: '92.6% of total', trend: '↑ 2.4%', trendDesc: 'vs last semester', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Inactive Students', value: '72', desc: '5.8% of total', trend: '↑ 1.1%', trendDesc: 'vs last semester', icon: UserMinus, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'New This Semester', value: '312', desc: '25.0% of total', trend: '↑ 12.4%', trendDesc: 'vs last semester', icon: UserPlus, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
  ];

  const students = [
    { id: '2023-10001', name: 'Dela Cruz, Juan Miguel', code: 'BSCS', progName: 'BS in Computer Science', year: '2nd Year', section: 'BSCS 2A', status: 'Active', email: 'juan.delacruz@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10002', name: 'Santos, Maria Isabel', code: 'BSIT', progName: 'BS in Information Tech.', year: '3rd Year', section: 'BSIT 3B', status: 'Active', email: 'maria.santos@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10003', name: 'Reyes, Christian Paul', code: 'BSCS', progName: 'BS in Computer Science', year: '1st Year', section: 'BSCS 1A', status: 'Active', email: 'christian.reyes@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10004', name: 'Garcia, Andrea Mae', code: 'BSEd', progName: 'BS in Secondary Ed.', year: '2nd Year', section: 'BSEd 2A', status: 'Active', email: 'andrea.garcia@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10005', name: 'Lopez, Mark Daniel', code: 'BSIT', progName: 'BS in Information Tech.', year: '4th Year', section: 'BSIT 4A', status: 'On Hold', email: 'mark.lopez@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10006', name: 'Cruz, Patricia Anne', code: 'BSCS', progName: 'BS in Computer Science', year: '2nd Year', section: 'BSCS 2B', status: 'Active', email: 'patricia.cruz@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10007', name: 'Manalo, Carl John', code: 'BSIT', progName: 'BS in Information Tech.', year: '1st Year', section: 'BSIT 1B', status: 'Active', email: 'carl.manalo@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10008', name: 'Dizon, Leanne Marie', code: 'BSEd', progName: 'BS in Secondary Ed.', year: '3rd Year', section: 'BSEd 3A', status: 'Inactive', email: 'leanne.dizon@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10009', name: 'Villanueva, Joshua', code: 'BSCS', progName: 'BS in Computer Science', year: '2nd Year', section: 'BSCS 2A', status: 'Active', email: 'joshua.villanueva@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop' },
    { id: '2023-10010', name: 'Mendoza, Alyssa Jane', code: 'BSIT', progName: 'BS in Information Tech.', year: '4th Year', section: 'BSIT 4B', status: 'Active', email: 'alyssa.mendoza@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'On Hold': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'Inactive': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Students</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Student List</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Student List</h1>
          <p className="text-[13px] font-medium text-slate-500">View and manage all enrolled students.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export List
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Student
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
              {stat.trend && (
                <div className="text-right">
                  <p className={`text-[12px] font-bold ${stat.trendColor} leading-none mb-1`}>{stat.trend}</p>
                  <p className="text-[10px] font-medium text-slate-400 leading-none">{stat.trendDesc}</p>
                </div>
              )}
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

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Col: Table Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          
          {/* Filters */}
          <div className="p-4 border-b border-slate-100 flex flex-wrap lg:flex-nowrap items-end gap-4 bg-slate-50/30">
            <div className="flex flex-col gap-1.5 w-full lg:flex-1 lg:min-w-[200px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search</span>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by name, ID, or email..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Programs</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Year Levels</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Status</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Section</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Sections</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="py-3 px-4 w-10">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 cursor-pointer" />
                  </th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Student ID</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Program</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Year Level</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Section</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 cursor-pointer" />
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-medium text-slate-500">{student.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2.5">
                        <img src={student.avatar} alt={student.name} className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0" />
                        <span className="text-[12px] font-bold text-[#0B1A3D]">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <p className="text-[11px] font-bold text-slate-700 leading-tight">{student.code}</p>
                      <p className="text-[10px] font-medium text-slate-400 leading-tight truncate max-w-[120px]">{student.progName}</p>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-medium text-slate-600">{student.year}</span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[12px] font-medium text-slate-600">{student.section}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${getStatusStyle(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[11px] font-medium text-blue-600 hover:underline cursor-pointer truncate max-w-[140px] inline-block align-bottom">{student.email}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded-lg transition-colors" title="View">
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
              Showing 1 to 10 of 1,248 students
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[12px]">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">2</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">3</button>
                <span className="text-slate-400 px-0.5">...</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">125</button>
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

        {/* Right Col: Charts sidebar */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Students by Program */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Students by Program</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="129.7" className="transition-all duration-1000" /> {/* BSCS 41% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="163.6" className="transition-all duration-1000 transform -rotate-[147.6deg] origin-center" /> {/* BSIT 25.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="184.7" className="transition-all duration-1000 transform -rotate-[239.7deg] origin-center" /> {/* BSEd 16% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#a855f7" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="198.7" className="transition-all duration-1000 transform -rotate-[297.3deg] origin-center" /> {/* BEEd 9.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="202.7" className="transition-all duration-1000 transform -rotate-[331.9deg] origin-center" /> {/* BAEL 7.8% */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[13px] font-black text-[#0B1A3D] leading-none">1,248</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {[
                  { name: 'BSCS', count: '512 (41.0%)', color: 'bg-blue-500' },
                  { name: 'BSIT', count: '320 (25.6%)', color: 'bg-emerald-500' },
                  { name: 'BSEd', count: '200 (16.0%)', color: 'bg-amber-500' },
                  { name: 'BEEd', count: '120 (9.6%)', color: 'bg-purple-500' },
                  { name: 'BAEL', count: '96 (7.8%)', color: 'bg-rose-500' },
                ].map(prog => (
                  <div key={prog.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${prog.color}`}></span>
                      <span className="text-[10px] font-bold text-slate-700">{prog.name}</span>
                    </div>
                    <span className="text-[9px] font-medium text-slate-500">{prog.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Students by Year Level */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Students by Year Level</h3>
            <div className="flex flex-col gap-3.5">
              {[
                { name: '1st Year', count: '356 (28.5%)', w: 'w-[100%]', color: 'bg-blue-600' },
                { name: '2nd Year', count: '402 (32.2%)', w: 'w-[110%]', color: 'bg-emerald-600' },
                { name: '3rd Year', count: '298 (23.9%)', w: 'w-[80%]', color: 'bg-amber-500' },
                { name: '4th Year', count: '192 (15.4%)', w: 'w-[55%]', color: 'bg-purple-500' },
              ].map(year => (
                <div key={year.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-600">{year.name}</span>
                    <span className="text-[10px] font-bold text-[#0B1A3D]">{year.count.split(' ')[0]} <span className="font-medium text-slate-400">{year.count.split(' ')[1]}</span></span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                    {/* The 2nd year is the max width, so scale others relatively. Hardcoded widths just for visual rep */}
                    <div className={`h-full ${year.color} rounded-full`} style={{ width: year.w === 'w-[110%]' ? '100%' : year.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Status */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Student Status</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="16.2" className="transition-all duration-1000" /> {/* Active 92.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="216.3" className="transition-all duration-1000 transform -rotate-[333.3deg] origin-center" /> {/* On Hold 1.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="207.1" className="transition-all duration-1000 transform -rotate-[339deg] origin-center" /> {/* Inactive 5.8% */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[13px] font-black text-[#0B1A3D] leading-none">1,248</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {[
                  { name: 'Active', count: '1,156 (92.6%)', color: 'bg-emerald-500' },
                  { name: 'On Hold', count: '20 (1.6%)', color: 'bg-amber-500' },
                  { name: 'Inactive', count: '72 (5.8%)', color: 'bg-rose-500' },
                ].map(stat => (
                  <div key={stat.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${stat.color}`}></span>
                      <span className="text-[10px] font-bold text-slate-700">{stat.name}</span>
                    </div>
                    <span className="text-[9px] font-medium text-slate-500">{stat.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="flex items-center justify-center gap-2 w-full bg-white border border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 text-blue-600 py-3 rounded-xl text-[12px] font-bold transition-colors">
            <FileText className="w-4 h-4" />
            View Student Reports
          </button>

        </div>
      </div>
    </div>
  );
}
