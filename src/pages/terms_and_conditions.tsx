import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import Head from "next/head";
import Link from "next/link";

type Section = {
  title: string;
  description: string;
  points: string[];
};

const sections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By accessing or using the Job Way Tech Consultancy website and services, you agree to these Terms and Conditions and to any additional policies referenced on this page.",
    points: [
      "If you do not agree with these terms, do not use the website or submit your personal information.",
      "We may update these terms from time to time, and continued use of the site means you accept the updated version.",
    ],
  },
  {
    title: "2. Services Covered",
    description:
      "This website may be used to browse training programs, request consultancy support, submit applications, and communicate with our team regarding hiring and career services.",
    points: [
      "Service availability may vary by location, program, or hiring partner requirements.",
      "We may change, suspend, or discontinue any part of the website or services without prior notice.",
    ],
  },
  {
    title: "3. User Responsibilities",
    description:
      "You are responsible for providing accurate, current, and complete information when using the website or submitting forms.",
    points: [
      "Do not use the website for fraudulent, misleading, harmful, or unlawful purposes.",
      "Do not attempt to interfere with the security, availability, or performance of the site.",
      "If you create an account or share credentials, you are responsible for keeping them confidential.",
    ],
  },
  {
    title: "4. Training, Placement, and Consultancy",
    description:
      "Job Way Tech Consultancy provides training and placement support, but no outcome is guaranteed unless specifically stated in a written agreement.",
    points: [
      "Placement timelines, interview opportunities, and hiring decisions are determined by employers and external partners.",
      "Any salary estimates, job descriptions, or career outcomes shown on the site are informational and may change without notice.",
    ],
  },
  {
    title: "5. Fees and Payments",
    description:
      "Where services require payment, the applicable fee, payment schedule, and refund terms will be shared before you enroll or confirm the service.",
    points: [
      "You agree to pay all charges related to the services you purchase or request.",
      "Refunds, if any, will follow the specific service agreement or policy disclosed at the time of payment.",
    ],
  },
  {
    title: "6. Intellectual Property",
    description:
      "All website content, including text, graphics, logos, layouts, and training materials, is owned by Job Way Tech Consultancy or its licensors unless stated otherwise.",
    points: [
      "You may not copy, reproduce, modify, distribute, or commercially exploit our content without prior written permission.",
      "You retain ownership of any information you submit, but you grant us permission to use it to provide the requested services.",
    ],
  },
  {
    title: "7. Third-Party Links",
    description:
      "The website may include links to third-party websites, tools, or services for convenience. We are not responsible for their content, policies, or practices.",
    points: [
      "Use third-party resources at your own discretion.",
      "Review the third party's own terms and privacy policy before sharing personal information.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    description:
      "To the fullest extent permitted by law, Job Way Tech Consultancy is not liable for indirect, incidental, special, or consequential damages arising from your use of the website or services.",
    points: [
      "We do not guarantee uninterrupted access, error-free content, or specific employment outcomes.",
      "Your sole remedy for dissatisfaction with the website is to stop using it.",
    ],
  },
  {
    title: "9. Termination",
    description:
      "We may suspend or terminate access to the website or services if we believe you have violated these terms or acted in a way that harms the platform, our users, or our business.",
    points: [
      "Any provisions that should reasonably survive termination, including ownership and liability limitations, will continue to apply.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    description:
      "We may revise these Terms and Conditions at any time. The updated version will be posted on this page with a new effective date.",
    points: [
      "Please review this page periodically to stay informed about the current terms.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Terms and Conditions for Job Way Tech Consultancy, covering website use, services, payments, intellectual property, and liability limits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-2xl -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.12),transparent_60%)]" />
        </div>

        <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-16 pt-14 md:grid-cols-[1.3fr_0.7fr] md:gap-10 md:px-6 md:pb-20 md:pt-18 lg:pt-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Legal Information
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Terms and Conditions for Job Way Tech Consultancy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              These terms explain how you may use our website, what you can
              expect from our training and consultancy services, and the limits
              that apply to our responsibilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
              >
                Back to Home
              </Link>
              <a
                href="mailto:info@jobwaytech.com"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                Contact Support
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  Effective Date
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  09 April 2026
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  Governing Use
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Website, services, and submissions
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  Contact
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  info@jobwaytech.com
                </p>
              </div>
            </div>
          </div>

          <aside className="relative h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-35px_rgba(2,132,199,0.45)] sm:p-8">
            <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Quick Summary
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight">
                What this page covers
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200">
                <li>How the site and services may be used</li>
                <li>Rules for submissions, accounts, and conduct</li>
                <li>Payment, refund, and third-party service terms</li>
                <li>Ownership, liability, and termination conditions</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
          <div className="grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-black text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                  {section.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-200 bg-cyan-50 p-6 text-sm leading-7 text-cyan-950 shadow-sm sm:p-8">
            <h2 className="text-lg font-black text-cyan-950">
              Contact for Questions
            </h2>
            <p className="mt-3 max-w-4xl">
              If you have questions about these Terms and Conditions, please
              contact us at info@jobwaytech.com or call +91 99861 94191. We will
              review reasonable requests and clarify the applicable policy where
              needed.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-800">
              Note: this page is intended for general website use and should be
              reviewed by legal counsel before publication if your business
              needs specific compliance language.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
