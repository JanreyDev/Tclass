import React from 'react';
import { 
  Download,
  Printer,
  ChevronDown,
  Search,
  Filter,
  BookOpen,
  CheckCircle,
  Clock,
  Hourglass,
  PieChart
} from 'lucide-react';

export default function AcademicEvaluationPage() {
  const curriculum = [
    {
      year: "1st Year",
      semester: "1st Semester",
      units: "18.00 Units",
      progress: 100,
      progressColor: "bg-emerald-500",
      progressBg: "bg-slate-200",
      borderColor: "border-emerald-500",
      subjects: [
        { code: "NSTP 1", title: "National Service Training Program 1", prereq: "-", units: "3.00", status: "Credited", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
        { code: "FSM 111", title: "Occupational Health and Safety", prereq: "-", units: "3.00", status: "Passed", statusColor: "bg-green-50 text-green-700 border border-green-200" },
        { code: "FSM 112", title: "Food Selection and Preparation", prereq: "-", units: "3.00", status: "Passed", statusColor: "bg-green-50 text-green-700 border border-green-200" },
        { code: "EDUC 204", title: "Technology for Teaching and Learning 1", prereq: "-", units: "3.00", status: "Credited", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
        { code: "PATHFit 2", title: "Physical Activities Toward Health and Fitness 2", prereq: "-", units: "2.00", status: "Credited", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
        { code: "ROTC/CWTS/LTS 2", title: "Reserve Officers' Training Corps 2", prereq: "-", units: "3.00", status: "Credited", statusColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" }
      ]
    },
    {
      year: "1st Year",
      semester: "2nd Semester",
      units: "15.00 Units",
      progress: 83,
      progressColor: "bg-blue-500",
      progressBg: "bg-slate-200",
      borderColor: "border-blue-500",
      subjects: [
        { code: "EDUC 251", title: "Facilitating Learner-Centered Teaching", prereq: "EDUC 101", units: "3.00", status: "Passed", statusColor: "bg-green-50 text-green-700 border border-green-200" },
        { code: "EDUC 256", title: "Building and Enhancing Literacy Across the Curriculum", prereq: "-", units: "3.00", status: "Passed", statusColor: "bg-green-50 text-green-700 border border-green-200" },
        { code: "EDUC 257", title: "The Andragogy of Learning", prereq: "EDUC 101", units: "3.00", status: "Passed", statusColor: "bg-green-50 text-green-700 border border-green-200" },
        { code: "EDUC 202", title: "Assessment of Learning 1", prereq: "-", units: "3.00", status: "In Progress", statusColor: "bg-blue-50 text-blue-700 border border-blue-200" },
        { code: "MATH 1F", title: "College Algebra", prereq: "-", units: "3.00", status: "In Progress", statusColor: "bg-blue-50 text-blue-700 border border-blue-200" }
      ]
    },
    {
      year: "2nd Year",
      semester: "1st Semester",
      units: "(15.00 Units)",
      progress: 0,
      progressColor: "bg-slate-300",
      progressBg: "bg-slate-200",
      borderColor: "border-slate-300",
      subjects: [
        { code: "EDUC 201", title: "The Teacher and the Community", prereq: "EDUC 101", units: "3.00", status: "Pending", statusColor: "bg-slate-50 text-slate-500 border border-slate-200" },
        { code: "EDUC 255", title: "Curriculum Development and Evaluation", prereq: "EDUC 251, EDUC 102", units: "3.00", status: "Pending", statusColor: "bg-slate-50 text-slate-500 border border-slate-200" },
        { code: "EDUC 104", title: "Foundations of Special and Inclusive Education", prereq: "EDUC 101", units: "3.00", status: "Pending", statusColor: "bg-slate-50 text-slate-500 border border-slate-200" },
        { code: "EDUC 253", title: "Assessment of Learning 2", prereq: "EDUC 202, EDUC 251", units: "3.00", status: "Pending", statusColor: "bg-slate-50 text-slate-500 border border-slate-200" },
        { code: "EDUC 102", title: "Child and Adolescent Development", prereq: "-", units: "3.00", status: "Pending", statusColor: "bg-slate-50 text-slate-500 border border-slate-200" }
      ]
    }
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Academic Evaluation</h1>
          <p className="text-sm font-medium text-slate-500 mb-3">View your curriculum progress and academic evaluation.</p>
          <div className="flex items-center text-[13px] font-semibold text-slate-500">
            <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
            <span className="mx-2">›</span>
            <span className="hover:text-blue-600 cursor-pointer">Academic Records</span>
            <span className="mx-2">›</span>
            <span className="text-blue-600">Academic Evaluation</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col lg:flex-row items-center justify-between gap-5 mb-6">
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>All Semesters</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="flex items-end gap-3 w-full lg:w-auto mt-2 lg:mt-0">
          <div className="relative flex-1 lg:w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search subject..." 
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Subjects</p>
            <p className="text-[22px] font-black text-slate-800 leading-none mb-1">32</p>
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">Subjects in Curriculum</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Completed</p>
            <p className="text-[22px] font-black text-slate-800 leading-none mb-1">18</p>
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">Subjects Passed / Credited</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">In Progress</p>
            <p className="text-[22px] font-black text-slate-800 leading-none mb-1">6</p>
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">Currently Enrolled</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Hourglass className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Remaining</p>
            <p className="text-[22px] font-black text-slate-800 leading-none mb-1">8</p>
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">Subjects to Take</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <PieChart className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Progress</p>
            <p className="text-[22px] font-black text-slate-800 leading-none mb-1">75%</p>
            <p className="text-[11px] font-semibold text-slate-500 leading-tight">Curriculum Completed</p>
          </div>
        </div>
      </div>

      {/* Curriculum Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-[240px]">Year Level / Semester</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Code</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Title</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pre-Requisite / Related Subject</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Units</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {curriculum.map((group, gIndex) => (
                <React.Fragment key={gIndex}>
                  {group.subjects.map((sub, sIndex) => (
                    <tr key={`${gIndex}-${sIndex}`} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      
                      {/* Group Header cell (only on first row of group) */}
                      {sIndex === 0 && (
                        <td rowSpan={group.subjects.length} className="py-5 px-6 align-top bg-white border-r border-slate-100 border-l-4" style={{ borderLeftColor: group.borderColor === 'border-emerald-500' ? '#10B981' : group.borderColor === 'border-blue-500' ? '#3B82F6' : '#CBD5E1' }}>
                          <div className="flex flex-col h-full mt-1">
                            <p className="text-[13px] font-black text-[#0B1A3D]">{group.year}</p>
                            <p className="text-[13px] font-bold text-[#0B1A3D]">{group.semester}</p>
                            <p className="text-[12px] font-medium text-slate-500 mt-1 mb-5">{group.units}</p>
                            
                            <div className="w-full h-1.5 rounded-full mb-1.5 overflow-hidden bg-slate-200">
                              <div className={`h-full rounded-full ${group.progressColor}`} style={{ width: `${group.progress}%` }}></div>
                            </div>
                            <p className="text-[11px] font-semibold text-slate-500">{group.progress}% Completed</p>
                          </div>
                        </td>
                      )}
                      
                      <td className="py-3 px-4 text-[13px] font-bold text-slate-700 whitespace-nowrap">{sub.code}</td>
                      <td className="py-3 px-4 text-[13px] font-medium text-slate-600">{sub.title}</td>
                      <td className="py-3 px-4 text-[12px] font-semibold text-slate-500">{sub.prereq}</td>
                      <td className="py-3 px-4 text-[13px] font-semibold text-slate-600 text-center">{sub.units}</td>
                      <td className="py-3 px-6 text-center">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${sub.statusColor}`}>
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <span className="text-[12px] font-semibold text-slate-600">Passed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
          <span className="text-[12px] font-semibold text-slate-600">Credited</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
          <span className="text-[12px] font-semibold text-slate-600">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
          <span className="text-[12px] font-semibold text-slate-600">Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          <span className="text-[12px] font-semibold text-slate-600">Failed</span>
        </div>
      </div>

    </div>
  );
}
