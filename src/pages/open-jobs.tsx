import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  Filter,
  GraduationCap,
  Heart,
  MapPin,
  RefreshCcw,
  Search,
  Sparkles,
  TimerReset,
  Wallet,
  X,
} from "lucide-react";

type JobCategory = "IT" | "Non-IT";
type WorkMode = "WFH" | "WFO" | "Hybrid";

type QualificationLevel = {
  label: string;
  rank: number;
};

type JobDetail = {
  aboutRole: string;
  responsibilities: string[];
};

type Job = {
  id: number;
  title: string;
  company: string;
  category: JobCategory;
  mode: WorkMode;
  location: string;
  qualification: string;
  qualificationRank: number;
  experience: string;
  package: string;
  openings: string;
  summary: string;
  skills: string[];
  highlight: string;
};

const qualificationOptions: QualificationLevel[] = [
  { label: "10th / SSLC", rank: 1 },
  { label: "12th / PUC", rank: 2 },
  { label: "Diploma", rank: 3 },
  { label: "Any Degree", rank: 4 },
  { label: "B.E / B.Tech", rank: 5 },
  { label: "MBA / MCA", rank: 6 },
  { label: "Post Graduation", rank: 7 },
];

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior QA Analyst",
    company: "NovaSoft Solutions",
    category: "IT",
    mode: "Hybrid",
    location: "Bengaluru",
    qualification: "Any Degree",
    qualificationRank: 4,
    experience: "0-2 years",
    package: "3.2 LPA",
    openings: "12 openings",
    summary:
      "Manual and automation support role for candidates who want to build a strong testing career.",
    skills: ["Manual Testing", "SQL", "SDLC"],
    highlight: "Freshers-friendly",
  },
  {
    id: 2,
    title: "Customer Support Executive",
    company: "Helix Care Services",
    category: "Non-IT",
    mode: "WFH",
    location: "Remote - India",
    qualification: "12th / PUC",
    qualificationRank: 2,
    experience: "0-3 years",
    package: "2.6 LPA",
    openings: "25 openings",
    summary:
      "Remote support opportunity for candidates with strong communication and problem-solving skills.",
    skills: ["Voice Support", "CRM", "Communication"],
    highlight: "Work from home",
  },
  {
    id: 3,
    title: "HR Coordinator",
    company: "GreenArc HR Partners",
    category: "Non-IT",
    mode: "WFO",
    location: "Chennai",
    qualification: "Any Degree",
    qualificationRank: 4,
    experience: "1-4 years",
    package: "3.8 LPA",
    openings: "8 openings",
    summary:
      "Office-based hiring coordination role with interview scheduling and onboarding tracking.",
    skills: ["Recruitment", "Excel", "Candidate Coordination"],
    highlight: "Immediate joining",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "CortexLab Digital",
    category: "IT",
    mode: "WFH",
    location: "Pune",
    qualification: "B.E / B.Tech",
    qualificationRank: 5,
    experience: "2-5 years",
    package: "7.5 LPA",
    openings: "4 openings",
    summary:
      "Build polished product interfaces and collaborate with product teams on customer-facing experiences.",
    skills: ["React", "TypeScript", "UI Design"],
    highlight: "Remote first",
  },
  {
    id: 5,
    title: "Accounts Assistant",
    company: "Pinnacle Finance Desk",
    category: "Non-IT",
    mode: "Hybrid",
    location: "Hyderabad",
    qualification: "B.Com",
    qualificationRank: 4,
    experience: "1-3 years",
    package: "3.4 LPA",
    openings: "6 openings",
    summary:
      "Hybrid accounting support role covering invoice processing, reconciliations, and reporting.",
    skills: ["Tally", "Excel", "Bookkeeping"],
    highlight: "Hybrid schedule",
  },
  {
    id: 6,
    title: "DevOps Trainee",
    company: "CloudForge Tech",
    category: "IT",
    mode: "WFO",
    location: "Bengaluru",
    qualification: "B.E / B.Tech",
    qualificationRank: 5,
    experience: "0-2 years",
    package: "4.2 LPA",
    openings: "10 openings",
    summary:
      "On-site infrastructure and deployment support role for candidates starting with cloud tools.",
    skills: ["Linux", "CI/CD", "Cloud Basics"],
    highlight: "Training provided",
  },
  {
    id: 7,
    title: "Data Entry Officer",
    company: "Metro Operations Hub",
    category: "Non-IT",
    mode: "WFO",
    location: "Mysuru",
    qualification: "12th / PUC",
    qualificationRank: 2,
    experience: "0-2 years",
    package: "2.2 LPA",
    openings: "18 openings",
    summary:
      "Structured office role focused on record management, input accuracy, and daily operations.",
    skills: ["Typing", "MS Office", "Accuracy"],
    highlight: "Quick hiring",
  },
  {
    id: 8,
    title: "QA Automation Engineer",
    company: "VeriStack Labs",
    category: "IT",
    mode: "Hybrid",
    location: "Hyderabad",
    qualification: "MBA / MCA",
    qualificationRank: 6,
    experience: "3-6 years",
    package: "8.4 LPA",
    openings: "3 openings",
    summary:
      "Automation-heavy role for candidates building scalable test frameworks and quality pipelines.",
    skills: ["Playwright", "API Testing", "Automation"],
    highlight: "High-impact role",
  },
];

