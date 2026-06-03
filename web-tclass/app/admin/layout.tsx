import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Layers,
  BookText,
  ClipboardCheck,
  GraduationCap,
  CalendarCheck,
  Megaphone,
  BarChart3,
  Calendar,
  Settings,
  ShieldCheck,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Mail,
  Moon,
  Menu,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-[280px] bg-[#0B1A3D] text-slate-300 hidden md:flex flex-col flex-shrink-0 z-20 overflow-y-auto custom-scrollbar">
        
        {/* Logo Area */}
        <div className="h-28 flex items-center px-6 mt-2 flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/seal.png" alt="Tarlac Seal" className="w-11 h-11 rounded-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[18px] font-bold leading-snug tracking-wider">TCLASS</span>
            <span className="text-[10px] text-blue-200/70 mt-0.5 leading-snug tracking-wide">Tarlac Center for Learning<br/>and Skills Success</span>
          </div>
        </div>
        
        {/* Menu Items */}
        <nav className="flex-1 px-5 py-6 space-y-2">
          <Link href="/admin" className="flex items-center px-4 py-3.5 bg-[#1E5EFF] text-white rounded-[14px] text-[15px] font-semibold mb-4 shadow-[0_4px_12px_rgba(30,94,255,0.2)]">
            <LayoutDashboard className="w-5 h-5 mr-4" />
            Dashboard
          </Link>
          
          <Link href="/admin/users" className="flex items-center justify-between px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
              Users Management
            </div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>
          
          <Link href="/admin/academic" className="flex items-center justify-between px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
              Academic Management
            </div>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </Link>
          
          <Link href="/admin/classes" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <Layers className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Classes & Sections
          </Link>
          
          <Link href="/admin/subjects" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <BookText className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Subjects Management
          </Link>
          
          <Link href="/admin/enrollment" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <ClipboardCheck className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Enrollment Management
          </Link>
          
          <Link href="/admin/grades" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <GraduationCap className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Grades Management
          </Link>
          
          <Link href="/admin/attendance" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <CalendarCheck className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Attendance Monitoring
          </Link>
          
          <Link href="/admin/materials" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <BookText className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Learning Materials
          </Link>
          
          <Link href="/admin/announcements" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <Megaphone className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Announcements
          </Link>
          
          <Link href="/admin/reports" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <BarChart3 className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Reports & Analytics
          </Link>
          
          <Link href="/admin/calendar" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <Calendar className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Calendar
          </Link>
          
          <Link href="/admin/settings" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <Settings className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            System Settings
          </Link>
          
          <Link href="/admin/audit" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <ShieldCheck className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Audit Logs
          </Link>
        </nav>

        {/* Bottom Actions */}
        <div className="p-5 border-t border-white/5 space-y-2 flex-shrink-0">
          <Link href="/admin/help" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <HelpCircle className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Help Center
          </Link>
          <Link href="/logout" className="flex items-center px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-[14px] text-[14px] font-medium transition-colors group">
            <LogOut className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-[80px] bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg md:hidden border border-gray-200">
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-100 shadow-sm mr-2">
                <Menu className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="w-full max-w-[480px] relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search users, classes, subjects, reports..." 
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border-2 border-white">5</span>
            </button>

            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Mail className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border-2 border-white">3</span>
            </button>
            
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
              <Moon className="w-5 h-5" />
            </button>

            <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg pr-2 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
                alt="Admin User" 
                className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
              />
              <div className="hidden sm:block text-left">
                <p className="text-[15px] font-bold text-gray-900 leading-none mb-1.5">Admin User</p>
                <p className="text-[12px] font-medium text-gray-500 leading-none">System Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block ml-1" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
