import React from 'react';
import { 
  ChevronDown, 
  Filter, 
  Upload, 
  Download, 
  Edit3, 
  Code,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

export default function FacultyGradesPage() {
  const students = [
    { id: 1, name: 'Dela Cruz, Juan Miguel', sno: '2023200101', q1: 9.5, q2: 8.0, l1: 13.5, a1: 14.0, me: 26.0, p: 18.0, total: 89.00, grade: 'B+', remark: 'Very Good', color: 'text-emerald-700 bg-emerald-50' },
    { id: 2, name: 'Reyes, Maria Isabel', sno: '2023200102', q1: 8.5, q2: 9.0, l1: 12.0, a1: 13.0, me: 25.0, p: 17.0, total: 84.50, grade: 'B', remark: 'Good', color: 'text-emerald-700 bg-emerald-50' },
    { id: 3, name: 'Santos, Christian Paul', sno: '2023200103', q1: 10.0, q2: 9.5, l1: 14.0, a1: 15.0, me: 28.0, p: 19.0, total: 95.50, grade: 'A', remark: 'Excellent', color: 'text-blue-700 bg-blue-50' },
    { id: 4, name: 'Garcia, Angela Mae', sno: '2023200104', q1: 9.0, q2: 8.5, l1: 13.0, a1: 13.0, me: 24.0, p: 16.0, total: 83.50, grade: 'B', remark: 'Good', color: 'text-emerald-700 bg-emerald-50' },
    { id: 5, name: 'Mendoza, John Carlo', sno: '2023200105', q1: 7.5, q2: 7.0, l1: 11.5, a1: 12.0, me: 22.0, p: 15.0, total: 75.00, grade: 'C+', remark: 'Satisfactory', color: 'text-amber-700 bg-amber-50' },
    { id: 6, name: 'Villanueva, Patricio', sno: '2023200106', q1: 8.0, q2: 7.5, l1: 12.0, a1: 12.5, me: 23.0, p: 16.5, total: 79.50, grade: 'B-', remark: 'Good', color: 'text-emerald-700 bg-emerald-50' },
    { id: 7, name: 'Castillo, Lianne Kate', sno: '2023200107', q1: 9.5, q2: 9.0, l1: 14.5, a1: 14.0, me: 27.0, p: 18.5, total: 92.50, grade: 'A-', remark: 'Excellent', color: 'text-blue-700 bg-blue-50' },
    { id: 8, name: 'Aquino, Mark Daniel', sno: '2023200108', q1: 10.0, q2: 9.5, l1: 15.0, a1: 15.0, me: 29.0, p: 19.5, total: 98.00, grade: 'A', remark: 'Excellent', color: 'text-blue-700 bg-blue-50' },
    { id: 9, name: 'Torres, Erika Mae', sno: '2023200109', q1: 8.5, q2: 8.0, l1: 13.0, a1: 13.5, me: 24.0, p: 16.5, total: 83.50, grade: 'B', remark: 'Good', color: 'text-emerald-700 bg-emerald-50' },
    { id: 10, name: 'Cruz, Adrian Luis', sno: '2023200110', q1: 7.0, q2: 6.5, l1: 10.0, a1: 11.0, me: 20.0, p: 14.5, total: 69.00, grade: 'C', remark: 'Fair', color: 'text-rose-700 bg-rose-50' },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1500px] mx-auto font-sans text-slate-800 flex flex-col h-full min-h-full">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-black text-[#0B1A3D] mb-1">Grade Sheets</h1>
        <div className="flex items-center text-[12px] font-medium text-slate-500">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Grades</span>
          <ChevronRight className="w-3.5 h-3.5 mx-1" />
          <span className="text-blue-600">Grade Sheets</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col xl:flex-row items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto flex-1">
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Academic Year</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2025-2026</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Semester</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>2nd Semester</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-64">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>Data Structures and Algorithms (CCS 201)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full sm:flex-1 xl:w-48">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Grading Period</span>
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2.5 text-[13px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                <option>Midterm</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-3 w-full xl:w-auto mt-2 xl:mt-0 h-full">
          <button className="h-[42px] mt-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Class Info Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
            <Code className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-[18px] font-black text-[#0B1A3D] mb-1">CCS 201 - Data Structures and Algorithms</h2>
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <span className="text-slate-700 font-bold">BSCS 2A</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>28 Students</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-12">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Grading Period</p>
            <p className="text-[15px] font-black text-slate-800 mb-0.5">Midterm</p>
            <p className="text-[12px] font-medium text-slate-500">Apr 15, 2026 - May 20, 2026</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Average Class Grade</p>
            <div className="flex items-center gap-3">
              <span className="text-[24px] font-black text-slate-800 leading-none">86.43</span>
              <span className="text-[14px] font-black text-emerald-600">B+</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Submission Rate</p>
            <p className="text-[24px] font-black text-slate-800 leading-none mb-1">96%</p>
            <p className="text-[12px] font-medium text-slate-500">27 of 28 submitted</p>
          </div>
        </div>
      </div>

      {/* Tabs and Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-6 overflow-x-auto w-full lg:w-auto no-scrollbar border-b border-slate-200">
          <button className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 pb-3 whitespace-nowrap">Grade Sheet</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Summary</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Statistics</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Item Analysis</button>
          <button className="text-[13px] font-bold text-slate-500 hover:text-slate-700 pb-3 whitespace-nowrap border-b-2 border-transparent">Settings</button>
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Upload className="w-4 h-4" />
            Import Grades
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-600 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors">
            <Edit3 className="w-4 h-4" />
            Enter Grades
          </button>
        </div>
      </div>

      {/* Main Grades Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6 flex-1 flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-center border-collapse min-w-[1200px]">
            <thead>
              <tr>
                <th colSpan={3} className="border-b border-slate-100 bg-white"></th>
                <th colSpan={5} className="py-2 border-b border-slate-100 bg-white text-[9px] font-black text-slate-400 tracking-widest uppercase">Grading Items</th>
                <th colSpan={4} className="border-b border-slate-100 bg-white"></th>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left w-12">#</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">Student Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">ID Number</th>
                
                <th className="py-4 px-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Quiz 1</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(10%)</span>
                  </div>
                </th>
                <th className="py-4 px-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Quiz 2</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(10%)</span>
                  </div>
                </th>
                <th className="py-4 px-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Lab 1</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(15%)</span>
                  </div>
                </th>
                <th className="py-4 px-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Assignment 1</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(15%)</span>
                  </div>
                </th>
                <th className="py-4 px-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Midterm Exam</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(30%)</span>
                  </div>
                </th>
                <th className="py-4 px-2 border-r border-slate-100">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Project</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(20%)</span>
                  </div>
                </th>

                <th className="py-4 px-4 bg-[#F8FAFC]">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Total</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5">(100%)</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-[10px] font-bold text-[#0B1A3D] uppercase tracking-wider">Grade</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Remarks</th>
                <th className="py-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4 text-[12px] font-bold text-slate-500 text-left">{stu.id}</td>
                  <td className="py-4 px-4 text-[13px] font-bold text-[#0B1A3D] text-left whitespace-nowrap">{stu.name}</td>
                  <td className="py-4 px-4 text-[12px] font-semibold text-slate-500 text-left">{stu.sno}</td>
                  
                  {/* Grading Items */}
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white">{stu.q1.toFixed(1)}</td>
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white">{stu.q2.toFixed(1)}</td>
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white">{stu.l1.toFixed(1)}</td>
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white">{stu.a1.toFixed(1)}</td>
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white">{stu.me.toFixed(1)}</td>
                  <td className="py-4 px-2 text-[12px] font-bold text-slate-700 bg-white border-r border-slate-100">{stu.p.toFixed(1)}</td>
                  
                  {/* Final Calculation */}
                  <td className="py-4 px-4 text-[13px] font-black text-[#0B1A3D] bg-[#F8FAFC]">{stu.total.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <div className={`text-[12px] font-bold px-2.5 py-1 rounded-md inline-block w-10 ${stu.color}`}>
                      {stu.grade}
                    </div>
                  </td>
                  <td className={`py-4 px-4 text-[12px] font-bold ${stu.remark === 'Satisfactory' || stu.remark === 'Fair' ? 'text-amber-500' : stu.remark === 'Excellent' || stu.remark === 'Very Good' || stu.remark === 'Good' ? 'text-emerald-600' : 'text-slate-600'}`}>
                    {stu.remark}
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
          <p className="text-[12px] font-medium text-slate-500">
            Showing 1 to 10 of 28 students
          </p>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-[13px]">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 text-slate-600 font-semibold text-[13px] transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Alert */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3 shrink-0">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 text-blue-600">
          <Info className="w-3.5 h-3.5" />
        </div>
        <p className="text-[12px] font-medium text-slate-600">Grades are auto-saved. Click "Enter Grades" to edit or update scores.</p>
      </div>

    </div>
  );
}