const workModes: Array<"All" | WorkMode> = ["All", "WFH", "WFO", "Hybrid"];
const categories: Array<"All" | JobCategory> = ["All", "IT", "Non-IT"];

const locationOptions = ["All", ...new Set(jobs.map((job) => job.location))];

const jobDetails: Record<number, JobDetail> = {
  1: {
    aboutRole:
      "Entry-level QA role focused on understanding functional flows and ensuring releases meet quality standards.",
    responsibilities: [
      "Design and execute manual test cases for web and mobile modules.",
      "Log defects with clear repro steps and track closure with the dev team.",
      "Support smoke, regression, and sanity testing during each sprint.",
      "Participate in QA review calls and contribute to test documentation.",
    ],
  },
  2: {
    aboutRole:
      "Customer support role handling inbound user concerns and delivering fast issue resolution from home.",
    responsibilities: [
      "Handle customer calls, chats, and emails as per process SLAs.",
      "Capture ticket details accurately in CRM tools.",
      "Escalate product or billing issues to the right support team.",
      "Maintain high CSAT through professional communication.",
    ],
  },
  3: {
    aboutRole:
      "Coordination role in HR operations supporting candidate lifecycle from sourcing to onboarding.",
    responsibilities: [
      "Schedule interviews and coordinate availability with panels and candidates.",
      "Maintain recruitment pipeline status and weekly hiring trackers.",
      "Collect and validate pre-joining and onboarding documents.",
      "Follow up with stakeholders for timely offer and onboarding closure.",
    ],
  },
  4: {
    aboutRole:
      "Product engineering role focused on building responsive, high-quality front-end experiences.",
    responsibilities: [
      "Develop reusable React components with TypeScript.",
      "Integrate APIs and manage UI states for smooth user journeys.",
      "Collaborate with designers to implement pixel-accurate interfaces.",
      "Improve performance, accessibility, and frontend code quality.",
    ],
  },
  5: {
    aboutRole:
      "Finance support role assisting core accounting operations and monthly reporting workflows.",
    responsibilities: [
      "Record day-to-day accounting entries and update ledgers.",
      "Support invoice preparation, payment follow-up, and reconciliation.",
      "Maintain expense and voucher documentation for audit readiness.",
      "Coordinate with internal teams on billing and payment status.",
    ],
  },
  6: {
    aboutRole:
      "Trainee role in infrastructure and DevOps fundamentals for cloud-first product delivery.",
    responsibilities: [
      "Assist in CI/CD pipeline setup and release monitoring.",
      "Support server health checks and log analysis tasks.",
      "Learn and execute container and cloud deployment basics.",
      "Document incident learnings and support root-cause reporting.",
    ],
  },
  7: {
    aboutRole:
      "Operations role focused on high-volume data handling with quality and accuracy targets.",
    responsibilities: [
      "Enter, validate, and update records as per daily process queues.",
      "Run quality checks to avoid duplicate or incomplete entries.",
      "Prepare daily status reports for team leads.",
      "Coordinate with operations staff for data correction tasks.",
    ],
  },
  8: {
    aboutRole:
      "Senior QA role driving test automation strategy and quality gates for release pipelines.",
    responsibilities: [
      "Build and maintain scalable automation suites using Playwright.",
      "Automate API and integration testing for critical workflows.",
      "Analyze test failures and partner with developers for fixes.",
      "Improve automation coverage and release confidence metrics.",
    ],
  },
};

