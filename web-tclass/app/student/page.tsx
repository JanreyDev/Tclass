import React from 'react';
import { 
  BookOpen, 
  ClipboardList, 
  Star,
  CalendarDays,
  ArrowRight,
  Calendar as CalendarIcon,
  Megaphone,
  CheckSquare,
  FileText,
  Code,
  Network,
  MessageCircle,
  Shield,
  FileEdit,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function StudentDashboardOverview() {
  const stats = [
    { title: 'Enrolled Classes', value: '5', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50', linkText: 'View my classes' },
    { title: 'Pending Assignments', value: '8', icon: ClipboardList, color: 'text-green-500', bg: 'bg-green-50', linkText: 'View assignments' },
    { title: 'Average Grade', value: '88.5%', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50', linkText: 'View grades' },
    { title: 'Upcoming Events', value: '4', icon: CalendarDays, color: 'text-purple-500', bg: 'bg-purple-50', linkText: 'View calendar' },
  ];

  const myClasses = [
    { code: 'IT 201 - Database Management', prof: 'Prof. Maria Dela Cruz', progress: 85, icon: BookOpen, iconBg: 'bg-blue-600' },
    { code: 'IT 202 - Network Systems', prof: 'Prof. Angelo Reyes', progress: 78, icon: Network, iconBg: 'bg-green-500' },
    { code: 'IT 203 - Web Development', prof: 'Prof. Kenneth Dela Peña', progress: 90, icon: Code, iconBg: 'bg-orange-500' },
    { code: 'GE 101 - Purposive Communication', prof: 'Prof. Liza Garcia', progress: 88, icon: MessageCircle, iconBg: 'bg-purple-500' },
    { code: 'IT 204 - Information Security', prof: 'Prof. John Paul Bautista', progress: 76, icon: Shield, iconBg: 'bg-teal-500' },
  ];

  const todaySchedule = [
    { time: '8:00 AM - 9:30 AM', subject: 'IT 201 - Database Management', room: 'Rms. 201', badge: 'Today', badgeBg: 'bg-blue-50 text-blue-600' },
    { time: '10:00 AM - 11:30 AM', subject: 'IT 202 - Network Systems', room: 'Rms. 203', badge: 'Today', badgeBg: 'bg-blue-50 text-blue-600' },
    { time: '1:00 PM - 2:30 PM', subject: 'IT 203 - Web Development', room: 'Rms. 204', badge: 'Today', badgeBg: 'bg-blue-50 text-blue-600' },
    { time: '3:00 PM - 4:00 PM', subject: 'GE 101 - Purposive Communication', room: 'Rms. 105', badge: 'Tomorrow', badgeBg: 'bg-green-50 text-green-600' },
  ];

  const announcements = [
    { title: 'Midterm Examination Schedule', desc: 'Please be informed that the midterm examinations will start on May 27, 2024.', date: 'May 19, 2024', author: 'Admin', icon: FileText },
    { title: 'Submission of Requirements', desc: 'All requirements for this week must be submitted on or before May 24, 2024.', date: 'May 18, 2024', author: 'Admin', icon: ClipboardList },
    { title: 'Library Orientation', desc: 'New students are required to attend the library orientation on May 22, 2024 at 2:00 PM.', date: 'May 17, 2024', author: 'Library', icon: BookOpen },
  ];

  const assignments = [
    { title: 'Database Normalization (1NF - 3NF)', subject: 'IT 201 - Database Management', due: 'Due: May 22, 2024', status: 'Pending', statusBg: 'bg-orange-50 text-orange-600' },
    { title: 'Network Topology Diagram', subject: 'IT 202 - Network Systems', due: 'Due: May 23, 2024', status: 'Pending', statusBg: 'bg-orange-50 text-orange-600' },
    { title: 'HTML & CSS Mini Project', subject: 'IT 203 - Web Development', due: 'Due: May 24, 2024', status: 'Pending', statusBg: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-6 bg-[#F8FAFC]">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            Welcome back, Juan Miguel! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-slate-500 mt-1">Keep up the great work and continue learning.</p>
        </div>
        <div className="flex items-center text-slate-500 font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" />
          May 20, 2024 <span className="mx-2 text-gray-300">|</span> Monday
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-[16px] p-6 border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[130px]">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-500 mb-1">{stat.title}</p>
                <p className="text-[26px] font-bold text-slate-900 leading-none">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
              <button className="flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                {stat.linkText} <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* My Classes */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" /> My Classes
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View All Classes <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="p-4 space-y-4 flex-1">
            {myClasses.map((cls, idx) => (
              <div key={idx} className="flex items-center gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${cls.iconBg}`}>
                  <cls.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{cls.code}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{cls.prof}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0 w-16">
                  <span className="text-xs font-bold text-slate-700">{cls.progress}%</span>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${cls.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-50 text-center">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All Classes →</button>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-blue-600" /> Upcoming Schedule
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View Full Schedule <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="p-4 space-y-0">
            {todaySchedule.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                <div className="w-28 flex-shrink-0">
                  <span className="text-[13px] font-medium text-slate-500">{item.time}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-slate-900 truncate">{item.subject}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.room}</p>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-blue-600" /> Recent Announcements
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
            {announcements.map((ann, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] font-bold text-slate-900 leading-snug">{ann.title}</h3>
                  <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">{ann.desc}</p>
                  <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-slate-400">
                    <span>{ann.date}</span>
                    <span>•</span>
                    <span>{ann.author}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 border border-blue-100">
                    <ann.icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Main Grid: Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* My Assignments */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:col-span-1">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-blue-600" /> My Assignments
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View All Assignments <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="px-5 pt-3 pb-0 border-b border-gray-100">
            <div className="flex space-x-6">
              <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-2">All</button>
              <button className="text-[13px] font-medium text-slate-500 pb-2 hover:text-slate-800 transition-colors">Pending (8)</button>
              <button className="text-[13px] font-medium text-slate-500 pb-2 hover:text-slate-800 transition-colors">Submitted</button>
              <button className="text-[13px] font-medium text-slate-500 pb-2 hover:text-slate-800 transition-colors">Graded</button>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {assignments.map((task, idx) => (
              <div key={idx} className="flex gap-4 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-50">
                  <FileEdit className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] font-bold text-slate-900 truncate">{task.title}</h3>
                  <p className="text-[12px] text-slate-500 truncate mt-0.5">{task.subject}</p>
                </div>
                <div className="text-right flex-shrink-0 flex flex-col justify-center gap-1">
                  <span className="text-[11px] font-semibold text-orange-500">{task.due}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold self-end ${task.statusBg}`}>
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grades Overview */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-600" /> Grades Overview
            </h2>
          </div>
          <div className="p-6 flex items-center gap-8 justify-center h-[260px]">
            
            {/* Donut Chart placeholder using CSS conic-gradient */}
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner" style={{ background: 'conic-gradient(#2563EB 0% 50%, #10B981 50% 75%, #F59E0B 75% 90%, #64748B 90% 100%)' }}>
              <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                <span className="text-2xl font-extrabold text-slate-900">88.5%</span>
                <span className="text-xs font-semibold text-slate-500">Average</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span className="text-xs font-medium text-slate-600">Excellent (90-100%)</span>
                </div>
                <span className="text-xs font-bold text-slate-900">2</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-medium text-slate-600">Very Good (85-89%)</span>
                </div>
                <span className="text-xs font-bold text-slate-900">2</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-xs font-medium text-slate-600">Good (80-84%)</span>
                </div>
                <span className="text-xs font-bold text-slate-900">1</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  <span className="text-xs font-medium text-slate-600">Satisfactory (75-79%)</span>
                </div>
                <span className="text-xs font-bold text-slate-900">0</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="text-xs font-medium text-slate-600">Needs Improvement (&lt;75%)</span>
                </div>
                <span className="text-xs font-bold text-slate-900">0</span>
              </div>
            </div>
          </div>
          <div className="px-5 pb-5 text-right">
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center">
              View Grades <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-blue-600" /> Calendar
            </h2>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View Calendar <ArrowRight className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <ChevronLeft className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
              <span className="text-[13px] font-bold text-slate-900">May 2024</span>
              <ChevronRight className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
            <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center text-[12px]">
              <div className="text-slate-400 font-medium">SUN</div>
              <div className="text-slate-400 font-medium">MON</div>
              <div className="text-slate-400 font-medium">TUE</div>
              <div className="text-slate-400 font-medium">WED</div>
              <div className="text-slate-400 font-medium">THU</div>
              <div className="text-slate-400 font-medium">FRI</div>
              <div className="text-slate-400 font-medium">SAT</div>

              <div className="text-slate-300">28</div><div className="text-slate-300">29</div><div className="text-slate-300">30</div>
              <div className="text-slate-700 font-semibold">1</div><div className="text-slate-700 font-semibold">2</div><div className="text-slate-700 font-semibold">3</div><div className="text-slate-700 font-semibold">4</div>
              
              <div className="text-slate-700 font-semibold">5</div><div className="text-slate-700 font-semibold">6</div><div className="text-slate-700 font-semibold">7</div><div className="text-slate-700 font-semibold">8</div><div className="text-slate-700 font-semibold">9</div><div className="text-slate-700 font-semibold">10</div><div className="text-slate-700 font-semibold">11</div>
              
              <div className="text-slate-700 font-semibold">12</div><div className="text-slate-700 font-semibold">13</div><div className="text-slate-700 font-semibold">14</div><div className="text-slate-700 font-semibold">15</div><div className="text-slate-700 font-semibold">16</div><div className="text-slate-700 font-semibold">17</div><div className="text-slate-700 font-semibold">18</div>
              
              <div className="text-slate-700 font-semibold">19</div>
              <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-sm font-bold">20</div>
              <div className="text-slate-700 font-semibold">21</div><div className="text-slate-700 font-semibold">22</div><div className="text-slate-700 font-semibold">23</div>
              <div className="text-blue-600 font-bold relative">24<div className="w-1 h-1 bg-blue-600 rounded-full mx-auto absolute -bottom-1 left-1/2 -translate-x-1/2"></div></div>
              <div className="text-slate-700 font-semibold">25</div>
              
              <div className="text-slate-700 font-semibold">26</div><div className="text-slate-700 font-semibold">27</div><div className="text-slate-700 font-semibold">28</div><div className="text-slate-700 font-semibold">29</div><div className="text-slate-700 font-semibold">30</div><div className="text-slate-700 font-semibold">31</div>
              <div className="text-slate-300">1</div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-[12px] text-slate-500">
        © 2024 Provincial Government of Tarlac. All rights reserved.
      </footer>
    </div>
  );
}
