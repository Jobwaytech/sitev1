import { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const courses = [
    {
      name: "Recruitment Services",
    },
    {
      name: "Candidate Screening",
    },
    {
      name: "Corporate Hiring Support",
    },
  ];
  const resources = [
    {
      name: "Success Stories",
    },
    {
      name: "Interview Guides",
    },
    {
      name: "Hiring Insights",
    },
  ];
  const navLinks = [
    {
      name: "Candidates",
    },
    {
      name: "Employers",
    },
    {
      name: "Open Jobs",
    },
    {
      name: "Contact",
    },
  ];
  const loginLabel = "Login Employer / Candidate";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCoursesOpen(false);
    setResourcesOpen(false);
  };

  return (
    <header className="sticky  top-0 z-50 font-['Poppins','Segoe_UI',sans-serif]">
      <div className="bg-linear-to-r caret-transparent from-slate-950 via-slate-900 to-cyan-950 px-4 py-2.5 text-[11px] text-white md:text-xs lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-cyan-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm">
              <Phone size={14} />
              9986194191
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm sm:inline-flex">
              <Mail size={14} />
              info@jobwaytech.com
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 px-2.5 py-1 text-cyan-200">
              <Briefcase size={14} />
              Hiring Support
            </span>
          </div>

          <div className="hidden items-center gap-3 text-cyan-100 md:flex">
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} />
              Bangalore
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} />
              Hyderabad
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 text-cyan-200">
              <Sparkles size={13} />
              Trusted consultancy for talent and career growth
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.7)] backdrop-blur lg:px-6 lg:py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-linear-to-r from-cyan-50 to-emerald-50 px-3 py-2"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-200">
              <GraduationCap size={18} />
            </span>
            <span className="whitespace-nowrap text-base font-bold tracking-wide text-slate-800 lg:text-lg">
              JOB WAY TECH
            </span>
          </Link>

          <div className="hidden flex-1 items-center gap-5 lg:flex">
            <div className="relative group">
              <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute left-0 top-full z-20 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-cyan-700"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative max-w-sm flex-1">
              <input
                type="text"
                placeholder="Search jobs, services, resources..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-4 pr-10 text-sm text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100"
              />
              <Search
                size={18}
                className="absolute right-3 top-2.5 text-cyan-500"
              />
            </div>

            <div className="relative group">
              <button className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-slate-700 transition hover:text-cyan-700">
                Resources
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute left-0 top-full z-20 mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-cyan-700"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-cyan-700"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/auth"
              className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
            >
              {loginLabel}
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200">
              <Search size={20} />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-4 pr-10 text-sm text-slate-700 outline-none focus:border-cyan-400 focus:bg-white"
              />
              <Search
                size={18}
                className="absolute right-3 top-2.5 text-cyan-500"
              />
            </div>

            <div className="mb-2">
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {coursesOpen && (
                <div className="mt-2 space-y-1 px-1">
                  {courses.map((course) => (
                    <Link
                      key={`mobile-${course.name}`}
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-2">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800"
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div className="mt-2 space-y-1 px-1">
                  {resources.map((resource) => (
                    <Link
                      key={`mobile-${resource.name}`}
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map((item) => (
                <Link
                  key={`mobile-link-${item.name}`}
                  href="#"
                  onClick={closeMobileMenu}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-center text-sm font-medium text-slate-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="/auth"
              onClick={closeMobileMenu}
              className="mt-3 block rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {loginLabel}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
