import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const GRID_FADE_DURATION_MS = 280;

  const categories = [
    "All",
    "Freshers",
    "Short Term Courses",
    "Working Professionals",
    "Protocol Courses",
    "Consultancy Services",
    "Scripting",
    "Functional Verification Projects",
    "1-1 Training",
    "Interview Preparation Courses",
    "BTech & MTech Internship",
  ];

  const courseCards = [
    {
      title: "Functional Verification For Freshers",
      courseName: "JobwayTech Verification Foundation",
      duration: "8 months",
      enrolled: "2752",
      tags: ["Live-Classroom", "Online-Live", "e-learning"],
      categories: [
        "Freshers",
        "Short Term Courses",
        "Functional Verification Projects",
      ],
    },
    {
      title: "Physical Design Training",
      courseName: "Corporate Hiring Readiness Program",
      duration: "8 months",
      enrolled: "2563",
      tags: ["Live-Classroom", "Online-Live", "e-learning"],
      categories: [
        "Working Professionals",
        "Protocol Courses",
        "Consultancy Services",
      ],
    },
    {
      title: "FPGA Design And Verification",
      courseName: "FPGA System Design Training",
      duration: "24 weeks",
      enrolled: "2985",
      tags: ["Live-Classroom", "Online-Live", "e-learning"],
      categories: ["1-1 Training", "Scripting", "BTech & MTech Internship"],
    },
    {
      title: "DFT Training",
      courseName: "Interview + Placement Accelerator",
      duration: "8 months",
      enrolled: "2897",
      tags: ["Live-Classroom", "Online-Live", "e-learning"],
      categories: [
        "Interview Preparation Courses",
        "Working Professionals",
        "Freshers",
      ],
    },
  ];

  const employeeProfiles = [
    {
      name: "Ritika Sharma",
      role: "Senior Talent Acquisition Lead",
      experience: "9+ years",
      focusArea: "Semiconductor Hiring",
      location: "Bengaluru",
      initials: "RS",
      accent: "from-cyan-500 to-blue-600",
    },
    {
      name: "Arjun Mehta",
      role: "Technical Training Manager",
      experience: "11+ years",
      focusArea: "VLSI Upskilling Programs",
      location: "Hyderabad",
      initials: "AM",
      accent: "from-emerald-500 to-teal-600",
    },
    {
      name: "Neha Verma",
      role: "Client Success Consultant",
      experience: "7+ years",
      focusArea: "Campus To Corporate Transition",
      location: "Pune",
      initials: "NV",
      accent: "from-orange-500 to-rose-500",
    },
    {
      name: "Karan Iyer",
      role: "Placement Operations Head",
      experience: "10+ years",
      focusArea: "Interview & Offer Pipeline",
      location: "Chennai",
      initials: "KI",
      accent: "from-indigo-500 to-sky-600",
    },
    {
      name: "Priya Nair",
      role: "Learning Experience Designer",
      experience: "8+ years",
      focusArea: "Hands-on Curriculum Design",
      location: "Kochi",
      initials: "PN",
      accent: "from-fuchsia-500 to-pink-500",
    },
    {
      name: "Rahul Dev",
      role: "Employer Partnership Manager",
      experience: "12+ years",
      focusArea: "Strategic Hiring Alliances",
      location: "Mumbai",
      initials: "RD",
      accent: "from-amber-500 to-orange-600",
    },
  ];

  const companyGallery = [
    {
      title: "Corporate Office Collaboration",
      caption: "Daily strategy and hiring operations",
      comment:
        "The planning culture here keeps every team aligned and hiring outcomes predictable.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      size: "lg:col-span-2",
    },
    {
      title: "Technical Training Lab",
      caption: "Hands-on mentoring sessions",
      comment:
        "Every session is practical and project-first so learners are ready for real interviews.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      size: "",
    },
    {
      title: "Interview Readiness Programs",
      caption: "Mock interviews and feedback loops",
      comment:
        "Our mock interview feedback helps candidates improve confidence and communication quickly.",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
      size: "",
    },
    {
      title: "Client Partnership Meetings",
      caption: "Building employer hiring pipelines",
      comment:
        "Close partnerships with companies let us map training outcomes directly to open roles.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      size: "lg:col-span-2",
    },
  ];

  const serviceModes = [
    {
      title: "IT Placements",
      description: "Software, testing, data, cloud, and support roles.",
      tone: "from-cyan-600 to-blue-600",
    },
    {
      title: "Non-IT Placements",
      description: "Operations, HR, finance, sales, and admin opportunities.",
      tone: "from-emerald-600 to-teal-600",
    },
    {
      title: "Work From Home",
      description: "Remote-first roles with flexible onboarding and support.",
      tone: "from-indigo-600 to-sky-600",
    },
    {
      title: "Office Roles",
      description: "On-site jobs with structured team collaboration.",
      tone: "from-orange-500 to-rose-500",
    },
    {
      title: "Hybrid Mode",
      description: "Balanced remote and office opportunities by employer need.",
      tone: "from-fuchsia-600 to-pink-600",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isGridFading, setIsGridFading] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const filteredCourseCards = courseCards.filter(
    (card) =>
      selectedCategory === "All" || card.categories.includes(selectedCategory),
  );

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;

    setIsGridFading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsGridFading(false);
    }, GRID_FADE_DURATION_MS / 2);
  };

  const activeGalleryItem = companyGallery[currentGalleryIndex];

  const showNextGallerySlide = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % companyGallery.length);
  };

  const showPreviousGallerySlide = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + companyGallery.length) % companyGallery.length,
    );
  };

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % companyGallery.length);
    }, 4500);

    return () => clearInterval(slideshowTimer);
  }, [companyGallery.length]);

  return (
    <>
      <Head>
        <title>Job Way Tech Consultancy | Career & Talent Solutions</title>
        <meta
          name="description"
          content="Job Way Tech Consultancy connects skilled candidates with top employers through training, hiring, and placement support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-160 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.15),transparent_60%)]" />
        </div>

        <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:pb-24 md:pt-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Job Way Tech Consultancy
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Careers. Hire Better. Grow Faster.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We help job seekers and businesses succeed with expert
              recruitment, practical upskilling, and end-to-end hiring solutions
              tailored to today&apos;s tech market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#"
                className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
              >
                Explore Services
              </Link>
              <Link
                href="#"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                Contact Consultancy Team
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">12K+</p>
                <p className="mt-1 text-slate-500">Candidates supported</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">150+</p>
                <p className="mt-1 text-slate-500">Hiring companies</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">92%</p>
                <p className="mt-1 text-slate-500">Successful placements</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-35px_rgba(2,132,199,0.45)] sm:p-8">
              <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Featured service track
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight">
                  Recruitment + Upskilling Acceleration Program
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  Structured hiring pipeline support with candidate screening,
                  role-based training, interview preparation, and onboarding
                  assistance.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium text-cyan-100">
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Talent sourcing
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Skill assessments
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Interview coordination
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Onboarding support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full px-4 pb-20 md:px-6 md:pb-24">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(140deg,#ffffff_0%,#f8fafc_45%,#ecfeff_100%)] p-4 shadow-[0_30px_90px_-55px_rgba(14,116,144,0.5)] md:p-6">
            <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-5 md:mb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Learning Tracks
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Explore JobwayTech Trending Courses
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Select a category and discover career-focused training
                  modules.
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                {filteredCourseCards.length} programs available
              </span>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <aside className="h-fit rounded-2xl border border-slate-200 bg-white/90 p-3 md:w-64">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Pick By Category
                </p>
                <div className="flex flex-wrap gap-2 md:block md:space-y-1.5 md:gap-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      className={`rounded-full border px-3 py-1.5 text-left text-xs font-semibold transition md:w-full md:rounded-lg md:px-2.5 ${
                        selectedCategory === category
                          ? "border-cyan-300 bg-cyan-100 text-cyan-800"
                          : "border-slate-300 bg-white text-slate-700 hover:border-cyan-200 hover:text-cyan-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </aside>

              <div
                className={`grid flex-1 gap-5 transition-all duration-300 ease-in-out motion-reduce:transition-none sm:grid-cols-2 ${
                  isGridFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {filteredCourseCards.slice(0, 4).map((card, index) => (
                  <article
                    key={card.title}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`relative h-30 p-4 text-white ${
                        index % 2 === 0
                          ? "bg-linear-to-br from-cyan-900 via-slate-900 to-cyan-700"
                          : "bg-linear-to-br from-emerald-800 via-slate-900 to-cyan-800"
                      }`}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                        Career Program
                      </p>
                      <h3 className="mt-2 text-base font-bold leading-tight sm:text-lg">
                        {card.title}
                      </h3>
                    </div>

                    <div className="p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        {card.courseName}
                      </p>

                      <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                        <p>Duration: {card.duration}</p>
                        <p>{card.enrolled} enrolled</p>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-cyan-100 bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Link
                          href="#"
                          className="rounded-lg border border-cyan-500 px-3 py-1.5 text-center text-xs font-semibold text-cyan-700 transition hover:bg-cyan-50"
                        >
                          Know More
                        </Link>
                        <Link
                          href="#"
                          className="rounded-lg bg-linear-to-r from-cyan-600 to-emerald-600 px-3 py-1.5 text-center text-xs font-semibold text-white transition hover:brightness-95"
                        >
                          Schedules
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                {filteredCourseCards.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600 sm:col-span-2">
                    No courses found for this category yet. Please choose
                    another category.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full   px-4 pb-24 md:px-6 md:pb-28">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(145deg,#f8fafc_0%,#eef2ff_42%,#ecfeff_100%)] p-5 shadow-[0_35px_100px_-55px_rgba(15,23,42,0.55)] md:p-8">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" />

            <div className="relative flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-end md:justify-between md:pb-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Core Team
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Employee Profiles & Roles
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Meet specialists who drive recruitment, mentoring, and
                  placement outcomes for students and companies.
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold text-cyan-800 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for consultation
              </div>
            </div>

            <div className="relative mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {employeeProfiles.map((profile, index) => (
                <article
                  key={profile.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${profile.accent} text-sm font-extrabold text-white shadow-lg`}
                      >
                        {profile.initials}
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900">
                          {profile.name}
                        </h3>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                          Team Member #{index + 1}
                        </p>
                      </div>
                    </div>
                    {/* <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-700">
                      {profile.experience}
                    </span> */}
                  </div>

                  <p className="mt-4 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-cyan-100">
                    {profile.role}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    <p className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
                      Focus Area:{" "}
                      <span className="font-bold">{profile.focusArea}</span>
                    </p>
                    <p className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
                      Location:{" "}
                      <span className="font-bold">{profile.location}</span>
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                    <span className="text-[11px] font-semibold text-cyan-700">
                      Verified Expert
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full px-4 pb-24 md:px-6 md:pb-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] md:p-8">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                Company Gallery
              </p>
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Life At Job Way Tech
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
                A quick look at our workplace culture, training ecosystem, and
                hiring collaboration moments.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
              <article className="relative">
                <div
                  className="h-90 bg-cover bg-center md:h-107.5"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.86), rgba(2,6,23,0.25)), url(${activeGalleryItem.image})`,
                  }}
                />

                <div className="absolute inset-0 flex items-end p-5 md:p-8">
                  <div className="max-w-3xl rounded-2xl border border-white/25 bg-slate-950/45 p-4 text-white backdrop-blur-sm md:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                      {activeGalleryItem.caption}
                    </p>
                    <h3 className="mt-2 text-xl font-black sm:text-2xl">
                      {activeGalleryItem.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-100">
                      "{activeGalleryItem.comment}"
                    </p>
                  </div>
                </div>

                <div className="absolute right-4 top-4 flex gap-2 md:right-6 md:top-6">
                  <button
                    type="button"
                    aria-label="Previous gallery image"
                    onClick={showPreviousGallerySlide}
                    className="rounded-full border border-white/40 bg-slate-950/45 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    aria-label="Next gallery image"
                    onClick={showNextGallerySlide}
                    className="rounded-full border border-white/40 bg-slate-950/45 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70"
                  >
                    Next
                  </button>
                </div>
              </article>

              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4">
                <div className="flex items-center gap-2">
                  {companyGallery.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === currentGalleryIndex
                          ? "scale-110 bg-cyan-600"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold text-slate-600">
                  Slide {currentGalleryIndex + 1} of {companyGallery.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full px-4 pb-24 md:px-6 md:pb-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#f8fafc_40%,#eef2ff_100%)] p-5 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.55)] md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Services We Provide
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Placement Solutions Across Every Work Style
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  We connect candidates to the right opportunities across IT,
                  Non-IT, remote, office, and hybrid environments with guided
                  screening and placement support.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceModes.map((service) => (
                    <article
                      key={service.title}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm"
                    >
                      <div
                        className={`h-1.5 w-16 rounded-full bg-linear-to-r ${service.tone}`}
                      />
                      <h3 className="mt-2 text-sm font-extrabold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600">
                        {service.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_70px_-45px_rgba(6,182,212,0.65)] md:p-6">
                <svg
                  viewBox="0 0 540 360"
                  role="img"
                  aria-label="Placement services illustration"
                  className="h-auto w-full"
                >
                  <defs>
                    <linearGradient id="svcA" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id="svcB" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="20"
                    y="28"
                    width="500"
                    height="304"
                    rx="28"
                    fill="#f8fafc"
                  />
                  <circle cx="90" cy="92" r="24" fill="url(#svcA)" />
                  <circle cx="450" cy="90" r="24" fill="url(#svcB)" />

                  <rect
                    x="75"
                    y="122"
                    width="390"
                    height="150"
                    rx="20"
                    fill="#0f172a"
                  />
                  <rect
                    x="98"
                    y="146"
                    width="84"
                    height="46"
                    rx="10"
                    fill="#164e63"
                  />
                  <rect
                    x="193"
                    y="146"
                    width="84"
                    height="46"
                    rx="10"
                    fill="#1e3a8a"
                  />
                  <rect
                    x="288"
                    y="146"
                    width="84"
                    height="46"
                    rx="10"
                    fill="#115e59"
                  />
                  <rect
                    x="383"
                    y="146"
                    width="58"
                    height="46"
                    rx="10"
                    fill="#7c3aed"
                  />

                  <rect
                    x="98"
                    y="203"
                    width="160"
                    height="20"
                    rx="8"
                    fill="#22d3ee"
                    opacity="0.85"
                  />
                  <rect
                    x="266"
                    y="203"
                    width="175"
                    height="20"
                    rx="8"
                    fill="#34d399"
                    opacity="0.85"
                  />

                  <path d="M270 272 L230 316 H310 Z" fill="#1e293b" />
                  <rect
                    x="170"
                    y="316"
                    width="200"
                    height="12"
                    rx="6"
                    fill="#334155"
                  />

                  <g
                    fill="#0f172a"
                    fontSize="12"
                    fontFamily="Arial, sans-serif"
                    fontWeight="700"
                  >
                    <text x="79" y="62">
                      IT
                    </text>
                    <text x="431" y="62">
                      Non-IT
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full px-4 pb-24 md:px-6 md:pb-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-r from-slate-900 via-cyan-900 to-emerald-800 p-6 text-white shadow-[0_30px_90px_-50px_rgba(15,23,42,0.7)] md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Need Assistance?
                </p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Let Us Help You With Placements
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-cyan-100 sm:text-base">
                  Connect with our consultancy team for candidate support,
                  employer hiring requirements, or training guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-cyan-800 transition hover:bg-cyan-50"
                >
                  Go to Contact Us
                </Link>
                <a
                  href="tel:+919986194191"
                  className="rounded-xl border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}
