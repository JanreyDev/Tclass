import React from 'react';
import { 
  Download, 
  Search, 
  Filter, 
  FileText, 
  BarChart2, 
  Star, 
  MessageSquare,
  Monitor,
  Globe,
  Database,
  Code,
  Laptop,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Info,
  ChevronDown,
  MoreVertical
} from 'lucide-react';

export default function FacultyEvaluationPage() {
  const stats = [
    { title: 'Overall Average', value: '4.42', max: '/ 5.00', subtitle: 'Very Satisfactory', desc: 'Across all evaluations', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Total Respondents', value: '142', max: '', subtitle: '100% of students', desc: 'Across all classes', icon: BarChart2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Overall Rating', value: '4.42', max: '/ 5.00', subtitle: 'Very Satisfactory', desc: '⭐⭐⭐⭐⭐', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Completed Evaluations', value: '6', max: ' / 6', subtitle: '100% completed', desc: 'Total classes', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const evaluations = [
    {
      class: 'CCS 201', program: 'BSCS 2A', subject: 'Data Structures and Algorithms',
      type: 'Faculty Evaluation', term: 'Midterm', respondents: '28 / 28', pct: '100%',
      score: '4.46', rating: 'Very Satisfactory', date: 'May 18, 2026', time: '2:35 PM',
      icon: Monitor, iconColor: 'text-indigo-600', iconBg: 'bg-indigo-50', badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    },
    {
      class: 'CCS 204', program: 'BSCS 2B', subject: 'Web Development 1',
      type: 'Faculty Evaluation', term: 'Midterm', respondents: '26 / 26', pct: '100%',
      score: '4.35', rating: 'Very Satisfactory', date: 'May 17, 2026', time: '11:20 AM',
      icon: Globe, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50', badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    },
    {
      class: 'CCS 302', program: 'BSCS 3A', subject: 'Database Management Systems',
      type: 'Faculty Evaluation', term: 'Midterm', respondents: '25 / 25', pct: '100%',
      score: '4.52', rating: 'Very Satisfactory', date: 'May 16, 2026', time: '3:10 PM',
      icon: Database, iconColor: 'text-amber-600', iconBg: 'bg-amber-50', badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    },
    {
      class: 'CCS 305', program: 'BSCS 3B', subject: 'Software Engineering',
      type: 'Faculty Evaluation', term: 'Midterm', respondents: '24 / 24', pct: '100%',
      score: '4.58', rating: 'Outstanding', date: 'May 15, 2026', time: '10:45 AM',
      icon: Code, iconColor: 'text-rose-600', iconBg: 'bg-rose-50', badgeColor: 'text-blue-700 bg-blue-50 border-blue-100'
    },
    {
      class: 'CCS 402', program: 'BSCS 4A', subject: 'Capstone Project 1',
      type: 'Faculty Evaluation', term: 'End of Term', respondents: '22 / 22', pct: '100%',
      score: '4.41', rating: 'Very Satisfactory', date: 'May 20, 2026', time: '1:05 PM',
      icon: Laptop, iconColor: 'text-cyan-600', iconBg: 'bg-cyan-50', badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    },
    {
      class: 'CCS 499', program: 'BSCS 4B', subject: 'Practicum / Internship',
      type: 'Faculty Evaluation', term: 'End of Term', respondents: '17 / 17', pct: '100%',
      score: '4.24', rating: 'Very Satisfactory', date: 'May 20, 2026', time: '9:30 AM',
      icon: Briefcase, iconColor: 'text-purple-600', iconBg: 'bg-purple-50', badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Faculty Evaluation</h1>
        <p className="text-[13px] font-medium text-slate-500">View evaluation results and feedback for your classes.</p>
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
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Classes</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Evaluation Type</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Types</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full">
          <button className="h-[42px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
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
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[22px] font-black text-slate-800 leading-none">{stat.value}</span>
                {stat.max && <span className="text-[14px] font-bold text-slate-400">{stat.max}</span>}
              </div>
              {idx === 2 ? (
                <div className="flex gap-0.5 mb-1 mt-1.5">
                  {[1, 2, 3, 4].map(star => <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  <Star className="w-3.5 h-3.5 fill-amber-400/50 text-amber-400" />
                </div>
              ) : (
                <p className={`text-[12px] font-bold mb-0.5 ${idx === 0 ? 'text-emerald-600' : 'text-slate-700'}`}>{stat.subtitle}</p>
              )}
              
              <p className="text-[11px] font-medium text-slate-400">{idx === 2 ? 'Very Satisfactory' : stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs and Search Area */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4 border-b border-slate-200 pb-4 lg:pb-0">
        <div className="flex items-center gap-6 overflow-x-auto w-full lg:w-auto no-scrollbar">
          <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-3 whitespace-nowrap">Evaluation Results</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Summary by Criteria</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Comments</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Exported Reports</button>
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0 pb-3">
          <div className="relative flex-1 lg:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search evaluation..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors shrink-0">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6">
        <div className="p-5 border-b border-slate-100">
          <h2 className="text-[15px] font-black text-[#0B1A3D]">Evaluation Results</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12"></th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Evaluation Type</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Respondents</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Average Score</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rating</th>
                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Completed</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {evaluations.map((ev, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${ev.iconBg} ${ev.iconColor}`}>
                      <ev.icon className="w-5 h-5" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5">{ev.class}</p>
                    <p className="text-[11px] font-medium text-slate-500">{ev.program}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-slate-700 w-[180px] leading-tight">{ev.subject}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-slate-700 mb-0.5">{ev.type}</p>
                    <p className="text-[11px] font-medium text-slate-500">{ev.term}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-bold text-slate-700 mb-0.5">{ev.respondents}</p>
                    <p className="text-[11px] font-medium text-slate-500">{ev.pct}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[13px] font-black text-slate-800">{ev.score}</span>
                      <span className="text-[11px] font-medium text-slate-500">/ 5.00</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`border text-[10px] font-bold px-2.5 py-1 rounded-md inline-block whitespace-nowrap ${ev.badgeColor}`}>
                      {ev.rating}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[12px] font-semibold text-slate-700 mb-0.5">{ev.date}</p>
                    <p className="text-[11px] font-medium text-slate-500">{ev.time}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 text-[11px] font-bold border border-blue-200 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                        View Details
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
            Showing 1 to 6 of 6 evaluations
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
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 mt-0.5">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">About Faculty Evaluation</h3>
            <p className="text-[13px] font-medium text-slate-600">Results are based on student feedback to help improve teaching effectiveness and learning experience.</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-blue-600 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors shrink-0 md:ml-4">
          <FileText className="w-4 h-4" />
          View Evaluation Form
        </button>
      </div>

    </div>
  );
}
