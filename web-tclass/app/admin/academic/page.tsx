import React from 'react';
import { 
  Plus, 
  ChevronDown, 
  Book, 
  Calendar, 
  BookOpen, 
  ClipboardList, 
  Users, 
  Monitor,
  ChevronRight,
  Settings,
  FileText,
  FileEdit,
  Eye,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight as ChevronRightSmall
} from 'lucide-react';

export default function AdminAcademicManagementPage() {
  const stats = [
    { title: 'Academic Years', value: '4', desc: 'Total', icon: Book, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Semesters', value: '8', desc: 'Total', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Programs', value: '6', desc: 'Total', icon: BookOpen, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Subjects', value: '124', desc: 'Total', icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Sections', value: '36', desc: 'Total', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Rooms', value: '24', desc: 'Total', icon: Monitor, color: 'text-teal-600', bg: 'bg-teal-50' },
  ];

  const activities = [
    { icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'New subject "Data Structures and Algorithms"', desc: 'added under BSCS Program', time: 'May 16, 2026 10:30 AM', user: 'Admin User' },
    { icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50', title: 'New program "Bachelor of Information Technology"', desc: 'has been created', time: 'May 15, 2026 2:45 PM', user: 'Admin User' },
    { icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-50', title: '2nd Semester for Academic Year 2025-2026', desc: 'has been activated', time: 'May 15, 2026 9:15 AM', user: 'Admin User' },
    { icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Room "L205 - Computer Lab 2" has been added', desc: '', time: 'May 14, 2026 4:20 PM', user: 'Admin User' },
    { icon: FileEdit, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Subject "Discrete Mathematics"', desc: 'has been updated', time: 'May 14, 2026 11:05 AM', user: 'Admin User' },
  ];

  const programs = [
    { code: 'BSCS', name: 'Bachelor of Science in Computer Science', dept: 'Computer Studies Department', subjects: 28, sections: 8, status: 'Active' },
    { code: 'BSIT', name: 'Bachelor of Science in Information Technology', dept: 'Computer Studies Department', subjects: 26, sections: 7, status: 'Active' },
    { code: 'BSEd', name: 'Bachelor of Secondary Education', dept: 'General Education Department', subjects: 32, sections: 10, status: 'Active' },
    { code: 'BEEd', name: 'Bachelor of Elementary Education', dept: 'General Education Department', subjects: 24, sections: 6, status: 'Active' },
    { code: 'BAEL', name: 'Bachelor of Arts in English Language', dept: 'Humanities Department', subjects: 14, sections: 5, status: 'Active' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Academic Management</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Academic Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Manage academic structure and settings of the institution.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add New
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-6 overflow-x-auto w-full border-b border-slate-200 mb-8 no-scrollbar">
        <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-3 whitespace-nowrap px-1">Overview</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Programs</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Academic Years</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Semesters</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Subjects</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Sections</button>
        <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent px-1">Rooms</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-center items-center text-center hover:border-blue-200 transition-colors">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mb-3 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.title}</p>
            <p className="text-[20px] font-black text-[#0B1A3D] leading-none mb-1">{stat.value}</p>
            <p className="text-[11px] font-medium text-slate-500">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Main 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Academic Structure */}
        <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-[15px] font-black text-[#0B1A3D] mb-1">Academic Structure</h2>
            <p className="text-[12px] font-medium text-slate-500">Overview of academic structure for the current school year.</p>
          </div>
          <div className="p-6 flex-1">
            
            {/* Current Year (Expanded) */}
            <div className="mb-4">
              <div className="flex items-center justify-between py-3 px-4 bg-blue-50/50 rounded-lg border border-blue-100 mb-2 cursor-pointer">
                <div className="flex items-center gap-3">
                  <ChevronDown className="w-4 h-4 text-blue-600" />
                  <span className="text-[13px] font-bold text-blue-600">Academic Year 2025-2026</span>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Current</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500">
                  <span>2 Semesters</span>
                  <span>6 Programs</span>
                  <span>124 Subjects</span>
                </div>
              </div>
              
              {/* Semesters inside Current Year */}
              <div className="pl-11 pr-4 py-2 flex flex-col gap-2 relative">
                {/* Vertical line indicator */}
                <div className="absolute left-6 top-0 bottom-4 w-px bg-slate-200"></div>
                
                <div className="flex items-center justify-between py-2 border-b border-slate-100 relative">
                  <div className="absolute left-[-20px] top-1/2 w-4 h-px bg-slate-200"></div>
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[13px] font-semibold text-slate-700">1st Semester</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Current</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
                    <span>6 Programs</span>
                    <span>62 Subjects</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-2 relative">
                  <div className="absolute left-[-20px] top-1/2 w-4 h-px bg-slate-200"></div>
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[13px] font-semibold text-slate-700">2nd Semester</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
                    <span>6 Programs</span>
                    <span>62 Subjects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Years (Collapsed) */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <span className="text-[13px] font-semibold text-slate-700">Academic Year 2024-2025</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
                <span>2 Semesters</span>
                <span>6 Programs</span>
                <span>118 Subjects</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 px-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <span className="text-[13px] font-semibold text-slate-700">Academic Year 2023-2024</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
                <span>2 Semesters</span>
                <span>6 Programs</span>
                <span>112 Subjects</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 px-4 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <span className="text-[13px] font-semibold text-slate-700">Academic Year 2022-2023</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
                <span>2 Semesters</span>
                <span>5 Programs</span>
                <span>98 Subjects</span>
              </div>
            </div>

          </div>
          <div className="p-4 border-t border-slate-100 flex items-center justify-center bg-slate-50/50">
            <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors">
              <Settings className="w-4 h-4" />
              Manage Academic Structure
            </button>
          </div>
        </div>

        {/* Recent Academic Activities */}
        <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-[15px] font-black text-[#0B1A3D]">Recent Academic Activities</h2>
            <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {activities.map((act, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${act.bg} ${act.color}`}>
                  <act.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-[#0B1A3D] leading-snug">
                    {act.title}
                  </p>
                  {act.desc && <p className="text-[13px] font-medium text-slate-600 leading-snug">{act.desc}</p>}
                  <p className="text-[11px] font-medium text-slate-400 mt-1">{act.time}</p>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">{act.user}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Programs Overview Table */}
      <div className="bg-white border border-slate-200 rounded-2xl flex flex-col flex-1 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-[15px] font-black text-[#0B1A3D]">Programs Overview</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program Code</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Total Subjects</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Total Sections</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((prog, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-[13px] font-bold text-slate-700">{prog.code}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-bold text-[#0B1A3D]">{prog.name}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[12px] font-medium text-slate-600">{prog.dept}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{prog.subjects}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-semibold text-slate-700">{prog.sections}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                      {prog.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="Edit program">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-rose-500 hover:bg-rose-50 p-1.5 rounded-lg transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
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
            Showing 1 to 5 of 6 programs
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRightSmall className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 sm:ml-2">
              <span className="text-[12px] font-medium text-slate-500">Rows per page:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
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
