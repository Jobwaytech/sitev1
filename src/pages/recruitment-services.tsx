import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileSearch,
  Handshake,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const coreServices = [
  {
    title: "Permanent Hiring",
    description:
      "Build long-term teams with pre-screened candidates matched for technical and culture fit.",
    icon: BriefcaseBusiness,
    tone: "from-cyan-500 to-blue-600",
  },
  {
    title: "Contract Staffing",
    description:
      "Scale quickly with project-based professionals for short and mid-term requirements.",
    icon: Users,
    tone: "from-emerald-500 to-teal-600",
  },
  {
    title: "Executive Search",
    description:
      "Targeted leadership hiring for strategic and high-impact management positions.",
    icon: Rocket,
    tone: "from-orange-500 to-rose-500",
  },
  {
    title: "Bulk Hiring",
    description:
      "Efficient high-volume recruitment with SLA-based delivery and structured progress updates.",
    icon: Building2,
    tone: "from-indigo-500 to-sky-600",
  },
];

const processFlow = [
  {
    title: "Requirement Discovery",
    description:
      "We understand role expectations, must-have skills, timelines, and hiring challenges.",
  },
  {
    title: "Talent Sourcing",
    description:
      "Role-focused sourcing through active databases, networks, and direct outreach.",
  },
  {
    title: "Evaluation & Shortlisting",
    description:
      "Communication, intent, and technical relevance checks before profile submission.",
  },
  {
    title: "Interview Management",
    description:
      "Panel coordination, candidate follow-up, and fast feedback tracking end-to-end.",
  },
  {
    title: "Offer & Onboarding",
    description:
      "Negotiation support, joining updates, and onboarding handover for smooth closure.",
  },
];

const hiringTracks = [
  {
    title: "IT Hiring",
    description:
      "We recruit for software, QA, DevOps, cloud, data, and product engineering teams.",
    roles: [
      "Frontend / Backend Developers",
      "QA Manual & Automation",
      "DevOps / Cloud Engineers",
      "Data Analysts & Support",
    ],
    modes: ["WFH", "WFO", "Hybrid"],
    tone: "from-cyan-500 to-blue-600",
  },
  {
    title: "Non-IT Hiring",
    description:
      "We source talent for operations, HR, finance, sales, customer support, and admin roles.",
    roles: [
      "HR & Recruitment Executives",
      "Accounts & Finance Assistants",
      "Customer Support Associates",
      "Sales / Operations Coordinators",
    ],
    modes: ["WFH", "WFO", "Hybrid"],
    tone: "from-emerald-500 to-teal-600",
  },
];

export default function RecruitmentServicesPage() {
  return (
    <>
      <Head>
        <title>Recruitment Services | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Recruitment services for IT and Non-IT hiring with fast shortlists, screened candidates, and end-to-end hiring support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-160 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.16),transparent_65%)]" />
        </div>

        <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-16 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:pb-18 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              <Sparkles size={14} />
              Recruitment Services
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Smarter Hiring For Growing Teams
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From single critical roles to high-volume drives, we deliver
              quality talent with speed, consistency, and measurable outcomes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
              >
                Start Hiring Today
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/employers"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                Employer Solutions
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">5000+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Candidates Network
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">200+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Clients Served
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">72h</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  First Shortlist
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-2xl font-black text-slate-900">95%</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.7)] sm:p-6">
            <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                <Clock3 size={14} />
                Hiring Performance Snapshot
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Open Mandates</p>
                  <p className="mt-1 text-2xl font-black">38</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Profiles Shared</p>
                  <p className="mt-1 text-2xl font-black">412</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Interviews Scheduled</p>
                  <p className="mt-1 text-2xl font-black">196</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-100">Offers Closed</p>
                  <p className="mt-1 text-2xl font-black">74</p>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100">
                <ShieldCheck size={16} />
                Structured sourcing + screening = better hiring velocity.
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                Service Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
                Recruitment Models Built For Your Business
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-800">
              <FileSearch size={16} />
              Role-specific sourcing strategy
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-md ${service.tone}`}
                  >
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-4 text-xl font-extrabold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative bg-slate-900 py-14 text-slate-100">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute left-12 top-10 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-12 bottom-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Process
                </p>
                <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  How We Deliver Better Hiring Outcomes
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                <CheckCircle2 size={16} />
                End-to-end ownership
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {processFlow.map((step, index) => (
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
          <div className="grid gap-6 md:grid-cols-2">
            {hiringTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span
                  className={`inline-flex items-center rounded-full bg-linear-to-r px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white ${track.tone}`}
                >
                  {track.title}
                </span>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  We Are Hiring In {track.title} Roles
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {track.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {track.modes.map((mode) => (
                    <span
                      key={`${track.title}-${mode}`}
                      className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan-700"
                    >
                      {mode}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {track.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto mb-14 w-full max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.7)] md:grid-cols-[1.1fr_1fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                Let Us Recruit For You
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Share Your Hiring Needs, We Will Start Immediately
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Whether you are hiring one role or building an entire team, we
                deliver structured recruitment support with clear milestones.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                <Handshake size={16} />
                Dedicated SPOC for every employer account
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-br from-cyan-500 via-sky-500 to-emerald-500 p-6 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                <Sparkles size={14} />
                Priority Queue
              </p>
              <h3 className="mt-4 text-2xl font-black">
                Need fast hiring this week?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cyan-50">
                Talk to our recruitment team and get curated candidates aligned
                to your role within the next 72 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Book Consultation
                  <ArrowRight size={16} />
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
