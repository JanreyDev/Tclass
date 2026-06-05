import React from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon, 
  BookOpen 
} from 'lucide-react';

export default function FacultySchedulePage() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['12', '13', '14', '15', '16', '17', '18'];
  const times = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  // Calendar dates for May 2026
  const calDates = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31]
  ];

  const upcomingClasses = [
    { code: 'CCS 201', title: 'Data Structures and Algorithms', time: 'Today • 10:00 - 11:30 AM', room: 'L205 (Computer Lab 2)', color: 'border-emerald-500' },
    { code: 'CCS 204', title: 'Web Development 1', time: 'Today • 1:00 - 2:30 PM', room: 'L207 (Computer Lab 3)', color: 'border-blue-500' },
    { code: 'CCS 302', title: 'Database Management Systems', time: 'Tomorrow • 1:00 - 2:30 PM', room: 'L203 (Computer Lab 1)', color: 'border-amber-500' },
    { code: 'CCS 305', title: 'Software Engineering', time: 'Tomorrow • 3:00 - 4:30 PM', room: 'L206 (Computer Lab 2)', color: 'border-purple-500' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Class Schedules</h1>
        <p className="text-[13px] font-medium text-slate-500">View and manage your class schedules.</p>
      </div>

      {/* Top Filter and Actions Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="flex flex-col gap-1.5 w-full sm:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">View</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>Weekly View</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto mt-2 lg:mt-0">
          <div className="flex items-center gap-2">
            <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
              Today
            </button>
            <div className="flex items-center bg-white border border-slate-200 rounded-lg">
              <button className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-r border-slate-200 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full sm:w-auto">
            <Plus className="w-4 h-4" />
            Add Schedule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
        
        {/* Left Column: Main Calendar */}
        <div className="flex flex-col min-w-0">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col flex-1 min-h-[800px]">
            <h2 className="text-[16px] font-black text-[#0B1A3D] mb-6">May 12 – May 18, 2026</h2>
            
            {/* Calendar Grid Header */}
            <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-slate-100 pb-3">
              <div></div> {/* Empty top-left cell */}
              {days.map((day, idx) => (
                <div key={day} className="flex flex-col items-center justify-center">
                  <span className="text-[12px] font-bold text-slate-500 mb-1">{day}</span>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-bold ${dates[idx] === '13' ? 'bg-[#1E5EFF] text-white' : 'text-slate-800'}`}>
                    {dates[idx]}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Grid Body */}
            <div className="relative flex-1 mt-4">
              
              {/* Background Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-11">
                {times.map((time, rowIdx) => (
                  <React.Fragment key={time}>
                    <div className="relative border-b border-slate-100/50">
                      <span className="absolute -top-2.5 right-4 text-[10px] font-bold text-slate-400">{time}</span>
                    </div>
                    {/* 7 Columns for days */}
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                    <div className="border-b border-l border-slate-100/50"></div>
                  </React.Fragment>
                ))}
              </div>

              {/* Schedule Blocks (Absolute Positioning Overlay) */}
              <div className="absolute inset-0 ml-[60px]">
                {/* CCS 204: Mon 8:00 - 9:00 AM */}
                <div className="absolute left-[0%] w-[14.28%] top-[9.09%] h-[9.09%] p-1">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl w-full h-full p-2 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-blue-700 leading-tight">CCS 204</p>
                    <p className="text-[10px] font-medium text-blue-600 truncate">Web Development 1</p>
                    <p className="text-[9px] font-semibold text-blue-500 mt-0.5">8:00 - 9:00 AM</p>
                    <p className="text-[9px] font-medium text-blue-500">L207</p>
                  </div>
                </div>

                {/* CCS 204: Wed 8:00 - 9:00 AM */}
                <div className="absolute left-[28.56%] w-[14.28%] top-[9.09%] h-[9.09%] p-1">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl w-full h-full p-2 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-blue-700 leading-tight">CCS 204</p>
                    <p className="text-[10px] font-medium text-blue-600 truncate">Web Development 1</p>
                    <p className="text-[9px] font-semibold text-blue-500 mt-0.5">8:00 - 9:00 AM</p>
                    <p className="text-[9px] font-medium text-blue-500">L207</p>
                  </div>
                </div>

                {/* CCS 201: Mon 10:00 - 11:30 AM */}
                <div className="absolute left-[0%] w-[14.28%] top-[27.27%] h-[13.63%] p-1">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-emerald-700 leading-tight">CCS 201</p>
                    <p className="text-[10px] font-medium text-emerald-600 truncate">Data Structures</p>
                    <p className="text-[9px] font-semibold text-emerald-500 mt-1">10:00 - 11:30 AM</p>
                    <p className="text-[9px] font-medium text-emerald-500">L205</p>
                  </div>
                </div>

                {/* CCS 201: Wed 10:00 - 11:30 AM */}
                <div className="absolute left-[28.56%] w-[14.28%] top-[27.27%] h-[13.63%] p-1">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-emerald-700 leading-tight">CCS 201</p>
                    <p className="text-[10px] font-medium text-emerald-600 truncate">Data Structures</p>
                    <p className="text-[9px] font-semibold text-emerald-500 mt-1">10:00 - 11:30 AM</p>
                    <p className="text-[9px] font-medium text-emerald-500">L205</p>
                  </div>
                </div>

                {/* CCS 201: Fri 10:00 - 11:30 AM */}
                <div className="absolute left-[57.12%] w-[14.28%] top-[27.27%] h-[13.63%] p-1">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-emerald-700 leading-tight">CCS 201</p>
                    <p className="text-[10px] font-medium text-emerald-600 truncate">Data Structures</p>
                    <p className="text-[9px] font-semibold text-emerald-500 mt-1">10:00 - 11:30 AM</p>
                    <p className="text-[9px] font-medium text-emerald-500">L205</p>
                  </div>
                </div>

                {/* CCS 302: Tue 1:00 - 2:30 PM */}
                <div className="absolute left-[14.28%] w-[14.28%] top-[54.54%] h-[13.63%] p-1">
                  <div className="bg-amber-50 border border-amber-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-amber-700 leading-tight">CCS 302</p>
                    <p className="text-[10px] font-medium text-amber-600 truncate">Database Systems</p>
                    <p className="text-[9px] font-semibold text-amber-500 mt-1">1:00 - 2:30 PM</p>
                    <p className="text-[9px] font-medium text-amber-500">L203</p>
                  </div>
                </div>

                {/* CCS 302: Thu 1:00 - 2:30 PM */}
                <div className="absolute left-[42.84%] w-[14.28%] top-[54.54%] h-[13.63%] p-1">
                  <div className="bg-amber-50 border border-amber-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-amber-700 leading-tight">CCS 302</p>
                    <p className="text-[10px] font-medium text-amber-600 truncate">Database Systems</p>
                    <p className="text-[9px] font-semibold text-amber-500 mt-1">1:00 - 2:30 PM</p>
                    <p className="text-[9px] font-medium text-amber-500">L203</p>
                  </div>
                </div>

                {/* CCS 305: Tue 3:00 - 4:30 PM */}
                <div className="absolute left-[14.28%] w-[14.28%] top-[72.72%] h-[13.63%] p-1">
                  <div className="bg-purple-50 border border-purple-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-purple-700 leading-tight">CCS 305</p>
                    <p className="text-[10px] font-medium text-purple-600 truncate">Software Engineering</p>
                    <p className="text-[9px] font-semibold text-purple-500 mt-1">3:00 - 4:30 PM</p>
                    <p className="text-[9px] font-medium text-purple-500">L206</p>
                  </div>
                </div>

                {/* CCS 305: Thu 3:00 - 4:30 PM */}
                <div className="absolute left-[42.84%] w-[14.28%] top-[72.72%] h-[13.63%] p-1">
                  <div className="bg-purple-50 border border-purple-100 rounded-xl w-full h-full p-2.5 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-purple-700 leading-tight">CCS 305</p>
                    <p className="text-[10px] font-medium text-purple-600 truncate">Software Engineering</p>
                    <p className="text-[9px] font-semibold text-purple-500 mt-1">3:00 - 4:30 PM</p>
                    <p className="text-[9px] font-medium text-purple-500">L206</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-8 ml-[60px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[11px] font-bold text-slate-500">CCS 201</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[11px] font-bold text-slate-500">CCS 204</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-[11px] font-bold text-slate-500">CCS 302</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[11px] font-bold text-slate-500">CCS 305</span>
              </div>
            </div>
          </div>

          {/* Bottom Info Card */}
          <div className="bg-[#F8FAFC] border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-blue-200 mt-0.5 text-blue-600">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">Manage your schedules with ease</h3>
                <p className="text-[13px] font-medium text-slate-600">Click on any class block to view details, edit, or make changes to your schedule.</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors shrink-0 md:ml-4">
              <BookOpen className="w-4 h-4" />
              View Full Calendar
            </button>
          </div>

        </div>

        {/* Right Column: Mini Calendar & Upcoming */}
        <div className="flex flex-col gap-6">
          
          {/* Mini Calendar Container */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[15px] font-black text-[#0B1A3D]">Calendar</h3>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h4 className="text-[13px] font-bold text-[#0B1A3D]">May 2026</h4>
              <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-y-3 gap-x-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase">{day}</div>
              ))}
              
              {calDates.map((week, wIdx) => (
                <React.Fragment key={wIdx}>
                  {week.map((date, dIdx) => {
                    const isPrevMonth = wIdx === 0 && date > 20;
                    const isToday = date === 13 && !isPrevMonth;
                    return (
                      <div key={`${wIdx}-${dIdx}`} className="flex items-center justify-center">
                        <button className={`w-8 h-8 rounded-full text-[12px] font-bold flex items-center justify-center transition-colors ${
                          isPrevMonth ? 'text-slate-300' :
                          isToday ? 'bg-[#1E5EFF] text-white shadow-sm' :
                          'text-slate-700 hover:bg-slate-100'
                        }`}>
                          {date}
                        </button>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[15px] font-black text-[#0B1A3D]">Upcoming Classes</h3>
              <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              {upcomingClasses.map((cls, idx) => (
                <div key={idx} className={`pl-4 border-l-4 ${cls.color} py-1`}>
                  <p className="text-[11px] font-bold text-[#0B1A3D] mb-1">{cls.code}</p>
                  <p className="text-[13px] font-bold text-slate-700 leading-tight mb-1">{cls.title}</p>
                  <p className="text-[11px] font-semibold text-slate-500 mb-0.5">{cls.time}</p>
                  <p className="text-[11px] font-medium text-slate-400">{cls.room}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 py-2.5 rounded-xl text-[13px] font-bold transition-colors">
              <BookOpen className="w-4 h-4" />
              View My Classes
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
