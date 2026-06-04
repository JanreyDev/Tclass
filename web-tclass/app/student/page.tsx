import React from 'react';
import { 
  BookOpen, 
  ClipboardList, 
  Star,
  CalendarDays,
  ArrowRight,
  Calendar as CalendarIcon,
  Megaphone,
  MapPin,
  User,
  Inbox,
  Clock,
  BookMarked
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboardOverview() {
  const stats = [
    { title: 'Enrolled Subjects', value: '6', subText: '18.00 Units', icon: Inbox, color: 'text-blue-500', bg: 'bg-blue-50', linkText: 'View subjects', linkUrl: '/student/classes' },
    { title: 'Today\'s Classes', value: '2', subText: 'Next: 11:00 AM', icon: CalendarIcon, color: 'text-green-500', bg: 'bg-green-50', linkText: 'View schedule', linkUrl: '/student/schedule' },
    { title: 'Pending Assignments', value: '3', subText: 'Due this week', icon: ClipboardList, color: 'text-purple-500', bg: 'bg-purple-50', linkText: 'View assignments', linkUrl: '/student/assignments' },
    { title: 'Average Grade', value: '88.45', subText: 'Very Good', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50', linkText: 'View grades', linkUrl: '/student/grades' },
  ];

  const todaySchedule = [
    { time: '8:00 AM\n- 10:00 AM', code: 'FSM 314', subject: 'Product Design, Packaging and Labelling', room: 'L209 T', prof: 'Prof. Maria Dela Cruz', badge: 'In Progress', badgeColor: 'bg-blue-50 text-blue-600', borderColor: 'border-blue-500', codeColor: 'text-blue-600' },
    { time: '11:00 AM\n- 2:00 PM', code: 'TEC 302', subject: 'Research 2 – Undergraduate Thesis', room: 'L306A F', prof: 'Prof. Angelo Reyes', badge: 'Upcoming', badgeColor: 'bg-rose-50 text-rose-600', borderColor: 'border-rose-500', codeColor: 'text-rose-600' },
  ];

  const myClasses = [
    { code: 'FSM 314', title: 'Product Design, Packaging and Labelling', units: '3.00 Units', progress: 85, icon: Inbox, iconColor: 'text-blue-600', iconBg: 'bg-blue-50', barColor: 'bg-blue-600' },
    { code: 'TEC 302', title: 'Research 2 – Undergraduate Thesis', units: '3.00 Units', progress: 78, icon: Hourglass, iconColor: 'text-rose-600', iconBg: 'bg-rose-50', barColor: 'bg-rose-500' },
    { code: 'TEC 264', title: 'Teaching Common Competencies in Industrial Arts', units: '3.00 Units', progress: 90, icon: BookMarked, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50', barColor: 'bg-emerald-500' },
    { code: 'TEC 262', title: 'Teaching Competencies in Home Economics', units: '3.00 Units', progress: 86, icon: Star, iconColor: 'text-amber-600', iconBg: 'bg-amber-50', barColor: 'bg-amber-500' },
    { code: 'TEC 266', title: 'Teaching Competencies in Agri-Fishery Arts', units: '3.00 Units', progress: 88, icon: Clock, iconColor: 'text-purple-600', iconBg: 'bg-purple-50', barColor: 'bg-purple-500' },
    { code: 'TEC 265', title: 'Teaching Competencies in ICT', units: '3.00 Units', progress: 92, icon: BookOpen, iconColor: 'text-teal-600', iconBg: 'bg-teal-50', barColor: 'bg-teal-500' },
  ];

  const announcements = [
    { title: 'Midterm Examination Schedule', desc: 'Please be informed that the midterm examinations will start on May 27, 2024.', date: 'May 19, 2024', author: 'Admin' },
    { title: 'Submission of Requirements', desc: 'All requirements for this week must be submitted on or before May 24, 2024.', date: 'May 18, 2024', author: 'Admin' },
    { title: 'Library Orientation', desc: 'New students are required to attend the library orientation on May 22, 2024 at 2:00 PM.', date: 'May 17, 2024', author: 'Library' },
  ];

  const upcomingEvents = [
    { month: 'MAY', day: '22', title: 'Library Orientation', time: '2:00 PM - 4:00 PM', location: 'Library', color: 'text-purple-600 bg-purple-50' },
    { month: 'MAY', day: '27', title: 'Midterm Examinations Start', time: '8:00 AM', location: 'Various Rooms', color: 'text-emerald-600 bg-emerald-50' },
    { month: 'JUN', day: '03', title: 'Submission of Requirements', time: 'Until 5:00 PM', location: 'Admin Office', color: 'text-amber-600 bg-amber-50' },
    { month: 'JUN', day: '10', title: 'Foundation Day', time: 'All Day Event', location: 'TSU Campus', color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1 flex items-center gap-2">
            Good morning, Shekainah! <span className="text-[28px]">👋</span>
          </h1>
          <p className="text-[14px] font-medium text-slate-500">Here's what's happening with your academic journey today.</p>
        </div>
        <div className="flex items-center text-[13px] font-bold text-[#0B1A3D] bg-white px-5 py-2.5 rounded-lg border border-slate-200">
          <CalendarIcon className="w-4 h-4 mr-2 text-blue-600" />
          May 20, 2024 <span className="mx-3 text-slate-300">|</span> Monday
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between h-[140px]">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.title}</p>
                <p className="text-[24px] font-black text-slate-800 leading-none mb-1">{stat.value}</p>
                <p className="text-[12px] font-semibold text-slate-500">{stat.subText}</p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-50">
              <Link href={stat.linkUrl} className="flex items-center text-[12px] font-bold text-blue-600 hover:text-blue-700 transition-colors">
                {stat.linkText} <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* Today's Schedule */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-[15px] font-black text-[#0B1A3D] flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-600" /> Today's Schedule
              </h2>
              <Link href="/student/schedule" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center">
                View full schedule <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="p-5 space-y-4">
              {todaySchedule.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-4 border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="sm:w-32 bg-slate-50 border-r border-slate-100 p-4 flex items-center sm:items-start justify-center sm:justify-start">
                    <span className="text-[12px] font-bold text-slate-600 text-center sm:text-left whitespace-pre-line leading-tight">
                      {item.time}
                    </span>
                  </div>
                  <div className={`flex-1 p-4 border-l-4 ${item.borderColor} bg-white flex flex-col sm:flex-row sm:items-start justify-between gap-4`}>
                    <div>
                      <p className={`text-[13px] font-black mb-1 ${item.codeColor}`}>{item.code}</p>
                      <p className="text-[14px] font-bold text-slate-800 mb-2 leading-tight">{item.subject}</p>
                      <div className="flex items-center gap-4 text-[12px] font-semibold text-slate-500">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {item.room}</span>
                        <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {item.prof}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className={`px-3 py-1 rounded-md text-[11px] font-bold whitespace-nowrap ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Classes */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-[15px] font-black text-[#0B1A3D] flex items-center gap-2">
                <Inbox className="w-4 h-4 text-blue-600" /> My Classes
              </h2>
              <Link href="/student/classes" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center">
                View all classes <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="p-2">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    {myClasses.map((cls, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <td className="p-4 w-14">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cls.iconBg}`}>
                            <cls.icon className={`w-5 h-5 ${cls.iconColor}`} />
                          </div>
                        </td>
                        <td className="p-4 w-28 whitespace-nowrap">
                          <span className="text-[13px] font-black text-slate-800">{cls.code}</span>
                        </td>
                        <td className="p-4 min-w-[200px]">
                          <span className="text-[13px] font-medium text-slate-600">{cls.title}</span>
                        </td>
                        <td className="p-4 w-24 whitespace-nowrap text-center">
                          <span className="text-[12px] font-semibold text-slate-500">{cls.units}</span>
                        </td>
                        <td className="p-4 w-32">
                          <div className="flex flex-col items-end gap-1.5 w-full">
                            <span className="text-[11px] font-black text-slate-700">{cls.progress}%</span>
                            <div className="w-full bg-slate-100 rounded-full h-1.5">
                              <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.progress}%` }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Announcements */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-[15px] font-black text-[#0B1A3D] flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-blue-600" /> Announcements
              </h2>
              <Link href="/student/announcements" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center">
                View all <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="p-6 space-y-6">
              {announcements.map((ann, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
                  </div>
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-[13px] font-black text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">{ann.title}</h3>
                    <p className="text-[12px] font-medium text-slate-600 mt-1.5 leading-relaxed">{ann.desc}</p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold text-slate-400">
                      <span>{ann.date}</span>
                      <span>•</span>
                      <span>{ann.author}</span>
                    </div>
                  </div>
                  <div className="shrink-0 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-[15px] font-black text-[#0B1A3D] flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-blue-600" /> Upcoming Events
              </h2>
              <Link href="/student/calendar" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 flex items-center">
                View calendar <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="p-5 space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                  <div className={`w-12 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 border border-slate-100 ${event.color}`}>
                    <span className="text-[10px] font-black uppercase tracking-wider">{event.month}</span>
                    <span className="text-[18px] font-black leading-none mt-0.5">{event.day}</span>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-[13px] font-black text-slate-800 truncate mb-1.5">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {event.location}</span>
                    </div>
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

const Hourglass = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
)

const ChevronRight = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
)
