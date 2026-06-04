import React from 'react';
import { 
  Edit3,
  Camera,
  Book,
  CheckCircle,
  Hourglass,
  Trophy,
  ShieldCheck,
  ChevronRight,
  FileText,
  CreditCard,
  Download,
  List,
  Mail,
  Phone,
  Calendar,
  User,
  Heart,
  Globe,
  GraduationCap,
  Award,
  Clock,
  Home,
  Lock,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function StudentProfilePage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[28px] font-black text-[#0B1A3D] mb-1">My Profile</h1>
          <p className="text-sm font-medium text-slate-500">View and manage your personal information and account settings.</p>
        </div>
        <div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
            <Edit3 className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-2 border-b border-slate-200 mb-8">
        <button className="px-5 py-3 text-[14px] font-bold text-blue-600 border-b-2 border-blue-600">
          Profile Information
        </button>
        <button className="px-5 py-3 text-[14px] font-semibold text-slate-500 hover:text-slate-800 transition-colors">
          Account Settings
        </button>
        <button className="px-5 py-3 text-[14px] font-semibold text-slate-500 hover:text-slate-800 transition-colors">
          Security
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* TOP ROW */}
        {/* Profile Card (Left, col-span-5) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-5 flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-28 h-28 rounded-full bg-slate-100 border-4 border-white shadow-sm overflow-hidden mb-4 relative group">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="flex items-center justify-center gap-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md text-[11px] font-bold transition-colors w-full border border-blue-100">
              <Camera className="w-3.5 h-3.5" />
              Change Photo
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-[18px] font-black text-[#0B1A3D] leading-tight mb-1">Shekainah Ashley Guevarra</h2>
            <p className="text-[12px] font-semibold text-slate-500 leading-tight">Bachelor of Technical Vocational Teacher Education</p>
            <p className="text-[12px] font-medium text-slate-400 mb-5">Tarlac State University</p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Student ID</span>
                  <span className="text-[12px] font-bold text-slate-800">2023200331</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Email Address</span>
                  <span className="text-[12px] font-bold text-slate-800 break-all">shekainah.guevarra@tsu.edu.ph</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Phone Number</span>
                  <span className="text-[12px] font-bold text-slate-800">+63 912 345 6789</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Date of Birth</span>
                  <span className="text-[12px] font-bold text-slate-800">January 15, 2002</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Gender</span>
                  <span className="text-[12px] font-bold text-slate-800">Female</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Civil Status</span>
                  <span className="text-[12px] font-bold text-slate-800">Single</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                <div className="flex-1 grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[12px] font-medium text-slate-500">Citizenship</span>
                  <span className="text-[12px] font-bold text-slate-800">Filipino</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Information (Middle, col-span-4) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-4">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Academic Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Program</span>
                <span className="text-[12px] font-bold text-slate-800 leading-snug">Bachelor of Technical Vocational Teacher Education</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Book className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Major</span>
                <span className="text-[12px] font-bold text-slate-800">-</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Year Level</span>
                <span className="text-[12px] font-bold text-slate-800">2nd Year</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Current Semester</span>
                <span className="text-[12px] font-bold text-slate-800">2nd Semester</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Student Type</span>
                <span className="text-[12px] font-bold text-slate-800">Regular</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Academic Status</span>
                <div><span className="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-md">Good Standing</span></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Year Admitted</span>
                <span className="text-[12px] font-bold text-slate-800">2023</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-[110px_1fr] gap-2">
                <span className="text-[12px] font-medium text-slate-500">Expected Graduation</span>
                <span className="text-[12px] font-bold text-slate-800">2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Address & Emergency (Right, col-span-3) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-3">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Contact Address</h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Home className="w-4 h-4 text-blue-500 shrink-0" />
              <div>
                <p className="text-[12px] font-black text-slate-800 mb-0.5">Permanent Address</p>
                <p className="text-[12px] font-medium text-slate-500 leading-snug">Blk 12, San Vicente,<br/>Tarlac City, Tarlac<br/>2300</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <div>
                <p className="text-[12px] font-black text-slate-800 mb-0.5">Current Address</p>
                <p className="text-[12px] font-medium text-slate-500 leading-snug">TSU Student Residence Hall<br/>San Vicente, Tarlac City,<br/>Tarlac 2300</p>
              </div>
            </div>
          </div>

          <hr className="my-5 border-slate-100" />

          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-4">Emergency Contact</h3>
          
          <div className="space-y-3">
            <div className="grid grid-cols-[80px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Name</span>
              <span className="text-[12px] font-bold text-slate-800">Maria Teresa Guevarra</span>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Relationship</span>
              <span className="text-[12px] font-bold text-slate-800">Mother</span>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Phone Number</span>
              <span className="text-[12px] font-bold text-slate-800">+63 917 876 5432</span>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW */}
        {/* Enrollment Summary (col-span-9) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-9">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Enrollment Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Enrolled Subjects</p>
                <p className="text-[20px] font-black text-slate-800 leading-none mb-1">6</p>
                <p className="text-[11px] font-semibold text-slate-500">18.00 Units</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Completed Subjects</p>
                <p className="text-[20px] font-black text-slate-800 leading-none mb-1">18</p>
                <p className="text-[11px] font-semibold text-slate-500">75% of total</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center shrink-0">
                <Hourglass className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Remaining Subjects</p>
                <p className="text-[20px] font-black text-slate-800 leading-none mb-1">6</p>
                <p className="text-[11px] font-semibold text-slate-500">25% to go</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Cumulative GPA</p>
                <p className="text-[20px] font-black text-slate-800 leading-none mb-1">1.68</p>
                <p className="text-[11px] font-semibold text-slate-500">Very Good</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links (col-span-3) */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 lg:col-span-3 flex flex-col justify-center space-y-1">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-3">Important Links</h3>
          <Link href="/student/evaluation" className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-2">
              <List className="w-4 h-4 text-blue-500" />
              <span className="text-[12px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">View Academic Evaluation</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="/student/grades" className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-[12px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">View Grades</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="/student/ledger" className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-500" />
              <span className="text-[12px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">View Student Ledger</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-blue-500" />
              <span className="text-[12px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Download Official Documents</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>
        </div>

        {/* BOTTOM ROW */}
        {/* Personal Information (col-span-9) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-9">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Father's Name</span>
              <span className="text-[12px] font-bold text-slate-800">Ramon L. Guevarra</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Nationality</span>
              <span className="text-[12px] font-bold text-slate-800">Filipino</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Mother's Name</span>
              <span className="text-[12px] font-bold text-slate-800">Maria Teresa D. Guevarra</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Religion</span>
              <span className="text-[12px] font-bold text-slate-800">Roman Catholic</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Guardian</span>
              <span className="text-[12px] font-bold text-slate-800">Maria Teresa D. Guevarra</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-[12px] font-medium text-slate-500">Blood Type</span>
              <span className="text-[12px] font-bold text-slate-800">O+</span>
            </div>
          </div>
        </div>

        {/* Account Activity (col-span-3) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:col-span-3">
          <h3 className="text-[14px] font-black text-[#0B1A3D] mb-5">Account Activity</h3>
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-0.5">Last Login</p>
              <p className="text-[12px] font-bold text-slate-800">May 20, 2024 10:15 AM</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-0.5">Account Created</p>
              <p className="text-[12px] font-bold text-slate-800">August 15, 2023 2:30 PM</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 mb-0.5">Last Password Change</p>
              <p className="text-[12px] font-bold text-slate-800">April 28, 2024 9:45 AM</p>
            </div>
          </div>
        </div>

        {/* Footer Banner (col-span-12) */}
        <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-xl p-5 lg:col-span-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-[14px] font-black text-[#0B1A3D] mb-0.5">Keep your information updated.</h3>
              <p className="text-[13px] font-medium text-slate-600">Ensure your profile information is accurate to get important updates and services.</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-blue-600 px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors shrink-0 sm:ml-4">
            <List className="w-4 h-4" />
            View Activity Log
          </button>
        </div>

      </div>

    </div>
  );
}
