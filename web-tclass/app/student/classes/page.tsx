import React from 'react';
import { 
  Calendar, 
  ChevronDown, 
  Printer, 
  ArrowUpDown,
  BookOpen,
  Library,
  CalendarCheck,
  Clock
} from 'lucide-react';

export default function EnrolledSubjectsPage() {
  const subjects = [
    { code: 'FSM 314', title: 'Product Design, Packaging and Labelling', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L209 T 07:00 AM - 10:00 AM', color: 'bg-blue-400' },
    { code: 'TEC 302', title: 'Research 2 – Undergraduate Thesis', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L306A F 11:00 AM - 02:00 PM', color: 'bg-rose-400' },
    { code: 'TEC 264', title: 'Teaching Common Competencies in Industrial Arts', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L206 F 03:00 PM - 06:00 PM', color: 'bg-emerald-400' },
    { code: 'TEC 262', title: 'Teaching Competencies in Home Economics', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L306A T 03:00 PM - 06:00 PM', color: 'bg-amber-400' },
    { code: 'TEC 266', title: 'Teaching Competencies in Agri-Fishery Arts', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L206 W 03:00 PM - 06:00 PM', color: 'bg-purple-400' },
    { code: 'TEC 265', title: 'Teaching Competencies in ICT', unit: '3.00', section: 'BTVTED-FSM 3B', schedule: 'L306A W 11:00 AM - 02:00 PM', color: 'bg-teal-400' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Enrolled Subjects</h1>
        <p className="text-sm font-medium text-slate-500">In this page you can view your past or currently enrolled subjects</p>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-center gap-3 mb-6">
        <Calendar className="w-5 h-5 text-slate-500" />
        <p className="text-[13px] font-semibold text-slate-600 uppercase tracking-wide">
          DISCLAIMER: The student bears the responsibility for the proper disposal of the documents.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-6 shadow-none">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Academic Year & Term</span>
          <div className="relative w-full md:w-[280px]">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>2025-2026 2nd Semester</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <Printer className="w-4 h-4" />
            Print
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-none flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Subjects Enrolled</p>
            <p className="text-xl font-black text-slate-800">6</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-none flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Library className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Units</p>
            <p className="text-xl font-black text-slate-800">18.00</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-none flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Enrollment Status</p>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">Enrolled</span>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-none flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">As Of</p>
            <p className="text-sm font-black text-slate-800">May 20, 2024 2:26 PM</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-none overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-12"></th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Code</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Title</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Unit</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Section</th>
                <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Schedule</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-slate-700 whitespace-nowrap">{subject.code}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-600 italic">{subject.title}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-slate-600">{subject.unit}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-slate-600 whitespace-nowrap">{subject.section}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-slate-600 whitespace-nowrap">{subject.schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 px-2">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-4 bg-blue-100 rounded-full flex items-center p-0.5">
            <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:translate-x-4 transition-transform"></div>
          </div>
          <span className="text-sm font-semibold text-slate-600">Hover</span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-4 bg-rose-100 rounded-full flex items-center p-0.5">
            <div className="w-3 h-3 bg-rose-500 rounded-full group-hover:translate-x-4 transition-transform"></div>
          </div>
          <span className="text-sm font-semibold text-slate-600">Dense</span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-4 bg-emerald-100 rounded-full flex items-center p-0.5">
            <div className="w-3 h-3 bg-emerald-500 rounded-full group-hover:translate-x-4 transition-transform"></div>
          </div>
          <span className="text-sm font-semibold text-slate-600">Striped</span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-4 bg-amber-100 rounded-full flex items-center p-0.5">
            <div className="w-3 h-3 bg-amber-500 rounded-full group-hover:translate-x-4 transition-transform"></div>
          </div>
          <span className="text-sm font-semibold text-slate-600">Bordered</span>
        </div>
      </div>

    </div>
  );
}
