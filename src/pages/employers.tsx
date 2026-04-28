import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const hiringModels = [
  {
    title: "Bulk Hiring",
    description:
      "Rapid hiring for high-volume roles with shortlist guarantees and weekly fulfillment dashboards.",
    icon: Users,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Niche Tech Hiring",
    description:
      "Specialized sourcing for VLSI, verification, embedded, cloud, and full-stack positions.",
    icon: Layers3,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Contract To Hire",
    description:
      "Reduce hiring risk with performance-first engagement before permanent onboarding.",
    icon: Handshake,
    accent: "from-orange-500 to-rose-500",
  },
  {
    title: "Campus To Corporate",
    description:
      "Ready talent pipelines with pre-assessed candidates trained for immediate project contribution.",
    icon: BriefcaseBusiness,
    accent: "from-indigo-500 to-sky-600",
  },
];

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We map role expectations, hiring velocity, tech stack, compensation, and culture fit indicators.",
  },
  {
    title: "Talent Mapping",
    description:
      "Our team builds role-specific funnels and starts targeted outreach using verified candidate pools.",
  },
  {
    title: "Screening & Assessment",
    description:
      "Shortlisted profiles pass communication, technical, and intent checks before interview submission.",
  },
  {
    title: "Interview Coordination",
    description:
      "End-to-end scheduling, follow-ups, and feedback cycles to keep your panel and candidates aligned.",
  },
  {
    title: "Offer Closure",
    description:
      "Negotiation support, notice-period tracking, and onboarding handoff for smooth joining outcomes.",
  },
];

const talentPool = [
  {
    role: "Frontend Engineer",
    experience: "2-5 years",
    skills: "React, TypeScript, Next.js",
    availability: "Immediate - 15 days",
  },
  {
    role: "QA Automation Engineer",
    experience: "3-7 years",
    skills: "Playwright, API Testing, CI/CD",
    availability: "15 - 30 days",
  },
  {
    role: "DevOps Engineer",
    experience: "2-6 years",
    skills: "Azure, Docker, Terraform",
    availability: "Immediate - 30 days",
  },
  {
    role: "HR Operations Executive",
    experience: "1-4 years",
    skills: "Recruitment Ops, ATS, Coordination",
    availability: "Immediate",
  },
  {
    role: "Inside Sales Associate",
    experience: "1-3 years",
    skills: "Lead Qualification, CRM, B2B Sales",
    availability: "7 - 20 days",
  },
  {
    role: "Accounts Assistant",
    experience: "1-4 years",
    skills: "Tally, Reconciliation, MIS",
    availability: "Immediate - 15 days",
  },
];

const trustPoints = [
  "Verified candidate profiles with structured screening notes",
  "Single point of contact for faster communication",
  "Transparent hiring pipeline with weekly progress reports",
  "Replacement support for selected engagement plans",
];

export default function EmployersPage() {
  return (
    <>
      <Head>
        <title>Employers | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Hire faster with Job Way Tech Consultancy. Explore flexible hiring models, pre-screened talent pools, and end-to-end recruitment support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-16 top-32 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-160 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.15),transparent_65%)]" />
        </div>

        <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-16 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:pb-20 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              <Sparkles size={14} />
              Employer Solutions
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build High-Performing Teams Without Hiring Delays
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We help startups and enterprises hire quality talent across IT and
              Non-IT roles with speed, structure, and predictable closure.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
              >
                Request Hiring Support
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/open-jobs"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                View Open Roles
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">700+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Active Candidates
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">120+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Hiring Partners
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">48h</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  First Shortlist
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">92%</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Offer Success
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.7)] sm:p-6">
            <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                <Clock3 size={14} />
                Weekly Hiring Snapshot
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Profiles Shared</p>
                  <p className="mt-1 text-2xl font-black">146</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Interviews Done</p>
                  <p className="mt-1 text-2xl font-black">83</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Offers Released</p>
                  <p className="mt-1 text-2xl font-black">29</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Joinees Closed</p>
                  <p className="mt-1 text-2xl font-black">21</p>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100">
                <TrendingUp size={16} />
                Strong closure momentum across IT and Non-IT mandates.
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                Flexible Engagement
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                Hiring Models For Every Growth Stage
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-800">
              <ShieldCheck size={16} />
              SLA-backed delivery
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hiringModels.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-md ${model.accent}`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {model.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan-700">
                    Learn more
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative bg-slate-900 py-14 text-slate-100">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute left-10 top-14 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Structured Workflow
                </p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Our Employer Hiring Process
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                <CheckCircle2 size={16} />
                End-to-end coordination
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-black text-cyan-200">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                Ready Talent Pool
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                Sample Roles You Can Hire This Week
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <Building2 size={16} />
              Freshly screened profiles
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {talentPool.map((candidate) => (
              <article
                key={candidate.role}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-slate-900">
                  {candidate.role}
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-800">
                      Experience:
                    </span>{" "}
                    {candidate.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Skills:
                    </span>{" "}
                    {candidate.skills}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">
                      Availability:
                    </span>{" "}
                    {candidate.availability}
                  </p>
                </div>
                <button className="mt-4 inline-flex items-center gap-1 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-700 transition hover:bg-cyan-100">
                  Request Profile
                  <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto mb-14 w-full max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.7)] md:grid-cols-[1.1fr_1fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                Why Employers Choose Us
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Reliable Hiring, Better Retention, Less Follow-up
              </h2>
              <ul className="mt-5 space-y-3">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-linear-to-br from-cyan-500 via-sky-500 to-emerald-500 p-6 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                <Star size={14} />
                Priority Support
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Need urgent hiring this month?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cyan-50">
                Talk to our team and receive your first curated shortlist within
                48 hours for active mandates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Book a Hiring Call
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Employer Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
