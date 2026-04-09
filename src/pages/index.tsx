import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isGridFading, setIsGridFading] = useState(false);

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

        <section className="relative mx-auto w-full    pb-20   md:pb-24">
          <div className="  bg-white p-4   md:p-6">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Explore JobwayTech Trending Courses
            </h2>

            <div className="mt-5   gap-4 flex flex-col md:flex-row">
              <aside className="rounded-xl border md:w-60 h-fit border-slate-200 bg-slate-50 p-3">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Pick By Category
                </p>
                <div className="space-y-1.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full rounded-md border px-2.5 py-1.5 text-left text-xs transition ${
                        selectedCategory === category
                          ? "border-cyan-300 bg-cyan-100 text-cyan-700"
                          : "border-slate-300 bg-white text-slate-700 hover:border-cyan-200 hover:text-cyan-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </aside>

              <div
                className={`grid flex-1 gap-6 transition-all duration-300 ease-in-out motion-reduce:transition-none md:grid-cols-2 ${
                  isGridFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {filteredCourseCards.slice(0, 4).map((card, index) => (
                  <article
                    key={card.title}
                    className="overflow-hidden h-fit    rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div
                      className={`h-28 p-4 text-white ${
                        index % 2 === 0
                          ? "bg-linear-to-br from-slate-900 via-cyan-900 to-slate-800"
                          : "bg-linear-to-br from-slate-800 via-slate-700 to-cyan-800"
                      }`}
                    >
                      <h3 className="text-2 font-bold leading-tight sm:text-lg">
                        {card.title}
                      </h3>
                    </div>

                    <div className="p-3.5">
                      <p className="text-sm font-semibold text-slate-900">
                        {card.courseName}
                      </p>

                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-600">
                        <p>Duration : {card.duration}</p>
                        <p>{card.enrolled} Enrolled</p>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <Link
                          href="#"
                          className="rounded-lg border border-blue-500 px-3 py-1.5 text-center text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                        >
                          Know More
                        </Link>
                        <Link
                          href="#"
                          className="rounded-lg bg-blue-500 px-3 py-1.5 text-center text-xs font-semibold text-white transition hover:bg-blue-600"
                        >
                          Schedules
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                {filteredCourseCards.length === 0 && (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 md:col-span-2">
                    No courses found for this category yet. Please choose
                    another category.
                  </div>
                )}
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