export default function OpenJobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | JobCategory>(
    "All",
  );
  const [selectedMode, setSelectedMode] = useState<"All" | WorkMode>("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedQualification, setSelectedQualification] = useState("All");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const selectedJob =
    selectedJobId === null
      ? null
      : (jobs.find((job) => job.id === selectedJobId) ?? null);

  const selectedJobDetails = selectedJob
    ? jobDetails[selectedJob.id]
    : undefined;

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchQuery.trim().length === 0 ||
      [job.title, job.company, job.location, job.summary, job.skills.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesMode = selectedMode === "All" || job.mode === selectedMode;
    const matchesLocation =
      selectedLocation === "All" || job.location === selectedLocation;

    const selectedQualificationRank =
      selectedQualification === "All"
        ? 99
        : (qualificationOptions.find(
            (option) => option.label === selectedQualification,
          )?.rank ?? 99);
    const matchesQualification =
      job.qualificationRank <= selectedQualificationRank;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMode &&
      matchesLocation &&
      matchesQualification
    );
  });

  const activeFilterCount = [
    selectedCategory !== "All",
    selectedMode !== "All",
    selectedLocation !== "All",
    selectedQualification !== "All",
    searchQuery.trim().length > 0,
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedMode("All");
    setSelectedLocation("All");
    setSelectedQualification("All");
  };

  const toggleSavedJob = (jobId: number) => {
    setSavedJobs((currentSavedJobs) =>
      currentSavedJobs.includes(jobId)
        ? currentSavedJobs.filter((savedJobId) => savedJobId !== jobId)
        : [...currentSavedJobs, jobId],
    );
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedJobId(null);
      }
    };

    if (selectedJobId !== null) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedJobId]);

  return (
    <>
      <Head>
        <title>Open Jobs | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Browse IT and non-IT jobs with dropdown filters for work mode, location, and highest qualification."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-lg -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.12),transparent_60%)]" />
        </div>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                <Sparkles size={13} />
                Open Jobs Dashboard
              </span>
              <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find roles by mode, location, and qualification.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Explore IT and non-IT openings with quick dropdown filters for
                WFH, WFO, Hybrid, location, and highest qualification. The
                layout is designed to make browsing fast on desktop and mobile.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#jobs-list"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-600 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
                >
                  View Openings
                  <ChevronRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  <RefreshCcw size={16} />
                  Reset Filters
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {jobs.length}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                    Open jobs
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {jobs.filter((job) => job.mode === "WFH").length}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                    WFH roles
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {jobs.filter((job) => job.category === "IT").length}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                    IT roles
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-slate-900">
                    {jobs.filter((job) => job.category === "Non-IT").length}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
                    Non-IT roles
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f8fafc_45%,#ecfeff_100%)] p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)] sm:p-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      Hiring Pulse
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Fast filters for the right candidate fit
                    </h2>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {filteredJobs.length} live matches
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                      Popular filters
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      WFH, WFO, Hybrid, location, and qualification dropdowns.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
                      Best for
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Freshers, experienced professionals, and career switchers.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-cyan-100">
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1">
                      IT WFH
                    </span>
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1">
                      IT WFO
                    </span>
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1">
                      IT Hybrid
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1">
                      Non-IT WFH
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1">
                      Non-IT WFO
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1">
                      Non-IT Hybrid
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="jobs-list"
          className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
        >
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f8fafc_40%,#f0fdf4_100%)] p-4 shadow-[0_35px_100px_-55px_rgba(15,23,42,0.5)] sm:p-6 lg:p-7">
            <div className="mb-5 flex flex-col gap-3 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Open Roles
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  Browse jobs with sidebar dropdown filters
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  Use the sidebar to narrow roles by IT or Non-IT, work mode,
                  location, and your highest qualification.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-800">
                <BadgeCheck size={14} />
                {filteredJobs.length} jobs found
                {activeFilterCount > 0
                  ? ` with ${activeFilterCount} filters`
                  : ""}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
              <aside className="h-fit rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm lg:sticky lg:top-28">
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Filter panel
                    </p>
                    <h3 className="text-lg font-black text-slate-900">
                      Refine your search
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
                    Dropdown filters
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Search jobs
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search title, company, skills"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-4 pr-11 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                      />
                      <Search
                        size={18}
                        className="pointer-events-none absolute right-4 top-3.5 text-cyan-500"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Job category
                    </span>
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(event) =>
                          setSelectedCategory(
                            event.target.value as "All" | JobCategory,
                          )
                        }
                        className="w-full appearance-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-3.5 text-slate-400"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Work mode
                    </span>
                    <div className="relative">
                      <select
                        value={selectedMode}
                        onChange={(event) =>
                          setSelectedMode(
                            event.target.value as "All" | WorkMode,
                          )
                        }
                        className="w-full appearance-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                      >
                        {workModes.map((mode) => (
                          <option key={mode} value={mode}>
                            {mode}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-3.5 text-slate-400"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Location
                    </span>
                    <div className="relative">
                      <select
                        value={selectedLocation}
                        onChange={(event) =>
                          setSelectedLocation(event.target.value)
                        }
                        className="w-full appearance-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                      >
                        {locationOptions.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-3.5 text-slate-400"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Highest qualification
                    </span>
                    <div className="relative">
                      <select
                        value={selectedQualification}
                        onChange={(event) =>
                          setSelectedQualification(event.target.value)
                        }
                        className="w-full appearance-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
                      >
                        <option value="All">All</option>
                        {qualificationOptions.map((qualification) => (
                          <option
                            key={qualification.label}
                            value={qualification.label}
                          >
                            {qualification.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-3.5 text-slate-400"
                      />
                    </div>
                  </label>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    <Filter size={16} />
                    Clear filters
                  </button>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                    Filter note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cyan-900/90">
                    The qualification filter works as a ceiling, so lower
                    requirement jobs remain visible for the selected level.
                  </p>
                </div>
              </aside>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 rounded-3xl border border-slate-200 bg-white/90 p-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                    <BriefcaseBusiness size={14} />
                    {selectedCategory === "All"
                      ? "All roles"
                      : selectedCategory}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800">
                    <TimerReset size={14} />
                    {selectedMode === "All" ? "Any mode" : selectedMode}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                    <MapPin size={14} />
                    {selectedLocation}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    <GraduationCap size={14} />
                    {selectedQualification === "All"
                      ? "Any qualification"
                      : selectedQualification}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {filteredJobs.map((job, index) => {
                    const isSaved = savedJobs.includes(job.id);

                    return (
                      <article
                        key={job.id}
                        className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <div
                          className={`relative p-5 text-white ${
                            index % 2 === 0
                              ? "bg-linear-to-br from-cyan-900 via-slate-900 to-cyan-700"
                              : "bg-linear-to-br from-emerald-800 via-slate-900 to-cyan-800"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100/90">
                                {job.category} role
                              </p>
                              <h3 className="mt-2 text-xl font-bold leading-tight">
                                {job.title}
                              </h3>
                              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-cyan-100">
                                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1">
                                  <Building2 size={13} />
                                  {job.company}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1">
                                  <MapPin size={13} />
                                  {job.location}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleSavedJob(job.id)}
                              aria-label={
                                isSaved ? "Remove saved job" : "Save job"
                              }
                              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 transition ${
                                isSaved
                                  ? "bg-white text-rose-500"
                                  : "bg-white/10 text-white hover:bg-white/20"
                              }`}
                            >
                              <Heart
                                size={18}
                                fill={isSaved ? "currentColor" : "none"}
                              />
                            </button>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">
                              {job.mode}
                            </span>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">
                              {job.experience}
                            </span>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">
                              {job.openings}
                            </span>
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center justify-between gap-3">
                            <p className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                              <Wallet size={14} />
                              {job.package}
                            </p>
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                              {job.highlight}
                            </span>
                          </div>

                          <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            {job.summary}
                          </p>

                          <div className="mt-4 grid gap-2 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600 sm:grid-cols-2">
                            <p className="inline-flex items-center gap-2">
                              <BadgeCheck size={13} className="text-cyan-600" />
                              Qualification: {job.qualification}
                            </p>
                            <p className="inline-flex items-center gap-2">
                              <Filter size={13} className="text-cyan-600" />
                              Mode: {job.mode}
                            </p>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {job.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[11px] font-medium text-cyan-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <Link
                              href="/contact-us"
                              className="rounded-xl bg-linear-to-r from-cyan-600 to-emerald-600 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:brightness-95"
                            >
                              Apply Now
                            </Link>
                            <button
                              type="button"
                              onClick={() => setSelectedJobId(job.id)}
                              className="rounded-xl border border-slate-300 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}

                  {filteredJobs.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-600 md:col-span-2">
                      No jobs match the selected filters. Try changing the work
                      mode, location, or qualification dropdown.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
          <div className="rounded-4xl border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_35px_100px_-55px_rgba(15,23,42,0.8)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Candidate support
                </p>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Need help choosing the right opening?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Shortlist a role, check the qualification match, and reach out
                  to the team for guidance on placement and interview prep.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/contact-us"
                  className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Talk to Team
                </Link>
                <Link
                  href="/auth"
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {selectedJob && selectedJobDetails && (
          <div
            className="fixed inset-0 z-70 flex items-end justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setSelectedJobId(null)}
          >
            <div
              className="w-full max-w-3xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="job-details-title"
            >
              <div className="bg-linear-to-r from-cyan-900 via-slate-900 to-emerald-800 p-5 text-white sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                      {selectedJob.category} - {selectedJob.mode}
                    </p>
                    <h3
                      id="job-details-title"
                      className="mt-2 text-2xl font-black leading-tight"
                    >
                      {selectedJob.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-100">
                      {selectedJob.company} | {selectedJob.location}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedJobId(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Close details popup"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-6">
                <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-slate-900">
                      Package:
                    </span>{" "}
                    {selectedJob.package}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Experience:
                    </span>{" "}
                    {selectedJob.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Qualification:
                    </span>{" "}
                    {selectedJob.qualification}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Openings:
                    </span>{" "}
                    {selectedJob.openings}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 p-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Role Overview
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {selectedJobDetails.aboutRole}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 p-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Roles & Responsibilities
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {selectedJobDetails.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl bg-slate-50 px-3 py-2 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="rounded-xl bg-linear-to-r from-cyan-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
                  >
                    Apply for this Job
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedJobId(null)}
                    className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <ScrollToTop />
    </>
  );
}
