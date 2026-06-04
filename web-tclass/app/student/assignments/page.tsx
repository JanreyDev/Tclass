import React from 'react';
import { 
  FileText,
  CheckSquare,
  Clock,
  AlertCircle,
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bell,
  CalendarDays,
  FileBox,
  Hourglass,
  Presentation,
  BookMarked
} from 'lucide-react';

export default function AssignmentsPage() {
  const assignments = [
    { 
      title: 'Case Study Analysis', 
      desc: 'Analyze the given case study and answer the questions.', 
      code: 'FSM 314', 
      subject: 'Product Design, Packaging and Labelling', 
      due: 'May 22, 2024\n11:59 PM', 
      status: 'In Progress', 
      statusColor: 'bg-blue-50 text-blue-600',
      submission: 'Not Submitted',
      subColor: 'text-rose-500',
      pts: '0 / 100 pts',
      grade: '-',
      icon: FileText,
      iconColor: 'text-blue-500 bg-blue-50'
    },
    { 
      title: 'Research Proposal Draft', 
      desc: 'Submit your research proposal draft for review.', 
      code: 'TEC 302', 
      subject: 'Research 2 – Undergraduate Thesis', 
      due: 'May 24, 2024\n11:59 PM', 
      status: 'Upcoming', 
      statusColor: 'bg-purple-50 text-purple-600',
      submission: '-',
      subColor: 'text-slate-500',
      pts: '',
      grade: '-',
      icon: Hourglass,
      iconColor: 'text-rose-500 bg-rose-50'
    },
    { 
      title: 'Lesson Plan Development', 
      desc: 'Create a detailed lesson plan for the topic assigned.', 
      code: 'EDUC 204', 
      subject: 'Technology for Teaching and Learning 1', 
      due: 'May 27, 2024\n11:59 PM', 
      status: 'Submitted', 
      statusColor: 'bg-emerald-50 text-emerald-600',
      submission: 'May 26, 2024\n9:15 PM',
      subColor: 'text-slate-800',
      pts: '',
      grade: '92 / 100\nA',
      gradeColor: 'text-emerald-600 font-black',
      icon: BookMarked,
      iconColor: 'text-emerald-500 bg-emerald-50'
    },
    { 
      title: 'Reflection Journal #3', 
      desc: 'Write your reflection about the topic discussed.', 
      code: 'PATHFit 2', 
      subject: 'Physical Activities Toward Health and Fitness 2', 
      due: 'May 28, 2024\n11:59 PM', 
      status: 'Overdue', 
      statusColor: 'bg-rose-50 text-rose-600',
      submission: 'Not Submitted',
      subColor: 'text-rose-500',
      pts: '0 / 50 pts',
      grade: '-',
      icon: FileBox,
      iconColor: 'text-amber-500 bg-amber-50'
    },
    { 
      title: 'Group Presentation', 
      desc: 'Prepare and submit your group presentation.', 
      code: 'EDUC 251', 
      subject: 'Facilitating Learner-Centered Teaching', 
      due: 'May 30, 2024\n11:59 PM', 
      status: 'In Progress', 
      statusColor: 'bg-blue-50 text-blue-600',
      submission: 'Not Submitted',
      subColor: 'text-rose-500',
      pts: '0 / 100 pts',
      grade: '-',
      icon: Presentation,
      iconColor: 'text-purple-500 bg-purple-50'
    },
    { 
      title: 'Final Project', 
      desc: 'Submit the final project with complete requirements.', 
      code: 'EDUC 255', 
      subject: 'Curriculum Development and Evaluation', 
      due: 'Jun 05, 2024\n11:59 PM', 
      status: 'Upcoming', 
      statusColor: 'bg-purple-50 text-purple-600',
      submission: '-',
      subColor: 'text-slate-500',
      pts: '',
      grade: '-',
      icon: CheckSquare,
      iconColor: 'text-emerald-500 bg-emerald-50'
    },
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Assignments</h1>
          <p className="text-sm font-medium text-slate-500">View and manage your assignments. Submit your work on time!</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col lg:flex-row items-center justify-between gap-5 mb-6">
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="flex items-end gap-3 w-full lg:w-auto mt-2 lg:mt-0">
          <div className="relative flex-1 lg:w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search assignment..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Assignments</p>
            <p className="text-[26px] font-black text-[#0B1A3D] leading-none tracking-tight mb-1">24</p>
            <p className="text-[12px] font-semibold text-slate-500">All Subject Assignments</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Completed</p>
            <p className="text-[26px] font-black text-[#0B1A3D] leading-none tracking-tight mb-1">10</p>
            <p className="text-[12px] font-semibold text-slate-500">41.67% of total</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-100">
            <FileBox className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Pending</p>
            <p className="text-[26px] font-black text-[#0B1A3D] leading-none tracking-tight mb-1">8</p>
            <p className="text-[12px] font-semibold text-slate-500">Due in the future</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 border border-rose-100">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Overdue</p>
            <p className="text-[26px] font-black text-[#0B1A3D] leading-none tracking-tight mb-1">6</p>
            <p className="text-[12px] font-semibold text-slate-500">Please submit ASAP</p>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white border border-slate-200 rounded-xl mb-6 overflow-hidden">
        
        {/* Tabs */}
        <div className="flex px-6 border-b border-slate-200 pt-2">
          <button className="px-5 py-4 text-sm font-bold text-blue-600 border-b-2 border-blue-600">
            All Assignments
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            To Do
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Submitted
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Graded
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-[350px]">Assignment</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Due Date</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submission</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Grade</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6">
                    <div className="flex gap-4 items-start">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-white/50 ${item.iconColor}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-black text-slate-800 mb-0.5 leading-snug">{item.title}</p>
                        <p className="text-[12px] font-medium text-slate-500 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-[13px] font-black text-slate-800 mb-0.5 leading-snug">{item.code}</p>
                    <p className="text-[12px] font-medium text-slate-500 leading-snug max-w-[200px]">{item.subject}</p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-[12px] font-semibold text-slate-700 whitespace-pre-line leading-tight">{item.due}</p>
                  </td>
                  <td className="py-5 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5 px-4">
                    <p className={`text-[12px] font-bold whitespace-pre-line leading-tight mb-0.5 ${item.subColor}`}>{item.submission}</p>
                    {item.pts && <p className="text-[11px] font-semibold text-slate-400">{item.pts}</p>}
                  </td>
                  <td className="py-5 px-4">
                    <p className={`text-[12px] whitespace-pre-line leading-tight ${item.gradeColor || 'text-slate-400 font-bold'}`}>
                      {item.grade}
                    </p>
                  </td>
                  <td className="py-5 px-6">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-200 text-blue-600 rounded-md text-[11px] font-bold hover:bg-blue-50 transition-colors bg-white">
                      View Details <ChevronDown className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-semibold text-slate-500">Showing 1 to 6 of 24 assignments</p>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-50 text-blue-600 font-bold text-[12px]">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-600 font-bold text-[12px] transition-colors">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-600 font-bold text-[12px] transition-colors">
              3
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-600 font-bold text-[12px] transition-colors">
              4
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 text-slate-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Reminder Card */}
      <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-blue-100 shadow-sm mt-0.5">
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-0.5">Reminder</h3>
            <p className="text-[13px] font-medium text-slate-600">Late submissions may incur penalties. Make sure to submit your assignments before the due date.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0 shadow-sm sm:ml-4">
          <CalendarDays className="w-4 h-4" />
          View Calendar
        </button>
      </div>

    </div>
  );
}
