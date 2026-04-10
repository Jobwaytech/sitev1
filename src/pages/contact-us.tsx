import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Contact Job Way Tech Consultancy for placement, training, and hiring support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 pb-20 pt-14 md:px-6 md:pt-18">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <section className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)]">
          <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
            <aside className="bg-linear-to-br from-slate-900 via-cyan-900 to-emerald-800 p-6 text-white sm:p-8">
              <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                Reach Our Team
              </p>
              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Contact Job Way Tech
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-cyan-100 sm:text-base">
                Talk to us for placement support, consultancy services, and
                hiring partnerships. Our team will connect with you quickly.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-cyan-100">
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  Candidate placement guidance
                </div>
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  Employer hiring support
                </div>
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  Training and upskilling counseling
                </div>
              </div>
            </aside>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Choose any option below and we will assist you.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href="tel:+919986194191"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Call: +91 99861 94191
                </a>
                <a
                  href="mailto:info@jobwaytech.com"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Email: info@jobwaytech.com
                </a>
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  Office Hours: Monday to Saturday, 9:30 AM to 6:30 PM
                </p>
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  Address: Bengaluru, Karnataka, India
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Back to Home
                </Link>
                <a
                  href="mailto:info@jobwaytech.com"
                  className="rounded-xl bg-linear-to-r from-cyan-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Send Email Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
