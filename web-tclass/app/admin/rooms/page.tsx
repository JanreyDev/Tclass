import React from 'react';
import { 
  DoorOpen, 
  CheckCircle2, 
  CalendarClock, 
  Wrench, 
  Download, 
  Plus, 
  Search, 
  ChevronDown, 
  RotateCcw,
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
  Wifi,
  Projector,
  Monitor,
  Plug,
  DoorOpen as DoorOpenLink,
  FileBarChart,
  Wrench as WrenchLink,
  CalendarDays
} from 'lucide-react';

export default function AdminRoomsPage() {
  const stats = [
    { title: 'Total Rooms', value: '86', desc: 'All rooms', icon: DoorOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Available Rooms', value: '52', desc: '60.5% of total', trend: '↑ 8.3%', trendDesc: 'vs last month', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', trendColor: 'text-emerald-600' },
    { title: 'Occupied Rooms', value: '32', desc: '37.2% of total', trend: '↓ 6.1%', trendDesc: 'vs last month', icon: CalendarClock, color: 'text-amber-500', bg: 'bg-amber-50', trendColor: 'text-rose-500' },
    { title: 'Under Maintenance', value: '2', desc: '2.3% of total', trend: '↓ 2.2%', trendDesc: 'vs last month', icon: Wrench, color: 'text-purple-600', bg: 'bg-purple-50', trendColor: 'text-rose-500' },
  ];

  const roomsList = [
    { code: 'B101', name: 'General Classroom 101', location: 'Building A / 1st Floor', type: 'Classroom', capacity: 40, status: 'Available', iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { code: 'B102', name: 'General Classroom 102', location: 'Building A / 1st Floor', type: 'Classroom', capacity: 40, status: 'Occupied', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { code: 'B103', name: 'General Classroom 103', location: 'Building A / 1st Floor', type: 'Classroom', capacity: 40, status: 'Available', iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { code: 'B201', name: 'Science Laboratory', location: 'Building B / 2nd Floor', type: 'Laboratory', capacity: 30, status: 'Occupied', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { code: 'B202', name: 'Computer Laboratory 1', location: 'Building B / 2nd Floor', type: 'Laboratory', capacity: 35, status: 'Available', iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { code: 'B203', name: 'Computer Laboratory 2', location: 'Building B / 2nd Floor', type: 'Laboratory', capacity: 35, status: 'Under Maintenance', iconBg: 'bg-rose-50', iconColor: 'text-rose-600' },
    { code: 'B301', name: 'Audio Visual Room', location: 'Building C / 3rd Floor', type: 'Special Room', capacity: 50, status: 'Available', iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { code: 'B302', name: 'Library', location: 'Building C / 3rd Floor', type: 'Special Room', capacity: 80, status: 'Occupied', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { code: 'B401', name: 'Conference Room', location: 'Building D / 4th Floor', type: 'Special Room', capacity: 25, status: 'Available', iconBg: 'bg-rose-50', iconColor: 'text-rose-600' },
    { code: 'B402', name: 'Multi-Purpose Hall', location: 'Building D / 4th Floor', type: 'Hall', capacity: 200, status: 'Occupied', iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Available': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Occupied': return 'text-amber-600 bg-amber-50 border border-amber-100';
      case 'Under Maintenance': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">Rooms</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Room Management</h1>
          <p className="text-[13px] font-medium text-slate-500">View and manage all rooms and facilities in the institution.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Rooms
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add Room
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.trend && (
                <div className="text-right">
                  <p className={`text-[12px] font-bold ${stat.trendColor} leading-none mb-1`}>{stat.trend}</p>
                  <p className="text-[10px] font-medium text-slate-400 leading-none">{stat.trendDesc}</p>
                </div>
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

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Col: Table Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          
          {/* Filters */}
          <div className="p-4 border-b border-slate-100 flex flex-wrap lg:flex-nowrap items-end gap-4 bg-slate-50/30">
            <div className="flex flex-col gap-1.5 w-full lg:flex-1 lg:min-w-[200px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search Room</span>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by room name or code..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Building</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Buildings</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room Type</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Types</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capacity</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Capacity</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 w-full sm:w-auto flex-1 min-w-[130px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>All Status</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <div className="flex items-end gap-3 w-full sm:w-auto shrink-0">
              <button className="h-[38px] flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-[13px] font-bold transition-colors w-full">
                <RotateCcw className="w-4 h-4" />
                Clear Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="py-3 px-6 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Room Code</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Room Name</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Building / Floor</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Capacity</th>
                  <th className="py-3 px-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
                  <th className="py-3 px-6 text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roomsList.map((room, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${room.iconBg} ${room.iconColor}`}>
                          <DoorOpen className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[12px] font-bold text-slate-700">{room.code}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[13px] font-bold text-[#0B1A3D]">{room.name}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[12px] font-medium text-slate-600">{room.location}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[12px] font-medium text-slate-600">{room.type}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[12px] font-semibold text-slate-700">{room.capacity}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${getStatusStyle(room.status)}`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded-lg transition-colors" title="View details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:bg-blue-50 p-1 rounded-lg transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1 rounded-lg transition-colors" title="More">
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
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <p className="text-[12px] font-medium text-slate-500">
              Showing 1 to 10 of 86 rooms
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[12px]">1</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">2</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">3</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">4</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">5</button>
                <span className="text-slate-400 px-0.5">...</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[12px] transition-colors">9</button>
                <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2 sm:ml-2">
                <span className="text-[12px] font-medium text-slate-500">Rows per page:</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-2 pr-7 py-1 text-[12px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Charts sidebar */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
          
          {/* Room Summary by Type */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-700 mb-4">Room Summary by Type</h3>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#3b82f6" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="97.2" className="transition-all duration-1000" /> {/* Classroom 55.8% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#10b981" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="179.0" className="transition-all duration-1000 transform -rotate-[200.8deg] origin-center" /> {/* Laboratory 18.6% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="184.0" className="transition-all duration-1000 transform -rotate-[267.8deg] origin-center" /> {/* Special Room 16.3% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#a855f7" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="204.5" className="transition-all duration-1000 transform -rotate-[326.5deg] origin-center" /> {/* Hall 7.0% */}
                  <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="26" strokeDasharray="219.9" strokeDashoffset="214.8" className="transition-all duration-1000 transform -rotate-[351.7deg] origin-center" /> {/* Other 2.3% */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-6">
                  <span className="text-[15px] font-black text-[#0B1A3D] leading-none">86</span>
                  <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {[
                  { name: 'Classroom', count: '48 (55.8%)', color: 'bg-blue-500' },
                  { name: 'Laboratory', count: '16 (18.6%)', color: 'bg-emerald-500' },
                  { name: 'Special Room', count: '14 (16.3%)', color: 'bg-amber-500' },
                  { name: 'Hall', count: '6 (7.0%)', color: 'bg-purple-500' },
                  { name: 'Other', count: '2 (2.3%)', color: 'bg-rose-500' },
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

          {/* Room Details */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Room Details</h3>
            </div>
            <div className="p-5 flex flex-col gap-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                <p className="text-[12px] font-bold text-[#0B1A3D]">B101 - General Classroom 101</p>
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block text-emerald-600 bg-emerald-50 border border-emerald-100">
                  Available
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Building</span>
                  <span className="text-[11px] font-bold text-slate-700">Building A</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Floor</span>
                  <span className="text-[11px] font-bold text-slate-700">1st Floor</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Room Type</span>
                  <span className="text-[11px] font-bold text-slate-700">Classroom</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Capacity</span>
                  <span className="text-[11px] font-bold text-slate-700">40</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">Features</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Wifi className="w-3.5 h-3.5 hover:text-blue-600 transition-colors" title="WiFi Available" />
                    <Projector className="w-3.5 h-3.5 hover:text-blue-600 transition-colors" title="Projector Equipped" />
                    <Monitor className="w-3.5 h-3.5 hover:text-blue-600 transition-colors" title="Computer Provided" />
                    <Plug className="w-3.5 h-3.5 hover:text-blue-600 transition-colors" title="Power Outlets" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[11px] font-medium text-slate-500">Description</span>
                  <p className="text-[11px] font-medium text-slate-700 leading-tight">Standard classroom equipped with projector and whiteboard.</p>
                </div>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-50">
                  <span className="text-[10px] font-medium text-slate-500">Last Updated</span>
                  <span className="text-[10px] font-bold text-slate-700">May 16, 2026 10:30 AM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-2xl flex flex-col">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-[14px] font-black text-[#0B1A3D]">Quick Actions</h3>
            </div>
            <div className="flex flex-col p-3 gap-1">
              
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <DoorOpenLink className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Add New Room</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">Register a new room or facility</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileBarChart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Room Utilization Report</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">View room usage and occupancy</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <WrenchLink className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Maintenance Request</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">Submit or manage maintenance requests</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-blue-600 group-hover:underline">Room Availability Calendar</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">View room availability calendar</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
