import React from 'react';
import { 
  FileText,
  LineChart,
  CheckCircle,
  Star,
  Award,
  Eye,
  Download,
  ChevronDown
} from 'lucide-react';

export default function GradesReportPage() {
  const subjectsAndGrades = [
    { code: 'FSM 314', title: 'Product Design, Packaging and Labelling', unit: '3.00', grade: 89, remark: 'Very Good', color: 'bg-blue-500' },
    { code: 'TEC 302', title: 'Research 2 – Undergraduate Thesis', unit: '3.00', grade: 87, remark: 'Very Good', color: 'bg-rose-400' },
    { code: 'TEC 264', title: 'Teaching Common Competencies in Industrial Arts', unit: '3.00', grade: 90, remark: 'Excellent', color: 'bg-emerald-500' },
    { code: 'TEC 262', title: 'Teaching Competencies in Home Economics', unit: '3.00', grade: 86, remark: 'Very Good', color: 'bg-amber-400' },
    { code: 'TEC 266', title: 'Teaching Competencies in Agri-Fishery Arts', unit: '3.00', grade: 88, remark: 'Very Good', color: 'bg-purple-500' },
    { code: 'TEC 265', title: 'Teaching Competencies in ICT', unit: '3.00', grade: 90, remark: 'Excellent', color: 'bg-teal-500' },
  ];

  const gradeHistory = [
    { year: '2025-2026', semester: '2nd Semester', gwa: '88.45 (Very Good)', status: 'Regular', date: 'May 20, 2024 2:20 PM' },
    { year: '2025-2026', semester: '1st Semester', gwa: '86.12 (Very Good)', status: 'Regular', date: 'Jan 12, 2024 3:15 PM' },
  ];

  const gradingScale = [
    { range: '90 - 100', eq: 'Excellent', remark: 'Outstanding performance' },
    { range: '85 - 89', eq: 'Very Good', remark: 'Very satisfactory performance' },
    { range: '80 - 84', eq: 'Good', remark: 'Satisfactory performance' },
    { range: '75 - 79', eq: 'Fair', remark: 'Needs improvement' },
    { range: 'Below 75', eq: 'Failed', remark: 'Did not meet expectations' },
  ];

  const gradeSummary = [
    { label: 'Excellent (90-100)', count: 2, pct: '33.33%', color: 'bg-emerald-500' },
    { label: 'Very Good (85-89)', count: 3, pct: '50.00%', color: 'bg-blue-500' },
    { label: 'Good (80-84)', count: 1, pct: '16.67%', color: 'bg-amber-400' },
    { label: 'Fair (75-79)', count: 0, pct: '0.00%', color: 'bg-rose-400' },
    { label: 'Failed (Below 75)', count: 0, pct: '0.00%', color: 'bg-red-500' },
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Grades Report</h1>
        <div className="flex items-center text-sm font-medium text-slate-500">
          <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
          <span className="mx-2">›</span>
          <span className="hover:text-blue-600 cursor-pointer">Grades</span>
          <span className="mx-2">›</span>
          <span className="text-blue-600">Grades Report</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row items-center justify-between gap-5 mb-6">
        <div className="flex flex-wrap items-center gap-5 w-full lg:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-none">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-none">
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:w-[220px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Class</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-none">
                <option>All Classes</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex justify-end mt-2 lg:mt-0">
          <button className="flex items-center justify-center gap-2 border border-blue-200 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-lg text-[14px] font-bold transition-colors w-full lg:w-auto">
            <FileText className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <LineChart className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">General Weighted Average</p>
            <p className="text-[26px] font-black text-slate-800 leading-none mb-1">88.45</p>
            <p className="text-[13px] font-bold text-purple-600">Very Good</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Units</p>
            <p className="text-[26px] font-black text-slate-800 leading-none mb-1">18.00</p>
            <p className="text-[13px] font-semibold text-slate-500">Units Enrolled</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Star className="w-7 h-7 fill-amber-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Subjects</p>
            <p className="text-[26px] font-black text-slate-800 leading-none mb-1">6</p>
            <p className="text-[13px] font-semibold text-slate-500">Subjects Enrolled</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Academic Status</p>
            <p className="text-[26px] font-black text-slate-800 leading-none mb-1">Regular</p>
            <p className="text-[13px] font-bold text-blue-600">Good Standing</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-[1fr_360px] gap-6 mb-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 min-w-0">
          
          {/* Subjects and Grades Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-black text-[#0B1A3D]">Subjects and Grades</h2>
            </div>
            
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-12"></th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Code</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject Title</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Units</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Grade</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Remarks</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectsAndGrades.map((sub, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className={`w-3 h-3 rounded-full ${sub.color}`}></div>
                      </td>
                      <td className="py-4 px-4 text-[13px] font-bold text-slate-700 whitespace-nowrap">{sub.code}</td>
                      <td className="py-4 px-4 text-[13px] font-medium text-slate-600 max-w-[200px] leading-tight">{sub.title}</td>
                      <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 text-center">{sub.unit}</td>
                      <td className="py-4 px-4 text-[13px] font-black text-slate-700 text-center">{sub.grade}</td>
                      <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{sub.remark}</td>
                      <td className="py-4 px-6 text-center">
                        <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-end gap-10">
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Total Units:</span>
                <span className="text-[14px] font-black text-slate-800">18.00</span>
              </div>
              <div className="text-right flex items-center gap-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">General Weighted Average:</span>
                <span className="text-[15px] font-black text-blue-600">88.45 (Very Good)</span>
              </div>
            </div>
          </div>

          {/* Grade History */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-black text-[#0B1A3D]">Grade History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">General Weighted Average</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Academic Status</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Generated</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeHistory.map((hist, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{hist.year}</td>
                      <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{hist.semester}</td>
                      <td className="py-4 px-4 text-[13px] font-semibold text-slate-600 whitespace-nowrap">{hist.gwa}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">{hist.status}</span>
                      </td>
                      <td className="py-4 px-4 text-[13px] font-medium text-slate-500 whitespace-nowrap">{hist.date}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 flex-col gap-6">
          
          {/* Grade Summary */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-black text-[#0B1A3D] mb-6">Grade Summary</h2>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6 xl:gap-8">
              
              {/* Donut Chart (CSS) */}
              <div className="relative w-36 h-36 flex-shrink-0 rounded-full" 
                   style={{
                     background: 'conic-gradient(#10B981 0% 33.33%, #3B82F6 33.33% 83.33%, #FBBF24 83.33% 100%)'
                   }}>
                <div className="absolute inset-[15px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-black text-slate-800 leading-none">6</span>
                  <span className="text-[10px] font-bold text-slate-500 mt-1 text-center leading-tight">Total<br/>Subjects</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex-1 w-full space-y-2.5">
                {gradeSummary.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                      <span className="text-[12px] font-semibold text-slate-600">{item.label}</span>
                    </div>
                    <div className="flex gap-3 text-[12px] font-medium text-slate-500 text-right">
                      <span className="w-4">{item.count}</span>
                      <span className="w-14">({item.pct})</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Grading Scale */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden h-full">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-black text-[#0B1A3D]">Grading Scale</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="py-3 px-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Range</th>
                    <th className="py-3 px-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Descriptive Equivalent</th>
                    <th className="py-3 px-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingScale.map((scale, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 text-[12px] font-bold text-slate-700 whitespace-nowrap">{scale.range}</td>
                      <td className="py-3 px-5 text-[12px] font-medium text-slate-600">{scale.eq}</td>
                      <td className="py-3 px-5 text-[12px] font-medium text-slate-500">{scale.remark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      <p className="text-center text-[12px] font-medium text-slate-400">
        Note: Grades are subject to change until the end of the grading period.
      </p>

    </div>
  );
}
