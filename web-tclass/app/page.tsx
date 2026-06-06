import EnrollOptionsModal from "./components/EnrollOptionsModal";
import LoginModal from "./components/LoginModal";

const navItems = ["Home", "About", "Courses", "Facilities", "News & Events", "Gallery", "Contact"];

const stats = [
  ["2,500+", "Students", "Active learners enrolled", "bg-blue-50 text-blue-600", "M12 3.5 3.5 7v2.25L12 11l8.5-4.75V3.5L12 8.25 3.5 3.5Zm4.5 7.25v3.5c0 1.1-2.25 2.5-5 2.5s-5-1.4-5-2.5v-3.5L12 13.5l5-2.75Z"],
  ["120+", "Faculty", "Teachers and staff", "bg-green-50 text-green-600", "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0v.5H5V20Zm13-9 2 1.2V16l-2-1.2V11Z"],
  ["5,000+", "Books", "Library resources", "bg-indigo-50 text-indigo-600", "M5 4.5A2.5 2.5 0 0 1 7.5 2H20v16H7.5A2.5 2.5 0 0 0 5 20.5v-16Zm2.5 13H18V4H7.5A.5.5 0 0 0 7 4.5v13.05c.16-.03.33-.05.5-.05Z"],
  ["150+", "Awards", "Regional achievements", "bg-amber-50 text-amber-600", "M7 3h10v3h3a4 4 0 0 1-4 4h-.1A6.02 6.02 0 0 1 13 13.9V17h3v2H8v-2h3v-3.1A6.02 6.02 0 0 1 8.1 10H8a4 4 0 0 1-4-4h3V3Zm10 5a2 2 0 0 0 2-2h-2v2ZM7 8V6H5a2 2 0 0 0 2 2Z"],
  ["45+", "Years", "Of excellence", "bg-slate-100 text-slate-600", "M4 20h16v-2H4v2Zm1-4h3V9H5v7Zm5 0h3V9h-3v7Zm5 0h3V9h-3v7ZM3 7h18L12 2 3 7Z"],
];

const courses = [
  {
    icon: "💻",
    title: "Computer Systems Servicing NC II",
    text: "Install, configure, and maintain computer systems and networks.",
    badge: "IT & Networking",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    dotClass: "bg-blue-500",
    iconClass: "bg-blue-600 text-white",
    linkClass: "text-blue-600",
  },
  {
    icon: "🍽️",
    title: "Food and Beverage Services NC II",
    text: "Learn professional table service, beverage preparation, and hospitality skills.",
    badge: "Hospitality",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    dotClass: "bg-green-500",
    iconClass: "bg-green-600 text-white",
    linkClass: "text-green-600",
  },
  {
    icon: "🔥",
    title: "Shielded Metal Arc Welding NC II",
    text: "Develop expertise in welding techniques for construction and manufacturing.",
    badge: "Industrial Arts",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=85",
    dotClass: "bg-amber-500",
    iconClass: "bg-amber-500 text-white",
    linkClass: "text-amber-500",
  },
  {
    icon: "🥐",
    title: "Bread and Pastry Production NC II",
    text: "Master the art of baking breads, cakes, pastries, and other desserts.",
    badge: "Culinary",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    dotClass: "bg-violet-500",
    iconClass: "bg-violet-600 text-white",
    linkClass: "text-violet-600",
  },
];

const facilities = [
  {
    name: "Library",
    text: "Quiet reading spaces and updated learning resources.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Computer Lab",
    text: "Technology-ready rooms for digital learning.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Science Lab",
    text: "Hands-on experiments for curious learners.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Gymnasium",
    text: "A shared space for sports, events, and assemblies.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Audio Visual Room",
    text: "Modern presentation space for interactive sessions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=85",
  },
];

