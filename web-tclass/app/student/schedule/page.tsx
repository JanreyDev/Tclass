import React from 'react';
import { 
  Calendar, 
  ChevronDown, 
  Printer, 
  Download,
  CalendarDays,
  BookOpen,
  GraduationCap,
  Clock,
  List
} from 'lucide-react';

export default function SchedulePage() {
  const scheduleData = [
    { code: 'FSM 314', title: 'Product Design, Packaging and Labelling', unit: '3.00', section: 'BTVTED-FSM 3B', time: '7:00 AM - 10:00 AM', room: 'L209 T', days: 'Mon, Wed, Fri', instructor: 'Prof. Maria Dela Cruz', color: 'bg-blue-50 border-blue-200 text-blue-700', dot: 'bg-blue-500', daysArray: [1, 3, 5], startH: 7, endH: 10 },
    { code: 'TEC 302', title: 'Research 2 – Undergraduate Thesis', unit: '3.00', section: 'BTVTED-FSM 3B', time: '11:00 AM - 2:00 PM', room: 'L306A F', days: 'Tue, Thu', instructor: 'Prof. Angelo Reyes', color: 'bg-rose-50 border-rose-200 text-rose-700', dot: 'bg-rose-500', daysArray: [2, 4], startH: 11, endH: 14 },
    { code: 'TEC 264', title: 'Teaching Common Competencies in Industrial Arts', unit: '3.00', section: 'BTVTED-FSM 3B', time: '3:00 PM - 6:00 PM', room: 'L206 F', days: 'Mon, Fri', instructor: 'Prof. Kenneth Dela Peña', color: 'bg-emerald-50 border-emerald-200 text-emerald-700', dot: 'bg-emerald-500', daysArray: [1, 5], startH: 15, endH: 18 },
    { code: 'TEC 262', title: 'Teaching Competencies in Home Economics', unit: '3.00', section: 'BTVTED-FSM 3B', time: '3:00 PM - 6:00 PM', room: 'L306A T', days: 'Tue', instructor: 'Prof. Liza Garcia', color: 'bg-amber-50 border-amber-200 text-amber-700', dot: 'bg-amber-500', daysArray: [2], startH: 15, endH: 18 },
    { code: 'TEC 266', title: 'Teaching Competencies in Agri-Fishery Arts', unit: '3.00', section: 'BTVTED-FSM 3B', time: '3:00 PM - 6:00 PM', room: 'L206 W', days: 'Thu', instructor: 'Prof. John Paul Bautista', color: 'bg-purple-50 border-purple-200 text-purple-700', dot: 'bg-purple-500', daysArray: [4], startH: 15, endH: 18 },
    { code: 'TEC 265', title: 'Teaching Competencies in ICT', unit: '3.00', section: 'BTVTED-FSM 3B', time: '11:00 AM - 2:00 PM', room: 'L306A W', days: 'Fri', instructor: 'Prof. Maria Dela Cruz', color: 'bg-teal-50 border-teal-200 text-teal-700', dot: 'bg-teal-500', daysArray: [5], startH: 11, endH: 14 },
  ];

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const daysOfWeek = [
    { name: 'MON', date: 'May 19', id: 1 },
    { name: 'TUE', date: 'May 20', id: 2, active: true },
    { name: 'WED', date: 'May 21', id: 3 },
    { name: 'THU', date: 'May 22', id: 4 },
    { name: 'FRI', date: 'May 23', id: 5 },
  ];

  // Calculate block position (assuming 60px per hour, starting at 7 AM)
  const getBlockStyle = (startH: number, endH: number) => {
    const top = (startH - 7) * 60;
    const height = (endH - startH) * 60;
    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Class Schedule</h1>
          <div className="flex items-center text-sm font-medium text-slate-500">
            <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
            <span className="mx-2">›</span>
            <span className="text-blue-600">Schedule</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <CalendarDays className="w-4 h-4 text-blue-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-10 pr-10 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-none">
              <option>2025-2026 2nd Semester</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-none">
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Classes</p>
            <p className="text-xl font-black text-slate-800 leading-none mb-1">6</p>
            <p className="text-[12px] font-semibold text-slate-500">Classes Enrolled</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Units</p>
            <p className="text-xl font-black text-slate-800 leading-none mb-1">18.00</p>
            <p className="text-[12px] font-semibold text-slate-500">Units Enrolled</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Semester</p>
            <p className="text-[15px] font-black text-slate-800 leading-tight">2025-2026 2nd Semester</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">As Of</p>
            <p className="text-[15px] font-black text-slate-800 leading-tight mb-0.5">May 20, 2024</p>
            <p className="text-[12px] font-semibold text-slate-500">2:26 PM</p>
          </div>
        </div>
      </div>

      {/* Weekly Schedule Calendar View */}
      <div className="bg-white border border-slate-200 rounded-xl mb-8 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-[#0B1A3D]">Weekly Schedule</h2>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm">
              <CalendarDays className="w-4 h-4" />
              Week View
            </button>
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 px-4 py-2 rounded-md text-sm font-bold transition-colors">
              <List className="w-4 h-4" />
              List View
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Days Header */}
            <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-4 border-b border-slate-100 pb-4 mb-4">
              <div></div> {/* Empty top-left cell */}
              {daysOfWeek.map(day => (
                <div key={day.id} className="text-center">
                  <p className="text-[11px] font-black uppercase text-slate-800">{day.name}</p>
                  <div className="flex justify-center mt-1">
                    <span className={`text-[11px] font-semibold flex items-center justify-center w-6 h-6 rounded-full ${day.active ? 'bg-blue-600 text-white' : 'text-slate-500'}`}>
                      {day.date.split(' ')[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Grid body */}
            <div className="relative grid grid-cols-[80px_repeat(5,1fr)] gap-4">
              {/* Time Labels */}
              <div className="relative z-10" style={{ height: `${(timeSlots.length - 1) * 60}px` }}>
                {timeSlots.map((time, idx) => (
                  <div key={time} className="absolute w-full text-right pr-4" style={{ top: `${idx * 60}px`, transform: 'translateY(-50%)' }}>
                    <span className="text-[10px] font-bold text-slate-400">{time}</span>
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {daysOfWeek.map(day => (
                <div key={day.id} className="relative border-l border-slate-100/60 border-dashed" style={{ height: `${(timeSlots.length - 1) * 60}px` }}>
                  {/* Grid Lines (horizontal) */}
                  {timeSlots.map((_, idx) => (
                    <div key={idx} className="absolute w-full border-t border-slate-100/60 border-dashed" style={{ top: `${idx * 60}px` }}></div>
                  ))}

                  {/* Class Blocks */}
                  {scheduleData.filter(cls => cls.daysArray.includes(day.id)).map((cls, idx) => (
                    <div 
                      key={`${cls.code}-${idx}`}
                      className={`absolute w-full left-0 right-0 rounded-lg border p-3 flex flex-col justify-between overflow-hidden shadow-sm transition-transform hover:scale-[1.02] z-20 ${cls.color}`}
                      style={getBlockStyle(cls.startH, cls.endH)}
                    >
                      <div>
                        <p className="text-xs font-black mb-0.5">{cls.code}</p>
                        <p className="text-[10px] font-semibold opacity-90 truncate">{cls.room}</p>
                      </div>
                      <p className="text-[10px] font-semibold opacity-80">{cls.time}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Class List Table */}
      <div className="bg-white border border-slate-200 rounded-xl mb-4 overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-black text-[#0B1A3D]">Class List</h2>
          <button className="flex items-center gap-2 border border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
            <Download className="w-4 h-4" />
            Download Class Schedule
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12"></th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Code</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Title</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Units</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Section</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Schedule</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Days</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((cls, index) => (
                <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className={`w-3 h-3 rounded-full ${cls.dot}`}></div>
                  </td>
                  <td className="py-4 px-4 text-[13px] font-bold text-slate-700 whitespace-nowrap">{cls.code}</td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{cls.title}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 text-center">{cls.unit}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{cls.section}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{cls.time}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{cls.room}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{cls.days}</td>
                  <td className="py-4 px-6 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{cls.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="text-center text-[12px] font-medium text-slate-400 mt-4">
        Note: Schedule may change. Please check announcements for updates.
      </p>

    </div>
  );
}
