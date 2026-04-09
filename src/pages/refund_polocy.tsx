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
    title: "1. Refund Eligibility",
    description:
      "Refunds are considered only for services or programs where a refund policy has been explicitly shared at the time of enrollment, payment, or service confirmation.",
    points: [
      "Refund eligibility depends on the specific service agreement or payment terms provided to you.",
      "Some services, including completed consultations, already delivered training, or non-refundable processing charges, may not be eligible for a refund.",
    ],
  },
  {
    title: "2. Request Window",
    description:
      "If a service is eligible for refund, you must submit the request within the applicable time window mentioned in your service terms or invoice.",
    points: [
      "Late refund requests may be declined even if the service would otherwise qualify.",
      "We may ask for supporting details to verify the payment and the reason for the request.",
    ],
  },
  {
    title: "3. Non-Refundable Items",
    description:
      "Certain charges are generally not refundable unless the written service agreement says otherwise.",
    points: [
      "Registration fees, payment gateway charges, administrative fees, and already delivered services may be non-refundable.",
      "Refunds are not issued for change of mind after access has been granted to digital content, training materials, or completed support sessions.",
    ],
  },
  {
    title: "4. Processing of Approved Refunds",
    description:
      "When a refund is approved, we will process it using the original payment method whenever possible.",
    points: [
      "Refund timelines may vary based on your bank, card issuer, or payment provider.",
      "It may take several business days for the refund to appear in your account after processing.",
    ],
  },
  {
    title: "5. Service Cancellations",
    description:
      "If a class, consultation, or engagement is cancelled by Job Way Tech Consultancy, we may offer a refund, rescheduling, or credit depending on the circumstances.",
    points: [
      "If we cannot provide the service as agreed, we will communicate the available resolution options.",
      "Where a replacement service is offered and accepted, a separate refund may not apply.",
    ],
  },
  {
    title: "6. Disputed or Incorrect Payments",
    description:
      "If you believe you were charged in error, contact us promptly with payment details so we can review the transaction.",
    points: [
      "Duplicate, accidental, or unauthorized charges will be investigated before any decision is made.",
      "Do not reverse or dispute a payment with your bank before contacting us, unless you need to protect your account from fraud.",
    ],
  },
  {
    title: "7. How to Request a Refund",
    description:
      "To request a refund, contact our support team with your name, contact number, payment reference, and reason for the request.",
    points: [
      "Email: info@jobwaytech.com",
      "Phone: +91 99861 94191",
      "Include any invoice, receipt, or enrollment details that help us verify the request.",
    ],
  },
  {
    title: "8. Policy Updates",
    description:
      "We may update this Refund Policy from time to time to reflect changes in our services, payment process, or legal requirements.",
    points: [
      "The version posted on this page is the current policy unless a separate written agreement says otherwise.",
    ],
  },
];

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | Job Way Tech Consultancy</title>
        <meta
          name="description"
          content="Refund Policy for Job Way Tech Consultancy, including refund eligibility, request window, non-refundable charges, and processing timelines."
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
              Policy Information
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Refund Policy for Job Way Tech Consultancy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              This policy explains when refunds may be available, how to submit
              a request, and what timelines or exclusions may apply depending on
              the service you purchased.
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
                Request Support
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
                  Response Channel
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Email or phone support
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
                What this policy covers
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200">
                <li>Eligibility for refund requests</li>
                <li>Non-refundable charges and exclusions</li>
                <li>Processing timelines for approved refunds</li>
                <li>How to contact support for a review</li>
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
              Need Help With a Refund?
            </h2>
            <p className="mt-3 max-w-4xl">
              Please send your refund request to info@jobwaytech.com or call +91
              99861 94191 with your payment reference, service details, and
              reason for the request. We will review the matter against the
              applicable service terms.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-800">
              Refund decisions are based on the policy disclosed at purchase and
              any written agreement tied to the service.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