const news = [
  ["Enrollment for SY 2024–2025 is now open!", "May 20, 2024", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=240&q=80"],
  ["Recognition Day will be on June 15, 2024.", "May 18, 2024", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=240&q=80"],
  ["Brigada Eskwela 2024 schedule announced.", "May 10, 2024", "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=240&q=80"],
];

const events = [
  ["Recognition Day", "Jun 15", "8:00 AM · School Gymnasium"],
  ["Foundation Day", "Jun 30", "9:00 AM · School Grounds"],
  ["Sports Fest 2024", "Jul 20", "7:00 AM · School Grounds"],
  ["Parent-Teacher Meeting", "Aug 12", "1:00 PM · AVR"],
];

const achievements = [
  "98% Graduation Rate",
  "Top Performing School in Division",
  "Regional Science Fair Champion",
  "National Quiz Bee Finalist",
  "Consistent Board Exam Passers",
];

const testimonials = [
  {
    name: "Maria Dela Cruz",
    role: "Grade 12 Student",
    tag: "Student Voice",
    quote: "TCLASS helped me become more confident, disciplined, and prepared for my future.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Mr. Juan Reyes",
    role: "Science Teacher",
    tag: "Faculty Story",
    quote: "This is a community where teachers and learners work together with purpose, curiosity, and excellence.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Mrs. Ana Santos",
    role: "Parent",
    tag: "Parent Trust",
    quote: "I am proud that my child studies in a school that values both strong education and good character.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=320&q=85",
  },
];

const partners = [
  {
    name: "Our Partners",
    detail: "NATIONAL HIGH SCHOOL",
    image: "/seal.png",
    logoClass: "h-14 w-14",
  },
  {
    name: "DOST",
    detail: "Department of Science\nand Technology",
    image: "/dost.png",
    logoClass: "h-14 w-14",
  },
  {
    name: "CHED",
    detail: "Commission on\nHigher Education",
    image: "/ched.png",
    logoClass: "h-14 w-14",
  },
  {
    name: "TESDA",
    detail: "Technical Education and\nSkills Development Authority",
    image: "/tesda.png",
  },
  {
    name: "",
    detail: "",
    image: "/unicef.png",
    isWide: true
  },
  {
    name: "",
    detail: "",
    image: "/rotary.png",
    isWide: true
  },
];

const schoolPillars = [
  {
    label: "Mission",
    icon: "🎯",
    accent: "bg-blue-50 text-blue-600",
    line: "bg-blue-400",
    text: "To provide quality education that develops students' knowledge, skills, values, and attitudes for lifelong learning and service to society.",
  },
  {
    label: "Vision",
    icon: "👁️",
    accent: "bg-amber-50 text-amber-600",
    line: "bg-amber-400",
    text: "To be a leading institution committed to excellence, innovation, and the holistic development of every learner.",
  },
  {
    label: "Core Values",
    icon: "💎",
    accent: "bg-green-50 text-green-600",
    line: "bg-green-400",
    values: ["Integrity", "Service", "Excellence", "Leadership", "Respect", "Teamwork"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 lg:px-6">
          <a className="flex items-center gap-3" href="#">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/seal.png" alt="Tarlac Seal" className="w-11 h-11 rounded-full object-contain" />
            </div>
            <div>
              <p className="text-lg font-black leading-5 tracking-wide text-[#08265c]">TCLASS</p>
              <p className="text-[11px] font-bold tracking-wide text-[#08265c]/80 mt-0.5 leading-snug">Tarlac Center for Learning<br/>and Skills Success</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#08265c] lg:flex">
            {navItems.map((item) => (
              <a
                className={`transition hover:text-amber-500 ${item === "Home" ? "text-amber-500" : ""}`}
                href={`#${item.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LoginModal />
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-visible">
        <div className="absolute inset-0 -z-20 bg-[#eef8ff]" />
        <div className="absolute inset-y-0 right-0 -z-10 w-full bg-[linear-gradient(90deg,#eef8ff_0%,#eef8ff_25%,rgba(238,248,255,.92)_39%,rgba(255,255,255,.18)_66%,rgba(255,255,255,0)_100%),url('/tclass.jpg')] bg-cover bg-[center_right]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_16%,rgba(255,255,255,.75),transparent_25%),linear-gradient(180deg,rgba(255,255,255,.05),rgba(238,248,255,.08))]" />
        <div className="absolute bottom-0 left-0 -z-10 h-28 w-[34%] bg-gradient-to-b from-transparent to-[#f6fbff]" />
        <div className="mx-auto grid min-h-[560px] max-w-[1280px] items-center px-5 pb-28 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-6">
          <div>
            <p className="mb-4 text-[13px] font-black uppercase tracking-wide text-amber-500">Welcome to TCLASS</p>
            <h1 className="max-w-[800px] text-[46px] font-black leading-[1.16] tracking-tight text-[#08265c] md:text-[62px]">
              Build job-ready skills with a <span className="text-[#fe9a00]">modern training</span> center in{" "}
              <span className="text-[#fe9a00]">Tarlac</span>.
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#08265c]/90">
              The Tarlac Center for Learning and Skills Success is committed to providing quality education, fostering values, and developing future-ready individuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <EnrollOptionsModal />
              <a className="rounded-xl border border-[#08265c]/25 bg-white/85 px-7 py-4 text-sm font-bold text-[#08265c] transition hover:-translate-y-1 hover:bg-white" href="#about">
                Learn More →
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2 px-5">
          <div className="mx-auto grid w-fit max-w-full overflow-hidden rounded-[20px] border-0 bg-white shadow-none sm:grid-cols-2 lg:grid-cols-5">
            {stats.map(([value, label, description, iconColor, icon]) => (
              <div className="group relative flex items-center gap-4 px-6 py-4" key={label}>
                <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#08265c]/10 lg:block group-last:hidden" />
                <div className={`grid size-11 shrink-0 place-items-center rounded-2xl ${iconColor}`}>
                  <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-[24px] font-black leading-none tracking-tight text-[#08265c]">{value}</p>
                  <p className="mt-1 text-[12px] font-black uppercase tracking-wide text-[#08265c]">{label}</p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f6fbff]">
        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-28 lg:px-6">
        <div className="grid gap-8 py-7 lg:grid-cols-3 lg:gap-0">
          {schoolPillars.map((pillar) => (
            <article
              className="grid gap-5 lg:grid-cols-[76px_1fr] lg:border-r lg:border-slate-200 lg:px-10 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
              key={pillar.label}
            >
              <div className={`grid size-16 place-items-center rounded-full text-3xl ${pillar.accent}`}>
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#08265c]">{pillar.label}</h3>
                <div className={`mt-3 h-1 w-10 rounded-full ${pillar.line}`} />
                {pillar.values ? (
                  <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
                    {pillar.values.map((value) => (
                      <p className="flex items-center gap-2 text-sm font-bold text-slate-600" key={value}>
                        <span className="grid size-4 place-items-center rounded-full border border-green-500 text-[10px] font-black leading-none text-green-600">
                          ✓
                        </span>
                        {value}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 max-w-[290px] text-sm font-semibold leading-7 text-slate-600">{pillar.text}</p>
                )}
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="mx-auto max-w-[1280px] px-5 pb-16 lg:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row min-h-[550px]">
          
          {/* Background Split - Blue Left, White Right with Yellow Border (Desktop only) */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <svg className="absolute h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* White background on the right */}
              <rect width="100" height="100" fill="#ffffff" />
              {/* Capitol Background on the right */}
              <image href="/capitol-bg.png" x="40" y="0" width="60" height="100" preserveAspectRatio="xMidYMid slice" opacity="0.15" />
              
              {/* Blue background with S-curve to make room for center title */}
              <path d="M0,0 L32,0 C 36,0 36,26 45,26 L55,26 C 64,26 64,100 72,100 L0,100 Z" fill="#08265c" />
              {/* Yellow stroke */}
              <path d="M32,0 C 36,0 36,26 45,26 L55,26 C 64,26 64,100 72,100" fill="none" stroke="#fe9a00" strokeWidth="0.4" />
            </svg>
          </div>

          {/* Mobile Backgrounds */}
          <div className="absolute inset-0 z-0 block md:hidden flex flex-col">
            <div className="flex-1 bg-[#08265c] relative">
              <div className="absolute bottom-0 w-full h-1 bg-[#fe9a00]" />
            </div>
            <div className="flex-1 bg-white relative">
              <img src="/capitol-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-15" alt="" />
            </div>
          </div>

          {/* Top Center Title (Desktop) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-md px-4 hidden md:block">
             <p className="text-[11px] font-black uppercase tracking-widest text-[#fe9a00]">Our Leadership</p>
             <h2 className="mt-1 text-[28px] font-black text-[#08265c] tracking-tight">Message from Our Leaders</h2>
             <p className="mt-1 text-[13px] text-[#08265c]/80 font-medium">Guided by a shared vision and a strong commitment to excellence.</p>
          </div>

          {/* Top Center Title (Mobile) */}
          <div className="relative z-30 text-center w-full px-5 pt-10 pb-4 block md:hidden bg-[#08265c]">
             <p className="text-[11px] font-black uppercase tracking-widest text-[#fe9a00]">Our Leadership</p>
             <h2 className="mt-1 text-2xl font-black text-white tracking-tight">Message from Our Leaders</h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full h-full">
            
            {/* Left Column: Center Director */}
            <div className="relative flex flex-col md:block items-center md:items-end justify-start h-auto md:h-[550px] pt-10 md:pt-0 overflow-hidden">
              {/* Background Logo */}
              <img src="/tclass-logo.png" className="absolute left-[-5%] top-[10%] h-64 opacity-[0.06] mix-blend-overlay pointer-events-none" alt="" />
              
              {/* Director Image */}
              <img src="/mara.png" className="relative md:absolute left-0 bottom-0 h-[300px] md:h-[90%] object-contain z-20 mx-auto md:mx-0 drop-shadow-2xl" alt="Dr. Marites D. Ramos" />
              
              {/* Director Text */}
              <div className="relative md:absolute right-0 md:right-8 lg:right-12 top-0 md:top-1/2 md:-translate-y-[40%] w-full max-w-[320px] text-white z-30 p-6 md:p-0 text-center md:text-left bg-[#08265c] md:bg-transparent mt-[-20px] md:mt-0 rounded-t-3xl md:rounded-none">
                <span className="text-5xl text-[#fe9a00] font-serif leading-none absolute -top-4 md:-top-8 left-4 md:-left-4 opacity-40">“</span>
                <p className="font-bold text-[#fe9a00] text-[10px] uppercase tracking-widest mt-2 md:mt-1">Message from the</p>
                <h3 className="text-[26px] font-black leading-tight mt-0.5 tracking-tight">Center Director</h3>
                <div className="w-10 h-0.5 bg-[#fe9a00] mt-3 mb-4 mx-auto md:mx-0" />
                <p className="text-[13px] text-white/90 leading-relaxed mb-5 font-medium">
                  At TCLASS, we believe that education is the foundation of personal and professional growth. Our programs equip learners with industry-relevant skills and the confidence to thrive today and lead tomorrow.
                </p>
                <p className="font-serif italic text-2xl text-[#fe9a00] tracking-wide">Dr. Marites D. Ramos</p>
                <p className="text-[10px] text-white/60 uppercase tracking-widest mt-1 font-bold">Center Director, TCLASS</p>
                
                <button className="mt-6 mx-auto md:mx-0 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-bold text-[#08265c] transition hover:bg-slate-100 hover:shadow-lg shadow-md group">
                  Read Full Message <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Governor */}
            <div className="relative flex flex-col-reverse md:block items-center md:items-end justify-end h-auto md:h-[550px] overflow-hidden">
              {/* Governor Image */}
              <img src="/gov-yap.png" className="relative md:absolute right-0 bottom-0 h-[300px] md:h-[95%] object-contain z-20 mx-auto md:mx-0 drop-shadow-2xl" alt="Hon. Christian Yap" />
              
              {/* Tarlac Seal */}
              <img src="/seal.png" className="absolute right-4 top-4 md:right-8 md:top-12 h-20 md:h-24 z-30 drop-shadow-lg" alt="Province of Tarlac" />

              {/* Governor Text */}
              <div className="relative md:absolute left-0 md:left-8 lg:left-12 top-0 md:top-1/2 md:-translate-y-[40%] w-full max-w-[320px] text-[#08265c] z-30 p-6 md:p-0 text-center md:text-left bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none mt-[-20px] md:mt-0 rounded-b-3xl md:rounded-none">
                <span className="text-5xl text-[#08265c] font-serif leading-none absolute -top-4 md:-top-8 left-4 md:-left-4 opacity-20">“</span>
                <p className="font-bold text-[#08265c] text-[10px] uppercase tracking-widest mt-2 md:mt-1">Message from the</p>
                <h3 className="text-[26px] font-black leading-tight mt-0.5 tracking-tight">Governor</h3>
                <div className="w-10 h-0.5 bg-[#fe9a00] mt-3 mb-4 mx-auto md:mx-0" />
                <p className="text-[13px] text-[#08265c]/80 leading-relaxed mb-5 font-medium">
                  Welcome to TCLASS. Our commitment is to provide quality education and skills training that empower every Tarlaqueño to succeed in an ever-changing world. Together, let us build a brighter and more prosperous future for Tarlac.
                </p>
                <p className="font-serif italic text-2xl text-[#08265c] tracking-wide">Hon. Christian Yap</p>
                <p className="text-[10px] text-[#08265c]/60 uppercase tracking-widest mt-1 font-bold">Governor, Province of Tarlac</p>
                
                <button className="mt-6 mx-auto md:mx-0 flex items-center gap-2 rounded-full bg-[#08265c] px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-[#08265c]/90 hover:shadow-lg shadow-md group">
                  Read Full Message <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="courses" className="mx-auto max-w-[1280px] px-5 pb-14 pt-12 lg:px-6">
        <SectionTitle title="Our Courses" subtitle="Industry-relevant training programs for skill development and employment." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#08265c]/20"
              key={course.title}
            >
              <div className="flex h-full flex-col">
                <div className="relative h-44 shrink-0 overflow-hidden bg-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08265c]/65 via-[#08265c]/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wide text-[#08265c]">
                      <span className={`size-2 rounded-full ${course.dotClass}`} />
                      {course.badge}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-black leading-7 text-[#08265c]">{course.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{course.text}</p>

                  <a className={`mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black ${course.linkClass}`} href="#">
                    Learn More <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="facilities" className="relative overflow-hidden bg-[#f6fbff] py-18">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-5 lg:px-6">
          <SectionTitle title="Our Facilities" subtitle="Spaces designed to support learning, creativity, and community." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr]">
            {facilities.map((facility, index) => (
              <article
                className={`group overflow-hidden flex flex-col rounded-[22px] border border-slate-200 bg-white ${
                  index === 0 ? "md:col-span-2 lg:row-span-2" : ""
                }`}
                key={facility.name}
              >
                <div className={`relative overflow-hidden flex-1 ${index === 0 ? "min-h-[320px]" : "min-h-[176px]"}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${facility.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08265c]/80 via-[#08265c]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-[22px] font-black text-white drop-shadow-md">{facility.name}</h3>
                    <p className="mt-1.5 max-w-md text-[13px] font-medium leading-relaxed text-white/90 drop-shadow-md">{facility.text}</p>
                  </div>
                </div>
                <div className="shrink-0 p-5 bg-white border-t border-slate-100 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] font-bold text-[#08265c]">
                    <span className="flex items-center gap-2">
                      <span className="relative flex size-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex size-2 rounded-full bg-green-500"></span></span>
                      Open for students
                    </span>
                    <span className="group-hover:text-amber-500 transition-colors flex items-center gap-1">
                      View Gallery <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
            <article className="flex min-h-40 flex-col justify-between rounded-[22px] border border-[#08265c]/10 bg-white p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-amber-500">Campus Spaces</p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#08265c]">
                  Explore more learning facilities.
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  View classrooms, activity areas, and student support spaces around the campus.
                </p>
              </div>
              <a className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#08265c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b347a]" href="#">
                View All Facilities <span>→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="news-and-events" className="relative overflow-hidden bg-[#f7fbff] py-20">
        <div className="absolute left-[-120px] top-20 size-72 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] size-80 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="relative mx-auto max-w-[1280px] px-5 lg:px-6">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-amber-500">Campus Pulse</p>
              <h2 className="mt-2 text-3xl font-black text-[#08265c] md:text-4xl">Proud moments, fresh news, and what’s next.</h2>
            </div>
            <a className="inline-flex w-fit rounded-xl border border-[#08265c]/20 px-5 py-3 text-sm font-black text-[#08265c]" href="#">
              View School Calendar →
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#08265c] p-8 text-white">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,38,92,.9),rgba(8,38,92,.62)),url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=85')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,.24),transparent_26%)]" />
              <div className="relative flex h-full flex-col">
                <span className="w-fit rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-wide text-amber-200">
                  School Pride
                </span>
                <h3 className="mt-7 max-w-md text-4xl font-black leading-tight">Achievements worth celebrating.</h3>
                <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/82">
                  A quick look at the wins, milestones, and learner success stories that make our school community proud.
                </p>

                <div className="mt-auto grid gap-3 sm:grid-cols-2">
                  {achievements.map((achievement) => (
                    <div className="rounded-2xl border border-white/10 bg-white/12 px-4 py-3 text-sm font-bold text-white/92 backdrop-blur" key={achievement}>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[28px] border border-slate-200/80 bg-white p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#08265c]">Latest News</h3>
                  <a className="text-sm font-black text-amber-600" href="#">All News →</a>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {news.map(([title, date, image]) => (
                    <a className="group overflow-hidden rounded-2xl border border-slate-100 bg-white" href="#" key={title}>
                      <div className="h-28 overflow-hidden bg-slate-100">
                        <div className="size-full bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-black leading-6 text-[#08265c]">{title}</p>
                        <p className="mt-2 text-xs font-semibold text-slate-500">{date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-slate-200 bg-white p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#08265c]">Upcoming Events</h3>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">This Term</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {events.map(([title, date, time]) => (
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4" key={title}>
                      <p className="text-xs font-black uppercase tracking-wide text-amber-600">{date}</p>
                      <p className="mt-2 font-black text-[#08265c]">{title}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{time}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#08265c] px-5 py-20 text-center text-white">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(8,38,92,.88),rgba(8,38,92,.88)),url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center" />
        <div className="text-4xl text-amber-400">🎓</div>
        <h2 className="mt-4 text-3xl font-black md:text-4xl">Be Part of Our Learning Community</h2>
        <p className="mt-3 text-white/85">Discover your potential, build your future, and make a difference.</p>
        <a className="mt-8 inline-flex rounded-xl bg-amber-400 px-8 py-4 font-black text-[#08265c] shadow-xl transition hover:-translate-y-1" href="#contact">
          Enroll Now →
        </a>
      </section>

      <section className="relative overflow-hidden bg-white py-16">
        <div className="absolute inset-x-0 top-0 h-3 bg-[#08265c]" />
        <div className="relative mx-auto max-w-[1280px] px-5 lg:px-6">
          <div className="mb-9 text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#08265c]">What People Say</h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-amber-400" />
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-xl font-bold text-[#08265c] transition hover:border-[#08265c]/30 md:grid">
              ‹
            </button>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article className="grid min-h-[160px] gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[112px_1fr]" key={testimonial.name}>
                  <div
                    className="h-36 rounded-xl bg-cover bg-center sm:h-full"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold leading-7 text-[#08265c]/85">“{testimonial.quote}”</p>
                    <div className="mt-4">
                      <p className="text-sm font-black text-[#08265c]">— {testimonial.name}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-xl font-bold text-[#08265c] transition hover:border-[#08265c]/30 md:grid">
              ›
            </button>
          </div>
          <div className="mt-7 flex justify-center gap-2">
            <span className="size-2 rounded-full bg-[#08265c]" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-10 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:justify-between">
          {partners.map((partner, i) => (
            <div className="flex items-center gap-3" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={partner.image} alt={partner.name} className={partner.isWide ? "h-11 object-contain" : "w-[52px] h-[52px] object-contain"} />
              {partner.name && (
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#08265c] leading-tight">{partner.name}</span>
                  <span className="text-[11px] font-medium text-[#08265c]/80 leading-tight whitespace-pre-line mt-0.5">{partner.detail}</span>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#061f4d] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-2 border-amber-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/seal.png" alt="Tarlac Seal" className="w-12 h-12 rounded-full object-contain" />
              </div>
              <div>
                <p className="font-black">TCLASS</p>
                <p className="text-[10px] font-bold uppercase leading-snug">Provincial Government<br/>of Tarlac</p>
              </div>
            </div>
            <p className="leading-7 text-white/75 text-sm">Tarlac Center for Learning and Skills Success. Empowering individuals through quality education and skills development.</p>
          </div>
          <div>
            <h3 className="mb-4 font-black uppercase">Quick Links</h3>
            <div className="grid gap-2 text-white/75">{navItems.map((item) => <a className="hover:text-amber-300 text-sm" href="#" key={item}>{item}</a>)}</div>
          </div>
          <div>
            <h3 className="mb-4 font-black uppercase">Contact Us</h3>
            <div className="space-y-3 text-white/75 text-sm">
              <p className="flex gap-2"><span className="shrink-0">📍</span> <span>IT Training Center Bldg, Brgy. Tibag, Tarlac City</span></p>
              <p className="flex gap-2"><span className="shrink-0">☎</span> <span>0917-706-6718</span></p>
              <p className="flex gap-2"><span className="shrink-0">✉</span> <span>pgt.tclass@gmail.com</span></p>
              <p className="flex gap-2"><span className="shrink-0">f</span> <span>PROVINCIAL GOVERNMENT OF TARLAC<br/>PESO TARLAC PROVINCE</span></p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-black uppercase">Find Us</h3>
            <div className="h-40 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 relative">
              <iframe 
                src="https://maps.google.com/maps?q=Brgy.%20Tibag,%20Tarlac%20City&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="TCLASS Location Map"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/60">
          © 2024 Provincial Government of Tarlac. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-black uppercase tracking-tight text-[#08265c]">{title}</h2>
      <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-amber-400" />
      {subtitle ? <p className="mt-3 text-sm font-semibold text-slate-500">{subtitle}</p> : null}
    </div>
  );
}
