import React from 'react';
import { 
  Download, 
  Plus, 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  ClipboardList, 
  BarChart3,
  Calendar,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Info,
  ChevronDown
} from 'lucide-react';

export default function FacultyClassesPage() {
  const stats = [
    { title: 'Total Classes', value: '6', desc: 'Classes handled', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Total Students', value: '142', desc: 'Across all classes', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Total Units', value: '18', desc: 'Units handled', icon: ClipboardList, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Average Class Size', value: '24', desc: 'Students per class', icon: BarChart3, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  const classes = [
    {
      code: 'CCS 201',
      subjectTitle: 'Data Structures and Algorithms',
      subjectUnits: '3.00 Units',
      program: 'BSCS 2A',
      year: '2nd Year',
      scheduleDays: 'Mon & Wed',
      scheduleTime: '10:00 AM - 11:30 AM',
      roomName: 'L205',
      roomDesc: 'Computer Lab 2',
      students: 28,
      status: 'Active',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      code: 'CCS 204',
      subjectTitle: 'Web Development 1',
      subjectUnits: '3.00 Units',
      program: 'BSCS 2B',
      year: '2nd Year',
      scheduleDays: 'Tue & Thu',
      scheduleTime: '1:00 PM - 2:30 PM',
      roomName: 'L207',
      roomDesc: 'Computer Lab 3',
      students: 26,
      status: 'Active',
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50'
    },
    {
      code: 'CCS 302',
      subjectTitle: 'Database Management Systems',
      subjectUnits: '3.00 Units',
      program: 'BSCS 3A',
      year: '3rd Year',
      scheduleDays: 'Mon & Wed',
      scheduleTime: '1:00 PM - 2:30 PM',
      roomName: 'L203',
      roomDesc: 'Computer Lab 1',
      students: 25,
      status: 'Active',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      code: 'CCS 305',
      subjectTitle: 'Software Engineering',
      subjectUnits: '3.00 Units',
      program: 'BSCS 3B',
      year: '3rd Year',
      scheduleDays: 'Tue & Thu',
      scheduleTime: '10:00 AM - 11:30 AM',
      roomName: 'L206',
      roomDesc: 'Computer Lab 2',
      students: 24,
      status: 'Active',
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-50'
    },
    {
      code: 'CCS 402',
      subjectTitle: 'Capstone Project 1',
      subjectUnits: '3.00 Units',
      program: 'BSCS 4A',
      year: '4th Year',
      scheduleDays: 'Fri',
      scheduleTime: '1:00 PM - 4:00 PM',
      roomName: 'L208',
      roomDesc: 'Project Room',
      students: 22,
      status: 'Active',
      iconColor: 'text-pink-500',
      iconBg: 'bg-pink-50'
    },
    {
      code: 'CCS 499',
      subjectTitle: 'Practicum / Internship',
      subjectUnits: '3.00 Units',
      program: 'BSCS 4B',
      year: '4th Year',
      scheduleDays: 'Wed',
      scheduleTime: '8:00 AM - 12:00 PM',
      roomName: 'Off-site',
      roomDesc: '',
      students: 17,
      status: 'In Progress',
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-50'
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Class List</h1>
          <p className="text-[13px] font-medium text-slate-500">View and manage all the classes you are handling.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Class
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-8">
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
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Classes</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0">
          <div className="relative flex-1 xl:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search class or subject..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-black text-slate-800 leading-none">{stat.value}</span>
              </div>
              <p className="text-[12px] font-medium text-slate-500 mt-1">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-[16px] font-black text-[#0B1A3D]">Classes</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12"></th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Code</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program / Year</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Schedule</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Students</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cls.iconBg} ${cls.iconColor}`}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[13px] font-bold text-slate-800">{cls.code}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">{cls.subjectTitle}</p>
                    <p className="text-[11px] font-medium text-slate-500">{cls.subjectUnits}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-slate-700 mb-0.5">{cls.program}</p>
                    <p className="text-[11px] font-medium text-slate-500">{cls.year}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[12px] font-semibold text-slate-700">{cls.scheduleDays}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 ml-5 block">{cls.scheduleTime}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-slate-700 mb-0.5">{cls.roomName}</p>
                    {cls.roomDesc && <p className="text-[11px] font-medium text-slate-500">{cls.roomDesc}</p>}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-[13px] font-black text-slate-800">{cls.students}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    {cls.status === 'Active' ? (
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                        Active
                      </span>
                    ) : (
                      <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block">
                        In Progress
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
            Showing 1 to 6 of 6 classes
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">Need to make changes?</h3>
            <p className="text-[13px] font-medium text-slate-600">You can add, edit, or archive classes. Changes will reflect across your schedule and student records.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors shrink-0 md:ml-4">
          <Calendar className="w-4 h-4" />
          View Schedule
        </button>
      </div>

    </div>
  );
}
