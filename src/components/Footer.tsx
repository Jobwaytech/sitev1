import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              JobwayTech Consultancy & Training
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Ready to hire faster or get placed smarter?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Connect with our team for recruitment services, candidate
              upskilling, and placement support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/auth"
              className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-lg font-extrabold tracking-wide text-white">
              JOBWAYTECH
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Consultancy and training partner focused on quality hiring,
              practical skills, and long-term career growth.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Recruitment Support</li>
              <li>Corporate Hiring</li>
              <li>Interview Preparation</li>
              <li>Placement Assistance</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-300 transition hover:text-cyan-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 transition hover:text-cyan-200"
                >
                  Open Roles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 transition hover:text-cyan-200"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 transition hover:text-cyan-200"
                >
                  Contact Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>+91 99861 94191</li>
              <li>info@jobwaytech.com</li>
              <li>Bangalore, India</li>
              <li>Mon - Sat, 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} JobwayTech Consultancy & Training.</p>
          <div className="flex gap-4">
            <Link
              href="/refund_polocy"
              className="transition hover:text-cyan-200"
            >
              Refund Policy
            </Link>
            <Link
              href="/terms_and_conditions"
              className="transition hover:text-cyan-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
