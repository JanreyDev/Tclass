import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  UserMinus, 
  Lock, 
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
  ChevronRight as ChevronRightSmall
} from 'lucide-react';

export default function AdminUserManagementPage() {
  const stats = [
    { title: 'Total Users', value: '156', desc: 'All system users', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Users', value: '142', desc: '91.0% of total', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Inactive Users', value: '14', desc: '9.0% of total', icon: UserMinus, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Locked Accounts', value: '2', desc: 'Require attention', icon: Lock, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const users = [
    { id: 'U-0001', name: 'Prof. Maria Dela Cruz', email: 'maria.delacruz@tclass.edu.ph', role: 'Faculty', dept: 'Computer Studies Department', status: 'Active', lastLogin: 'May 16, 2026 10:30 AM', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: 'U-0002', name: 'Juan Miguel Santos', email: 'juan.santos@tclass.edu.ph', role: 'Student', dept: 'Bachelor of Science in Computer Science', status: 'Active', lastLogin: 'May 16, 2026 9:15 AM', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { id: 'U-0003', name: 'Admin User', email: 'admin@tclass.edu.ph', role: 'Administrator', dept: 'System Administration', status: 'Active', lastLogin: 'May 16, 2026 8:45 AM', initials: 'AS', initialsBg: 'bg-purple-100 text-purple-600' },
    { id: 'U-0004', name: 'Reyes, Maria Isabel', email: 'maria.reyes@tclass.edu.ph', role: 'Faculty', dept: 'General Education Department', status: 'Inactive', lastLogin: 'Apr 20, 2026 2:10 PM', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
    { id: 'U-0005', name: 'Garcia, Christian Paul', email: 'christian.garcia@tclass.edu.ph', role: 'Student', dept: 'Bachelor of Science in Information Technology', status: 'Active', lastLogin: 'May 15, 2026 11:05 PM', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop' },
    { id: 'U-0006', name: 'Lopez, Mark Daniel', email: 'mark.lopez@tclass.edu.ph', role: 'Faculty', dept: 'Engineering Department', status: 'Locked', lastLogin: 'Apr 10, 2026 6:20 PM', initials: 'LM', initialsBg: 'bg-amber-100 text-amber-600' },
  ];

  const getRoleStyle = (role: string) => {
    switch(role) {
      case 'Faculty': return 'text-blue-600 bg-blue-50 border border-blue-100';
      case 'Student': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Administrator': return 'text-purple-600 bg-purple-50 border border-purple-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-600 bg-emerald-50 border border-emerald-100';
      case 'Inactive': return 'text-rose-500 bg-rose-50 border border-rose-100';
      case 'Locked': return 'text-rose-600 bg-rose-50 border border-rose-100';
      default: return 'text-slate-600 bg-slate-50 border border-slate-100';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col min-h-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center text-[12px] font-medium text-slate-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRightSmall className="w-3.5 h-3.5 mx-1" />
            <span className="text-blue-600">User Management</span>
          </div>
          <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">User Management</h1>
          <p className="text-[13px] font-medium text-slate-500">Manage system users, roles, and account access.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export Users
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{stat.title}</p>
              <p className="text-[22px] font-black text-slate-800 leading-none mb-1.5 mt-1">{stat.value}</p>
              <p className="text-[12px] font-medium text-slate-500">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:max-w-[320px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Search</span>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by name, email, or ID..." 
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Role</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Roles</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Status</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-64">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Departments</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full shrink-0">
          <button className="h-[42px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors w-full xl:w-auto">
            <RotateCcw className="w-4 h-4" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col flex-1">
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">User</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Last Login</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0" />
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] border border-transparent shrink-0 ${user.initialsBg}`}>
                          {user.initials}
                        </div>
                      )}
                      <div>
                        <p className="text-[13px] font-bold text-[#0B1A3D] mb-0.5 leading-tight">{user.name}</p>
                        <p className="text-[11px] font-medium text-blue-600 mb-0.5 leading-tight">{user.email}</p>
                        <p className="text-[11px] font-medium text-slate-400 leading-tight">ID: {user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getRoleStyle(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[13px] font-medium text-slate-600 max-w-[200px] truncate">{user.dept}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block ${getStatusStyle(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-[12px] font-medium text-slate-600">{user.lastLogin}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors" title="Edit user">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-50 p-1.5 rounded-lg transition-colors" title="More actions">
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
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto bg-white">
          <p className="text-[12px] font-medium text-slate-500">
            Showing 1 to 10 of 156 users
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">16</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 sm:ml-2">
              <span className="text-[12px] font-medium text-slate-500">Rows per page:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-[12px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
