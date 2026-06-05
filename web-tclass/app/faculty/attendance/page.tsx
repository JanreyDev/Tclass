import React from 'react';
import { 
  ChevronDown, 
  Settings, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Code,
  Users,
  CheckCircle2,
  Clock,
  XCircle,
  BarChart3,
  Check,
  X,
  MessageSquare,
  History,
  Info,
  Calendar as CalendarIcon
} from 'lucide-react';

export default function FacultyAttendancePage() {
  const stats = [
    { title: 'Total Students', value: '28', desc: 'Enrolled', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Present', value: '22', desc: '78.57%', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Late', value: '3', desc: '10.71%', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Absent', value: '3', desc: '10.71%', icon: XCircle, color: 'text-rose-500', bg: 'bg-rose-50' },
    { title: 'Attendance Rate', value: '89.29%', desc: 'For this session', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const students = [
    { id: 1, sno: '2023200101', name: 'Dela Cruz, Juan Miguel', status: 'Present', time: '-', remark: '-' },
    { id: 2, sno: '2023200102', name: 'Reyes, Maria Isabel', status: 'Late', time: '10:08 AM', remark: 'Traffic' },
    { id: 3, sno: '2023200103', name: 'Santos, Christian Paul', status: 'Present', time: '-', remark: '-' },
    { id: 4, sno: '2023200104', name: 'Garcia, Angela Mae', status: 'Present', time: '-', remark: '-' },
    { id: 5, sno: '2023200105', name: 'Mendoza, John Carlo', status: 'Absent', time: '-', remark: 'Sick (Medical)' },
    { id: 6, sno: '2023200106', name: 'Villanueva, Patricio', status: 'Late', time: '10:15 AM', remark: 'Overslept' },
    { id: 7, sno: '2023200107', name: 'Castillo, Lianne Kate', status: 'Present', time: '-', remark: '-' },
    { id: 8, sno: '2023200108', name: 'Aquino, Mark Daniel', status: 'Present', time: '-', remark: '-' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Present': return 'text-emerald-600 border-emerald-200 bg-emerald-50/50';
      case 'Late': return 'text-amber-500 border-amber-200 bg-amber-50/50';
      case 'Absent': return 'text-rose-500 border-rose-200 bg-rose-50/50';
      default: return 'text-slate-600 border-slate-200 bg-white';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Attendance</h1>
          <p className="text-[13px] font-medium text-slate-500">Record and manage class attendance.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Settings className="w-4 h-4" />
            Attendance Settings
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
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
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-[400px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>Data Structures and Algorithms (CCS 201)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 w-full xl:w-80 shrink-0">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</span>
          <div className="flex items-center bg-white border border-slate-200 rounded-lg">
            <div className="flex-1 flex items-center gap-2 pl-4 py-2.5">
              <CalendarIcon className="w-4 h-4 text-slate-400" />
              <span className="text-[13px] font-bold text-[#0B1A3D]">May 13, 2026 (Tuesday)</span>
            </div>
            <div className="flex items-center border-l border-slate-200">
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 border-r border-slate-200 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Class Info Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
            <Code className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-[18px] font-black text-[#0B1A3D] mb-1">CCS 201 - Data Structures and Algorithms</h2>
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <span className="text-slate-700 font-bold">BSCS 2A</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>28 Students</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Time</p>
            <p className="text-[13px] font-semibold text-slate-700">10:00 AM - 11:30 AM</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Room</p>
            <p className="text-[13px] font-semibold text-slate-700">L205 (Computer Lab 2)</p>
          </div>
          <div className="sm:col-span-2 xl:col-span-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Instructor</p>
            <p className="text-[13px] font-black text-[#0B1A3D]">Prof. Maria Dela Cruz</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-8">
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

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-[15px] font-black text-[#0B1A3D]">Student Attendance</h3>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">
            <Check className="w-3.5 h-3.5" />
            Mark All Present
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-rose-200 hover:border-rose-300 text-rose-500 px-4 py-2 rounded-lg text-[12px] font-bold transition-colors">
            <X className="w-3.5 h-3.5" />
            Mark All Absent
          </button>
          <div className="relative">
            <select className="appearance-none bg-white border border-blue-200 hover:border-blue-300 rounded-lg pl-4 pr-9 py-2 text-[12px] font-bold text-blue-600 focus:outline-none cursor-pointer transition-colors">
              <option>Bulk Actions</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-blue-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6 flex flex-col flex-1">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12 text-center">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                </th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-12">#</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student ID</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-48">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-32">Time (If Late)</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-48">Remarks</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-32">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-center">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                  </td>
                  <td className="py-4 px-4 text-[12px] font-bold text-slate-500 text-center">{stu.id}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600">{stu.sno}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[12px] shrink-0 border border-blue-200">
                        {stu.name.charAt(0)}
                      </div>
                      <span className="text-[13px] font-bold text-[#0B1A3D]">{stu.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="relative inline-block w-32">
                      <select className={`w-full appearance-none border rounded-lg pl-3 pr-8 py-2 text-[12px] font-bold focus:outline-none cursor-pointer transition-colors ${getStatusStyle(stu.status)}`}>
                        <option value="Present" selected={stu.status === 'Present'}>Present</option>
                        <option value="Late" selected={stu.status === 'Late'}>Late</option>
                        <option value="Absent" selected={stu.status === 'Absent'}>Absent</option>
                        <option value="Excused" selected={stu.status === 'Excused'}>Excused</option>
                      </select>
                      <ChevronDown className={`w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${
                        stu.status === 'Present' ? 'text-emerald-500' :
                        stu.status === 'Late' ? 'text-amber-500' :
                        stu.status === 'Absent' ? 'text-rose-500' : 'text-slate-400'
                      }`} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-[12px] font-semibold ${stu.time !== '-' ? 'text-slate-700' : 'text-slate-400'}`}>
                      {stu.time}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <input 
                      type="text" 
                      defaultValue={stu.remark !== '-' ? stu.remark : ''} 
                      placeholder="-" 
                      className="w-full bg-transparent border border-transparent hover:border-slate-200 focus:border-blue-300 focus:bg-white rounded px-3 py-1.5 text-[12px] font-medium text-slate-600 placeholder:text-slate-300 transition-all focus:outline-none"
                    />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-blue-500 hover:text-blue-700 transition-colors" title="Message Student">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="text-blue-500 hover:text-blue-700 transition-colors" title="Attendance History">
                        <History className="w-4 h-4" />
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
            Showing 1 to 8 of 28 students
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">4</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Card / Footer */}
      <div className="bg-[#F8FAFC] border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-blue-200 mt-1 text-blue-600">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-[13px] font-black text-[#0B1A3D] mb-0.5">Note</h3>
            <p className="text-[12px] font-medium text-slate-600">Attendance will be saved automatically. You can edit records until the attendance for this session is locked.</p>
          </div>
        </div>
        <div className="md:text-right shrink-0">
          <p className="text-[11px] font-medium text-slate-500 mb-0.5">Last updated: May 13, 2026 10:25 AM</p>
          <p className="text-[11px] font-bold text-slate-600">by Prof. Maria Dela Cruz</p>
        </div>
      </div>

    </div>
  );
}
