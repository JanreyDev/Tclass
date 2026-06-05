"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  GraduationCap, 
  CalendarDays,
  User,
  Settings,
  Search,
  Bell,
  Moon,
  Menu,
  ChevronDown,
  FileCheck,
  Wallet,
  LogOut
} from 'lucide-react';

const mainNavItems = [
  { name: 'Dashboard', href: '/student', icon: LayoutDashboard },
  { name: 'My Classes', href: '/student/classes', icon: BookOpen },
  { name: 'Assignments', href: '/student/assignments', icon: ClipboardList },
  { name: 'Grades', href: '/student/grades', icon: GraduationCap },
  { name: 'Academic Evaluation', href: '/student/evaluation', icon: FileCheck },
  { name: 'Schedule', href: '/student/schedule', icon: CalendarDays },
  { name: 'Student Ledger', href: '/student/ledger', icon: Wallet },
];

const bottomNavItems = [
  { name: 'My Profile', href: '/student/profile', icon: User },
  { name: 'Settings', href: '/student/settings', icon: Settings },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === '/student') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="h-screen w-[240px] bg-[#0B1A3D] text-slate-300 hidden md:flex flex-col flex-shrink-0 z-20">
        
        {/* Logo Area */}
        <div className="h-28 flex items-center px-6 mt-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/seal.png" alt="Tarlac Seal" className="w-9 h-9 rounded-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[18px] font-bold leading-snug tracking-wider">TCLASS</span>
            <span className="text-[10px] text-blue-200/70 mt-0.5 leading-snug tracking-wide">Tarlac Center for Learning<br/>and Skills Success</span>
          </div>
        </div>
        
        {/* Main Menu Items */}
        <nav className="flex-1 px-4 pb-4 pt-2 space-y-0.5 overflow-y-auto custom-scrollbar">
          {mainNavItems.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name}
                aria-current={isActive ? 'page' : undefined}
                href={item.href} 
                className={isActive 
                  ? "flex items-center px-4 py-2 bg-[#1E5EFF] text-white rounded-[10px] text-[12px] font-bold shadow-[0_4px_12px_rgba(30,94,255,0.2)]"
                  : "flex items-center px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-white rounded-[10px] text-[12px] font-semibold transition-colors group"
                }
              >
                <Icon className={isActive ? "w-4 h-4 mr-3" : "w-4 h-4 mr-3 text-slate-400 group-hover:text-white transition-colors"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Menu Items */}
        <div className="px-4 pb-4 pt-3 border-t border-white/5 space-y-0.5 shrink-0">
          {bottomNavItems.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name}
                aria-current={isActive ? 'page' : undefined}
                href={item.href} 
                className={isActive 
                  ? "flex items-center px-4 py-2 bg-[#1E5EFF] text-white rounded-[10px] text-[12px] font-bold shadow-[0_4px_12px_rgba(30,94,255,0.2)]"
                  : "flex items-center px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-white rounded-[10px] text-[12px] font-semibold transition-colors group"
                }
              >
                <Icon className={isActive ? "w-4 h-4 mr-3" : "w-4 h-4 mr-3 text-slate-400 group-hover:text-white transition-colors"} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex h-screen flex-col min-w-0">
        
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
                placeholder="Search for classes, assignments, materials..." 
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border-2 border-white">3</span>
            </button>
            
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
              <Moon className="w-5 h-5" />
            </button>

            <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>

            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1.5 rounded-lg pr-2 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                  alt="Juan Miguel Santos" 
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                />
                <div className="hidden sm:block text-left">
                  <p className="text-[15px] font-bold text-gray-900 leading-none mb-1.5">Juan Miguel Santos</p>
                  <p className="text-[12px] font-medium text-gray-500 leading-none">BSIT 2A</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block ml-1" />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                  <Link 
                    href="/" 
                    className="flex items-center px-4 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Link>
                </div>
              )}
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
