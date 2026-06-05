import React from 'react';
import { 
  Users, 
  UserCheck, 
  UserMinus, 
  UserPlus, 
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
  UserPlus as UserPlusLink,
  FileBarChart,
  Calendar,
  FileDown
} from 'lucide-react';

export default function AdminFacultyListPage() {
  const stats = [
    { title: 'Total Faculty', value: '86', desc: 'All departments', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Faculty', value: '76', desc: '88.4% of total', trend: '↑ 2.3%', trendDesc: 'vs last semester', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Inactive Faculty', value: '8', desc: '9.3% of total', trend: '↓ 1.0%', trendDesc: 'vs last semester', icon: UserMinus, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'New This Semester', value: '12', desc: '14.0% of total', trend: '↑ 9.1%', trendDesc: 'vs last semester', icon: UserPlus, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-emerald-600' },
  ];

  const facultyList = [
    { id: 'FAC-0001', name: 'Dela Cruz, Maria Isabel', dept: 'Computer Studies Department', designation: 'Professor', subjects: 6, status: 'Active', email: 'maria.delacruz@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0002', name: 'Santos, Juan Miguel', dept: 'Computer Studies Department', designation: 'Associate Professor', subjects: 5, status: 'Active', email: 'juan.santos@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0003', name: 'Reyes, Ana Patricia', dept: 'General Education Department', designation: 'Assistant Professor', subjects: 4, status: 'Active', email: 'ana.reyes@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0004', name: 'Garcia, Christian Paul', dept: 'Information Technology Department', designation: 'Associate Professor', subjects: 5, status: 'Active', email: 'christian.garcia@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0005', name: 'Lopez, Liza Mae', dept: 'General Education Department', designation: 'Assistant Professor', subjects: 3, status: 'Active', email: 'liza.lopez@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0006', name: 'Mendoza, Carlo Daniel', dept: 'Engineering Department', designation: 'Professor', subjects: 4, status: 'Active', email: 'carlo.mendoza@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0007', name: 'Villanueva, Karen Grace', dept: 'Business Department', designation: 'Assistant Professor', subjects: 4, status: 'On Leave', email: 'karen.villanueva@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop' },
    { id: 'FAC-0008', name: 'Alvarez, Mark Joseph', dept: 'Computer Studies Department', designation: 'Associate Professor', subjects: 5, status: 'Inactive', email: 'mark.alvarez@tclass.edu.ph', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'On Leave': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'Inactive': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  const getDesignationStyle = (designation: string) => {
    switch(designation) {
      case 'Professor': return 'text-purple-600 bg-purple-50 border border-purple-100';
      case 'Associate Professor': return 'text-blue-600 bg-blue-50 border border-blue-100';
      case 'Assistant Professor': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Instructor': return 'text-amber-600 bg-amber-50 border border-amber-100';
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
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Faculty</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Faculty List</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Faculty List</h1>
          <p className="text-[13px] font-medium text-slate-500">View and manage all faculty members in the institution.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export List
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Faculty
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
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Departments</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Designation</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Designations</option>
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

            <div className="flex items-end gap-3 w-full sm:w-auto shrink-0">
              <button className="h-[38px] flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors w-full">
                <RotateCcw className="w-4 h-4" />
                Clear Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="py-3 px-6 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Faculty ID</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Faculty Name</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Department</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Designation</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Subjects Handled</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                  <th className="py-3 px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facultyList.map((faculty, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-6">
                      <span className="text-[12px] font-medium text-slate-500">{faculty.id}</span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2.5">
                        <img src={faculty.avatar} alt={faculty.name} className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0" />
                        <span className="text-[12px] font-bold text-[#0B1A3D]">{faculty.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <p className="text-[11px] font-medium text-slate-600 leading-tight max-w-[140px]">{faculty.dept}</p>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md inline-block ${getDesignationStyle(faculty.designation)}`}>
                        {faculty.designation}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className="text-[12px] font-semibold text-slate-700">{faculty.subjects}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${getStatusStyle(faculty.status)}`}>
                        {faculty.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-[11px] font-medium text-blue-600 hover:underline cursor-pointer truncate max-w-[150px] inline-block align-bottom">{faculty.email}</span>
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
              Showing 1 to 8 of 86 faculty members
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[12px]">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">2</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">3</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">4</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">5</button>
                <span className="text-slate-400 px-0.5">...</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">9</button>
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
          
          {/* Faculty by Department */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Faculty by Department</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="138" className="transition-all duration-1000" /> {/* Comp Stud 37.2% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="168.6" className="transition-all duration-1000 transform -rotate-[134deg] origin-center" /> {/* Gen Ed 23.3% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#a855f7" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="179.0" className="transition-all duration-1000 transform -rotate-[218deg] origin-center" /> {/* IT 18.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="194.4" className="transition-all duration-1000 transform -rotate-[285deg] origin-center" /> {/* Business 11.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="199.5" className="transition-all duration-1000 transform -rotate-[326.5deg] origin-center" /> {/* Eng 9.3% */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[13px] font-black text-[#0B1A3D] leading-none">86</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {[
                  { name: 'Computer Studies', count: '32 (37.2%)', color: 'bg-blue-500' },
                  { name: 'General Education', count: '20 (23.3%)', color: 'bg-emerald-500' },
                  { name: 'Information Technology', count: '16 (18.6%)', color: 'bg-purple-500' },
                  { name: 'Business', count: '10 (11.6%)', color: 'bg-amber-500' },
                  { name: 'Engineering', count: '8 (9.3%)', color: 'bg-rose-500' },
                ].map(dept => (
                  <div key={dept.name} className="flex items-center justify-between">
                    <div className="flex items-start gap-1.5 pt-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${dept.color}`}></span>
                      <span className="text-[10px] font-bold text-slate-700 leading-tight max-w-[80px]">{dept.name}</span>
                    </div>
                    <span className="text-[9px] font-medium text-slate-500 shrink-0">{dept.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Faculty by Designation */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Faculty by Designation</h3>
            <div className="flex flex-col gap-3.5">
              {[
                { name: 'Professor', count: '24 (27.9%)', w: 'w-[75%]', color: 'bg-purple-500' },
                { name: 'Associate Professor', count: '22 (25.6%)', w: 'w-[70%]', color: 'bg-blue-500' },
                { name: 'Assistant Professor', count: '32 (37.2%)', w: 'w-[100%]', color: 'bg-emerald-500' },
                { name: 'Instructor', count: '8 (9.3%)', w: 'w-[25%]', color: 'bg-amber-500' },
              ].map(desig => (
                <div key={desig.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-600">{desig.name}</span>
                    <span className="text-[10px] font-bold text-[#0B1A3D]">{desig.count.split(' ')[0]} <span className="font-medium text-slate-400">{desig.count.split(' ')[1]}</span></span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className={`h-full ${desig.color} rounded-full`} style={{ width: desig.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <UserPlusLink className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Add New Faculty</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">Register a new faculty member</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileBarChart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Faculty Reports</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">View faculty workload and reports</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Faculty Schedule</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">View teaching schedules</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Export Faculty Data</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">Download faculty list (PDF/Excel)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
