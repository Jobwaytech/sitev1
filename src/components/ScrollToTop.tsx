import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {};

const ScrollToTop = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      const doc = document.documentElement;
      const calcHeight = doc.scrollHeight - doc.clientHeight;
      const progress =
        calcHeight > 0 ? Math.round((pos * 100) / calcHeight) : 0;

      setScrollValue(progress);
      setIsVisible(pos > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressStyle = useMemo(
    () => ({
      background: `conic-gradient(#06b6d4 ${scrollValue}%, rgba(148,163,184,0.25) ${scrollValue}%)`,
    }),
    [scrollValue],
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-5 right-4 z-70 flex items-center gap-2 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Link
        href="/auth"
        className="hidden rounded-full border border-cyan-200 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg shadow-cyan-100 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-700 sm:inline-flex"
      >
        JobwayTech Help
      </Link>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 p-1.5 pr-3 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.5)] backdrop-blur"
      >
        <span
          className="grid h-10 w-10 place-items-center rounded-full"
          style={progressStyle}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-cyan-200 transition group-hover:bg-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </span>
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
            Back to top
          </span>
          <span className="block text-xs font-bold text-slate-800">
            {scrollValue}%
          </span>
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
