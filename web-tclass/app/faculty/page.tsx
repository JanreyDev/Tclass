import React from 'react';
import { 
  BookOpen, 
  Users, 
  ClipboardList, 
  CalendarDays,
  ArrowRight,
  Calendar as CalendarIcon,
  Megaphone,
  CheckSquare,
  FileText,
  Video,
  Award
} from 'lucide-react';

export default function FacultyDashboardOverview() {
  const stats = [
    { 
      title: 'Classes Assigned', 
      value: '12', 
      icon: BookOpen, 
      color: 'text-blue-600', 
      bg: 'bg-blue-100', 
      linkText: 'View all classes' 
    },
    { 
      title: 'Total Students', 
      value: '420', 
      icon: Users, 
      color: 'text-green-600', 
      bg: 'bg-green-100', 
      linkText: 'View all students' 
    },
    { 
      title: 'Pending Tasks', 
      value: '24', 
      icon: ClipboardList, 
      color: 'text-amber-500', 
      bg: 'bg-amber-100', 
      linkText: 'View tasks' 
    },
    { 
      title: 'Upcoming Classes', 
      value: '5', 
      icon: CalendarDays, 
      color: 'text-purple-600', 
      bg: 'bg-purple-100', 
      linkText: 'View schedule' 
    },
  ];

  const todaySchedule = [
    { time: '8:00 AM - 9:30 AM', subject: 'IT 101 - Introduction to Computing', section: 'BSIT 1A', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700' },
    { time: '10:00 AM - 11:30 AM', subject: 'IT 201 - Database Management', section: 'BSIT 2A', status: 'Upcoming', statusColor: 'bg-blue-50 text-blue-600' },
    { time: '1:00 PM - 2:30 PM', subject: 'IT 301 - System Analysis and Design', section: 'BSIT 3A', status: 'Upcoming', statusColor: 'bg-blue-50 text-blue-600' },
    { time: '3:00 PM - 4:30 PM', subject: 'IT 205 - Web Development', section: 'BSIT 2B', status: 'Upcoming', statusColor: 'bg-blue-50 text-blue-600' },
  ];

  const myClasses = [
    { code: 'IT 101', name: 'Introduction to Computing', section: 'BSIT 1A', students: 40 },
    { code: 'IT 201', name: 'Database Management', section: 'BSIT 2A', students: 38 },
    { code: 'IT 301', name: 'System Analysis and Design', section: 'BSIT 3A', students: 35 },
    { code: 'IT 205', name: 'Web Development', section: 'BSIT 2B', students: 37 },
  ];

  const announcements = [
    { title: 'New Memo: Midterm Examination Schedule', desc: 'Please be informed that the midterm examination will start on May 27, 2024.', date: 'May 19, 2024', author: 'Admin', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Faculty Meeting', desc: 'There will be a faculty meeting on Friday, May 24, 2024 at 2:00 PM in the Audio Visual Room.', date: 'May 18, 2024', author: 'Admin', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Training: Outcome-Based Education', desc: 'All faculty members are required to attend the training on May 25, 2024 (8:00 AM - 12:00 PM).', date: 'May 17, 2024', author: 'Admin', icon: Award, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  const pendingTasks = [
    { title: 'Grade Submission', desc: 'IT 201 - Database Management', due: 'Due: May 24, 2024', dueColor: 'text-amber-500', icon: FileText, iconColor: 'text-amber-500', iconBg: 'bg-amber-50', badge: '' },
    { title: 'Attendance Validation', desc: 'IT 101 - Introduction to Computing', due: 'Due: May 21, 2024', dueColor: 'text-amber-500', icon: Users, iconColor: 'text-blue-500', iconBg: 'bg-blue-50', badge: '' },
    { title: 'Student Requests', desc: '3 pending requests', due: '', dueColor: '', icon: FileText, iconColor: 'text-green-600', iconBg: 'bg-green-50', badge: 'View Requests', badgeBg: 'bg-green-50 text-green-700' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1600px] mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            Welcome back, Juan Dela Cruz! <span className="text-3xl">👋</span>
          </h1>
          <p className="text-slate-500 mt-1">Here's what's happening in your classes today.</p>
        </div>
        <div className="flex items-center text-slate-500 font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
          <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" />
          May 20, 2024 <span className="mx-2 text-gray-300">|</span> Monday
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-[16px] p-6 border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[140px]">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-500">{stat.title}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                {stat.linkText} <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Wider) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Today's Schedule */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-600" /> Today's Schedule
              </h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center">
                View Full Schedule <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-2">
              {todaySchedule.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-[140px] flex-shrink-0">
                      <span className="text-sm font-medium text-slate-500">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">{item.subject}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{item.section}</p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-md text-xs font-semibold ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Classes Table */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" /> My Classes
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white border-b border-gray-100 text-xs font-bold text-slate-500 uppercase">
                  <tr>
                    <th className="px-6 py-4">Class Code</th>
                    <th className="px-6 py-4">Class Name</th>
                    <th className="px-6 py-4">Section</th>
                    <th className="px-6 py-4">Students</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {myClasses.map((cls, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-600">{cls.code}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{cls.name}</td>
                      <td className="px-6 py-4 font-medium text-slate-600">{cls.section}</td>
                      <td className="px-6 py-4 text-slate-600">{cls.students}</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 border border-blue-200 text-blue-600 bg-blue-50 rounded-md text-xs font-semibold hover:bg-blue-100 transition-colors">
                          View Class
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-100 bg-white text-right">
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center">
                View All Classes <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column (Narrower) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Recent Announcements */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[400px]">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-blue-600" /> Recent Announcements
              </h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar">
              {announcements.map((ann, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">{ann.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{ann.desc}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs font-medium text-slate-400">
                      <span>{ann.date}</span>
                      <span>•</span>
                      <span>{ann.author}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${ann.bg}`}>
                      <ann.icon className={`w-5 h-5 ${ann.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white rounded-[16px] border border-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-blue-600" /> Pending Tasks
              </h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center">
                View All Tasks <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-2">
              {pendingTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50 last:border-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${task.iconBg}`}>
                    <task.icon className={`w-6 h-6 ${task.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{task.title}</h3>
                    <p className="text-sm text-slate-500 truncate mt-0.5">{task.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {task.badge ? (
                      <span className={`px-3 py-1 rounded-md text-xs font-semibold ${task.badgeBg}`}>
                        {task.badge}
                      </span>
                    ) : (
                      <span className={`text-xs font-semibold ${task.dueColor}`}>{task.due}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
