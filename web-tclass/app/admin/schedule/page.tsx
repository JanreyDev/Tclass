import React from 'react';
import { 
  Calendar, 
  CalendarCheck, 
  CalendarX, 
  AlertTriangle, 
  Download, 
  Plus, 
  Settings, 
  ChevronDown, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
  AlertCircle
} from 'lucide-react';

export default function AdminSchedulePage() {
  const stats = [
    { title: 'Total Schedules', value: '186', desc: 'All schedules', trend: '↑ 8.2%', trendDesc: 'vs last month', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50', trendColor: 'text-emerald-600' },
    { title: 'Active Schedules', value: '172', desc: 'This semester', trend: '↑ 6.5%', trendDesc: 'vs last month', icon: CalendarCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Cancelled/Inactive', value: '14', desc: 'This semester', trend: '↓ 12.0%', trendDesc: 'vs last month', icon: CalendarX, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'Conflicts Found', value: '3', desc: 'Need attention', link: 'View Conflicts', icon: AlertTriangle, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const days = [
    { name: 'Mon', date: '5/12' },
    { name: 'Tue', date: '5/13' },
    { name: 'Wed', date: '5/14' },
    { name: 'Thu', date: '5/15' },
    { name: 'Fri', date: '5/16' },
    { name: 'Sat', date: '5/17' },
    { name: 'Sun', date: '5/18' }
  ];

  const scheduleBlocks = [
    // Mon, Wed, Fri - 8:00 AM (Green)
    { day: 0, top: 'calc(1 * 60px)', height: 'calc(1.5 * 60px)', title: 'Data Structures', time: '8:00 - 9:30 AM', room: 'Room 201', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { day: 2, top: 'calc(1 * 60px)', height: 'calc(1.5 * 60px)', title: 'Data Structures', time: '8:00 - 9:30 AM', room: 'Room 201', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { day: 4, top: 'calc(1 * 60px)', height: 'calc(1.5 * 60px)', title: 'Data Structures', time: '8:00 - 9:30 AM', room: 'Room 201', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    
    // Tue, Thu - 8:00 AM (Blue)
    { day: 1, top: 'calc(1 * 60px)', height: 'calc(1.5 * 60px)', title: 'Discrete Math', time: '8:00 - 9:30 AM', room: 'Room 202', section: 'BSCS 2A', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { day: 3, top: 'calc(1 * 60px)', height: 'calc(1.5 * 60px)', title: 'Discrete Math', time: '8:00 - 9:30 AM', room: 'Room 202', section: 'BSCS 2A', color: 'bg-blue-50 border-blue-200 text-blue-700' },

    // Mon, Wed, Fri - 9:45 AM (Yellow)
    { day: 0, top: 'calc(2.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Programming 2', time: '9:45 - 11:15 AM', room: 'Lab 1', section: 'BSCS 2A', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { day: 2, top: 'calc(2.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Programming 2', time: '9:45 - 11:15 AM', room: 'Lab 1', section: 'BSCS 2A', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { day: 4, top: 'calc(2.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Programming 2', time: '9:45 - 11:15 AM', room: 'Lab 1', section: 'BSCS 2A', color: 'bg-amber-50 border-amber-200 text-amber-700' },

    // Tue, Thu - 9:45 AM (Purple)
    { day: 1, top: 'calc(2.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Purposive Comm.', time: '9:45 - 11:15 AM', room: 'Room 203', section: 'BSCS 2A', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { day: 3, top: 'calc(2.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Purposive Comm.', time: '9:45 - 11:15 AM', room: 'Room 203', section: 'BSCS 2A', color: 'bg-purple-50 border-purple-200 text-purple-700' },

    // Mon, Wed, Fri - 1:00 PM (Green)
    { day: 0, top: 'calc(6 * 60px)', height: 'calc(1.5 * 60px)', title: 'PE & Health', time: '1:00 - 2:30 PM', room: 'Gym', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { day: 2, top: 'calc(6 * 60px)', height: 'calc(1.5 * 60px)', title: 'PE & Health', time: '1:00 - 2:30 PM', room: 'Gym', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { day: 4, top: 'calc(6 * 60px)', height: 'calc(1.5 * 60px)', title: 'PE & Health', time: '1:00 - 2:30 PM', room: 'Gym', section: 'BSCS 2A', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },

    // Tue, Thu - 1:00 PM (Blue)
    { day: 1, top: 'calc(6 * 60px)', height: 'calc(1.5 * 60px)', title: 'Database Systems', time: '1:00 - 2:30 PM', room: 'Room 204', section: 'BSCS 2A', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { day: 3, top: 'calc(6 * 60px)', height: 'calc(1.5 * 60px)', title: 'Database Systems', time: '1:00 - 2:30 PM', room: 'Room 204', section: 'BSCS 2A', color: 'bg-blue-50 border-blue-200 text-blue-700' },

    // Mon, Wed, Fri - 2:45 PM (Red/Rose)
    { day: 0, top: 'calc(7.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Web Dev 1', time: '2:45 - 4:15 PM', room: 'Lab 2', section: 'BSCS 2A', color: 'bg-rose-50 border-rose-200 text-rose-700' },
    { day: 2, top: 'calc(7.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Web Dev 1', time: '2:45 - 4:15 PM', room: 'Lab 2', section: 'BSCS 2A', color: 'bg-rose-50 border-rose-200 text-rose-700' },
    { day: 4, top: 'calc(7.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Web Dev 1', time: '2:45 - 4:15 PM', room: 'Lab 2', section: 'BSCS 2A', color: 'bg-rose-50 border-rose-200 text-rose-700' },

    // Tue, Thu - 2:45 PM (Purple)
    { day: 1, top: 'calc(7.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Logic Design', time: '2:45 - 4:15 PM', room: 'Room 205', section: 'BSCS 2A', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { day: 3, top: 'calc(7.75 * 60px)', height: 'calc(1.5 * 60px)', title: 'Logic Design', time: '2:45 - 4:15 PM', room: 'Room 205', section: 'BSCS 2A', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  ];

  const conflicts = [
    { title: 'Room Conflict', desc: 'Room 201 is double-booked', time: 'May 15, 8:00 AM - 9:30 AM', icon: AlertTriangle },
    { title: 'Faculty Conflict', desc: 'Prof. Juan Dela Cruz has overlapping classes', time: 'May 13, 1:00 PM - 2:30 PM', icon: AlertTriangle },
    { title: 'Room Conflict', desc: 'Lab 1 is double-booked', time: 'May 14, 2:45 PM - 4:15 PM', icon: AlertTriangle },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Schedule</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Schedule Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Create, manage, and view class schedules.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Schedule
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Settings className="w-4 h-4" />
            Generate Timetable
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Create Schedule
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.trend ? (
                <div className="text-right">
                  <p className={`text-[12px] font-bold ${stat.trendColor} leading-none mb-1`}>{stat.trend}</p>
                  <p className="text-[10px] font-medium text-slate-400 leading-none">{stat.trendDesc}</p>
                </div>
              ) : (
                <button className="text-[11px] font-bold text-blue-600 hover:underline">{stat.link}</button>
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

      {/* Filters */}
      <div className="flex flex-col xl:flex-row items-end gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:max-w-[200px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Program</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Programs</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Year Level</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Year Levels</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Section</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Sections</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="shrink-0 w-full sm:w-auto">
          <button className="h-[42px] flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors w-full">
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* Left Area (Calendar) */}
        <div className="flex-1 flex flex-col min-w-0 bg-white border border-slate-200 rounded-2xl w-full overflow-hidden">
          
          {/* Calendar Header */}
          <div className="p-5 border-b border-slate-100 flex flex-col gap-5">
            <div className="flex items-center gap-6">
              <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-2 px-1">Weekly View</button>
              <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-2 border-b-2 border-transparent px-1 transition-colors">Daily View</button>
              <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-2 border-b-2 border-transparent px-1 transition-colors">List View</button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button className="p-1.5 bg-white hover:bg-slate-50 border-r border-slate-200 text-slate-500 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-[13px] font-bold text-[#0B1A3D]">May 12 - May 18, 2026</span>
                  <button className="p-1.5 bg-white hover:bg-slate-50 border-l border-slate-200 text-slate-500 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-semibold text-slate-500 mr-2">Week 20</span>
                <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[12px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                  Today
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              
              {/* Days Header */}
              <div className="flex border-b border-slate-100">
                <div className="w-20 shrink-0 border-r border-slate-100 bg-slate-50/50 p-3 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time</span>
                </div>
                {days.map((day, idx) => (
                  <div key={idx} className="flex-1 border-r border-slate-100 last:border-r-0 bg-slate-50/50 p-3 text-center">
                    <p className="text-[11px] font-bold text-[#0B1A3D]">{day.name} {day.date}</p>
                  </div>
                ))}
              </div>

              {/* Time Slots & Blocks Wrapper */}
              <div className="relative" style={{ height: `${timeSlots.length * 60}px` }}>
                
                {/* Background Grid */}
                <div className="absolute inset-0 flex">
                  <div className="w-20 shrink-0 border-r border-slate-100 bg-white">
                    {timeSlots.map((time, idx) => (
                      <div key={idx} className="h-[60px] border-b border-slate-100 relative">
                        <span className="absolute -top-2 left-0 right-0 text-center text-[10px] font-bold text-slate-400">{time}</span>
                      </div>
                    ))}
                  </div>
                  {days.map((day, idx) => (
                    <div key={idx} className="flex-1 border-r border-slate-100 last:border-r-0 relative">
                      {timeSlots.map((_, i) => (
                        <div key={i} className="h-[60px] border-b border-slate-50"></div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Lunch Break Banner spanning all days */}
                <div 
                  className="absolute left-20 right-0 bg-slate-100/80 flex flex-col items-center justify-center pointer-events-none border-y border-slate-200/50"
                  style={{ top: 'calc(5 * 60px)', height: '60px' }}
                >
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">12:00 - 1:00 PM</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Lunch Break</span>
                </div>

                {/* Blocks */}
                {scheduleBlocks.map((block, idx) => (
                  <div 
                    key={idx} 
                    className={`absolute rounded-lg border p-2 flex flex-col gap-0.5 hover:shadow-md cursor-pointer transition-shadow ${block.color}`}
                    style={{ 
                      top: block.top, 
                      height: block.height,
                      left: `calc(5rem + ${block.day * (100 / 7)}%)`,
                      width: `calc(${100 / 7}% - 8px)`,
                      marginLeft: '4px'
                    }}
                  >
                    <p className="text-[11px] font-bold truncate leading-tight">{block.title}</p>
                    <p className="text-[10px] font-medium opacity-80 leading-tight">{block.time}</p>
                    <p className="text-[10px] font-medium opacity-80 leading-tight truncate">{block.room}</p>
                    <p className="text-[10px] font-bold opacity-90 leading-tight mt-auto">{block.section}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Schedule Overview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-4">Schedule Overview</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="111" className="transition-all duration-1000" /> {/* Lecture 49.5% blue */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="163.2" className="transition-all duration-1000 transform -rotate-[178.2deg] origin-center" /> {/* Lab 25.8% green */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="186.7" className="transition-all duration-1000 transform -rotate-[271deg] origin-center" /> {/* Activity 15.1% orange */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="198.8" className="transition-all duration-1000 transform -rotate-[325deg] origin-center" /> {/* Other 9.6% red */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[15px] font-black text-[#0B1A3D] leading-none">186</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {[
                  { name: 'Lecture', count: '92 (49.5%)', color: 'bg-blue-500' },
                  { name: 'Laboratory', count: '48 (25.8%)', color: 'bg-emerald-500' },
                  { name: 'Activity', count: '28 (15.1%)', color: 'bg-amber-500' },
                  { name: 'Other', count: '18 (9.6%)', color: 'bg-rose-500' },
                ].map(type => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${type.color}`}></span>
                      <span className="text-[10px] font-bold text-slate-700">{type.name}</span>
                    </div>
                    <span className="text-[9px] font-medium text-slate-500">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
            <h3 className="text-[14px] font-black text-[#0B1A3D] mb-1">Quick Filters</h3>
            
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-slate-600">By Program</span>
              <div className="relative w-[140px]">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[11px] font-bold text-slate-700 focus:outline-none cursor-pointer">
                  <option>All Programs</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-slate-600">By Faculty</span>
              <div className="relative w-[140px]">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[11px] font-bold text-slate-700 focus:outline-none cursor-pointer">
                  <option>All Faculty</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-slate-600">By Room</span>
              <div className="relative w-[140px]">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[11px] font-bold text-slate-700 focus:outline-none cursor-pointer">
                  <option>All Rooms</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-slate-600">By Status</span>
              <div className="relative w-[140px]">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[11px] font-bold text-slate-700 focus:outline-none cursor-pointer">
                  <option>All Status</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Schedule Conflicts */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-black text-[#0B1A3D]">Schedule Conflicts</h3>
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">3</span>
              </div>
              <button className="text-[11px] font-bold text-blue-600 hover:underline">View All</button>
            </div>
            
            <div className="flex flex-col p-5 gap-5">
              {conflicts.map((conflict, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <conflict.icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0B1A3D] leading-tight mb-0.5">{conflict.title}</p>
                    <p className="text-[10px] font-medium text-slate-600 leading-tight mb-1">{conflict.desc}</p>
                    <p className="text-[9px] font-medium text-slate-400">{conflict.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100">
              <button className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 py-2.5 rounded-lg text-[12px] font-bold transition-colors">
                <AlertCircle className="w-4 h-4" />
                Resolve Conflicts
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
