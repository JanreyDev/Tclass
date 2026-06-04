import React from 'react';
import { 
  FileText,
  CreditCard,
  ChevronDown,
  Calendar,
  Wallet,
  ArrowDownCircle,
  Receipt,
  Award,
  Info,
  CalendarDays,
  Landmark,
  Store
} from 'lucide-react';

export default function StudentLedgerPage() {
  const transactions = [
    { date: 'May 15, 2024', ref: 'CHG-2025-0481', desc: 'Tuition Fee (2nd Semester)', type: 'Charge', charges: '₱ 20,000.00', payments: '-', adjustments: '-', balance: '₱ 20,000.00' },
    { date: 'May 15, 2024', ref: 'CHG-2025-0482', desc: 'Laboratory Fee', type: 'Charge', charges: '₱ 3,500.00', payments: '-', adjustments: '-', balance: '₱ 23,500.00' },
    { date: 'May 15, 2024', ref: 'CHG-2025-0483', desc: 'Miscellaneous Fee', type: 'Charge', charges: '₱ 2,150.00', payments: '-', adjustments: '-', balance: '₱ 25,650.00' },
    { date: 'May 16, 2024', ref: 'CHG-2025-0484', desc: 'ID Fee', type: 'Charge', charges: '₱ 200.00', payments: '-', adjustments: '-', balance: '₱ 25,850.00' },
    { date: 'May 16, 2024', ref: 'PAY-2025-0321', desc: 'Payment - Cash', type: 'Payment', charges: '-', payments: '₱ 10,000.00', adjustments: '-', balance: '₱ 15,850.00' },
    { date: 'May 20, 2024', ref: 'PAY-2025-0325', desc: 'Payment - Online (GCash)', type: 'Payment', charges: '-', payments: '₱ 8,650.00', adjustments: '-', balance: '₱ 7,200.00' },
    { date: 'May 20, 2024', ref: 'ADJ-2025-0102', desc: 'Scholarship Grant', type: 'Adjustment', charges: '-', payments: '-', adjustments: '-₱ 2,800.00', balance: '₱ 10,000.00' },
  ];

  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">Student Ledger</h1>
          <p className="text-sm font-medium text-slate-500">View your account balance, transactions, payments, and other financial records.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <FileText className="w-4 h-4" />
            Statement of Account
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <CreditCard className="w-4 h-4" />
            Pay Online
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-5 mb-6">
        <div className="flex flex-col gap-1.5 w-full sm:w-[240px]">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">Academic Year</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>2025-2026</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 w-full sm:w-[240px]">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">Semester</span>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
              <option>2nd Semester</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 w-full sm:w-[240px] ml-auto">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider pl-1">As of Date</span>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text" 
              defaultValue="May 20, 2024" 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[14px] font-semibold text-slate-700 cursor-pointer"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Wallet className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Charges</p>
            <p className="text-2xl font-black text-[#0B1A3D] leading-none tracking-tight">₱ 28,650.00</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <ArrowDownCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Payments</p>
            <p className="text-2xl font-black text-[#0B1A3D] leading-none tracking-tight">₱ 18,650.00</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Receipt className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Adjustments</p>
            <p className="text-2xl font-black text-[#0B1A3D] leading-none tracking-tight">₱ 0.00</p>
          </div>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 flex items-center gap-1">
              Balance Due
              <Info className="w-3 h-3 text-slate-400" />
            </p>
            <p className="text-2xl font-black text-rose-500 leading-none tracking-tight">₱ 10,000.00</p>
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-white border border-slate-200 rounded-xl mb-8 overflow-hidden">
        
        {/* Tabs */}
        <div className="flex px-6 border-b border-slate-200">
          <button className="px-5 py-4 text-sm font-bold text-blue-600 border-b-2 border-blue-600">
            All Transactions
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Charges
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Payments
          </button>
          <button className="px-5 py-4 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Adjustments
          </button>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">OR / Reference No.</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Description</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Type</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Charges</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Payments</th>
                <th className="py-5 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Adjustments</th>
                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-[13px] font-semibold text-slate-700 whitespace-nowrap">{txn.date}</td>
                  <td className="py-4 px-4 text-[13px] font-bold text-slate-800 whitespace-nowrap">{txn.ref}</td>
                  <td className="py-4 px-4 text-[13px] font-medium text-slate-600 whitespace-nowrap">{txn.desc}</td>
                  <td className="py-4 px-4">
                    {txn.type === 'Charge' && <span className="bg-blue-50 text-blue-600 text-[11px] font-bold px-3 py-1 rounded-md whitespace-nowrap border border-blue-100">Charge</span>}
                    {txn.type === 'Payment' && <span className="bg-emerald-50 text-emerald-600 text-[11px] font-bold px-3 py-1 rounded-md whitespace-nowrap border border-emerald-100">Payment</span>}
                    {txn.type === 'Adjustment' && <span className="bg-purple-50 text-purple-600 text-[11px] font-bold px-3 py-1 rounded-md whitespace-nowrap border border-purple-100">Adjustment</span>}
                  </td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-700 text-right whitespace-nowrap">{txn.charges}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-700 text-right whitespace-nowrap">{txn.payments}</td>
                  <td className="py-4 px-4 text-[13px] font-semibold text-slate-700 text-right whitespace-nowrap">{txn.adjustments}</td>
                  <td className={`py-4 px-6 text-[13px] font-semibold text-right whitespace-nowrap ${index === transactions.length - 1 ? 'text-rose-500' : 'text-slate-700'}`}>
                    {txn.balance}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50/50 border-t-2 border-slate-200">
                <td colSpan={4} className="py-5 px-6 text-[12px] font-black text-slate-800 uppercase tracking-wider">Total</td>
                <td className="py-5 px-4 text-[13px] font-black text-slate-800 text-right whitespace-nowrap">₱ 25,850.00</td>
                <td className="py-5 px-4 text-[13px] font-black text-slate-800 text-right whitespace-nowrap">₱ 18,650.00</td>
                <td className="py-5 px-4 text-[13px] font-black text-slate-800 text-right whitespace-nowrap">-₱ 2,800.00</td>
                <td className="py-5 px-6 text-[13px] font-black text-rose-500 text-right whitespace-nowrap">₱ 10,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Section - Reminders & Payment Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">
        
        {/* Important Reminders */}
        <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-blue-600" />
            <h3 className="text-[15px] font-black text-[#0B1A3D]">Important Reminders</h3>
          </div>
          <ul className="space-y-3 relative z-10">
            <li className="text-[13px] font-medium text-slate-700 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 shrink-0"></span>
              Please pay your balance on or before the deadline to avoid penalties.
            </li>
            <li className="text-[13px] font-medium text-slate-700 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 shrink-0"></span>
              Official receipts will be issued for all payments.
            </li>
            <li className="text-[13px] font-medium text-slate-700 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 shrink-0"></span>
              For any concerns, please visit the <strong className="font-bold">Accounting Office</strong>.
            </li>
          </ul>
          {/* Decorative Icon */}
          <div className="absolute -bottom-2 -right-2 text-blue-200/50 pointer-events-none">
            <CalendarDays className="w-32 h-32" />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-[15px] font-black text-[#0B1A3D] mb-5">Payment Methods</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800 mb-1">Online Payment</p>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Pay securely using GCash, Maya, or Debit/Credit Card.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800 mb-1">Bank Deposit</p>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Deposit to our accredited partner banks.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800 mb-1">Over-the-Counter</p>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Pay at the Accounting Office.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
