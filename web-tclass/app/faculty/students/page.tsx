import React from 'react';
import { 
  Upload, 
  Download, 
  Plus, 
  Users, 
  UserCheck, 
  UserMinus, 
  GraduationCap,
  Search,
  Filter,
  ChevronDown,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Info,
  BookOpen
} from 'lucide-react';

export default function FacultyStudentsPage() {
  const stats = [
    { title: 'Total Students', value: '142', desc: 'Across all classes', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Students', value: '136', desc: '95.8% active', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Inactive Students', value: '6', desc: '4.2% inactive', icon: UserMinus, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'New This Semester', value: '18', desc: '12.7% new', icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const students = [
    { id: '2023200101', name: 'Dela Cruz, Juan Miguel', class: 'CCS 201', program: 'BSCS 2A', email: 'juan.delacruz@tclass.edu.ph', status: 'Active' },
    { id: '2023200102', name: 'Reyes, Maria Isabel', class: 'CCS 204', program: 'BSCS 2B', email: 'maria.reyes@tclass.edu.ph', status: 'Active' },
    { id: '2023200103', name: 'Santos, Christian Paul', class: 'CCS 201', program: 'BSCS 2A', email: 'christian.santos@tclass.edu.ph', status: 'Active' },
    { id: '2023200104', name: 'Garcia, Angela Mae', class: 'CCS 302', program: 'BSCS 3A', email: 'angela.garcia@tclass.edu.ph', status: 'Active' },
    { id: '2023200105', name: 'Mendoza, John Carlo', class: 'CCS 305', program: 'BSCS 3B', email: 'john.mendoza@tclass.edu.ph', status: 'Inactive' },
    { id: '2023200106', name: 'Villanueva, Patricio', class: 'CCS 204', program: 'BSCS 2B', email: 'patricio.villanueva@tclass.edu.ph', status: 'Active' },
    { id: '2023200107', name: 'Castillo, Lianne Kate', class: 'CCS 402', program: 'BSCS 4A', email: 'lianne.castillo@tclass.edu.ph', status: 'Active' },
    { id: '2023200108', name: 'Aquino, Mark Daniel', class: 'CCS 302', program: 'BSCS 3A', email: 'mark.aquino@tclass.edu.ph', status: 'Active' },
    { id: '2023200109', name: 'Torres, Erika Mae', class: 'CCS 201', program: 'BSCS 2A', email: 'erika.torres@tclass.edu.ph', status: 'Active' },
    { id: '2023200110', name: 'Cruz, Adrian Luis', class: 'CCS 305', program: 'BSCS 3B', email: 'adrian.cruz@tclass.edu.ph', status: 'Inactive' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Students List</h1>
          <p className="text-[13px] font-medium text-slate-500">View and manage your students.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors">
            <Upload className="w-4 h-4" />
            Import Students
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Student
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.title}</p>
              <p className="text-[22px] font-black text-slate-800 leading-none mb-1.5 mt-1">{stat.value}</p>
              <p className="text-[12px] font-medium text-slate-500">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
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
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full">
          <div className="relative flex-1 xl:w-64 mt-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="h-[42px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6 flex flex-col">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-[15px] font-black text-[#0B1A3D]">Students (142)</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12 text-center">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student ID</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 px-6 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-semibold text-slate-500">{stu.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[12px] shrink-0 border border-blue-200">
                        {stu.name.charAt(0)}
                      </div>
                      <span className="text-[13px] font-bold text-[#0B1A3D]">{stu.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{stu.class}</td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{stu.program}</td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-500">{stu.email}</td>
                  <td className="py-4 px-4 text-center">
                    {stu.status === 'Active' ? (
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                        Active
                      </span>
                    ) : (
                      <span className="bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors" title="More options">
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
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-medium text-slate-500">
            Showing 1 to 10 of 142 students
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">15</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 ml-2">
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

      {/* Info Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 mt-0.5">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">Manage your students easily</h3>
            <p className="text-[13px] font-medium text-slate-600">You can view student profiles, contact details, class enrollment, and academic history.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-blue-600 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors shrink-0 md:ml-4">
          <BookOpen className="w-4 h-4" />
          View Student Guide
        </button>
      </div>

    </div>
  );
}
