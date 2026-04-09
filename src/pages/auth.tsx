import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";

import { authService } from "@/services/authService";

type AuthMode = "login" | "register";

type Props = {};

const auth = (props: Props) => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedIn = authService.isAuthenticated();
    if (loggedIn == true || window.location.pathname == "/auth") {
      return;
    } else {
      window.history.replaceState(null, "", "/auth"); // Ensure URL is clean on auth page
    }
  }, []);

  const resetFeedback = () => {
    setError("");
    setMessage("");
  };

  const handleModeSwitch = (nextMode: AuthMode) => {
    setMode(nextMode);
    resetFeedback();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetFeedback();
    setIsLoading(true);

    try {
      if (mode === "register") {
        const response = await authService.register({
          username,
          email,
          password,
          user_type: userType,
        });
        if (!response.success) {
          setError(response.message);
        } else {
          setMessage(response.message);
          setMode("login");
        }
      } else {
        const response = await authService.login({
          email,
          password,
        });
        if (!response.success) {
          setError(response.message);
        } else {
          setMessage(response.message);
          setTimeout(() => {
            if (response.user?.user_type == "admin") {
              // Handle admin-specific logic
              window.location.href = "/admin-dashboard"; // Redirect to admin dashboard
            } else {
              // Handle candidate-specific logic
              window.location.href = "/candidate-dashboard"; // Redirect to candidate dashboard
            }
          }, 1000);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    // setIsLoggingOut(true);
    try {
      await authService.logoutWithDeviceTracking();
    } catch (error) {
      setError("Error during logout");
      alert(error);
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>JobwayTech Consultancy & Training | Auth Portal</title>
        <meta
          name="description"
          content="Access the JobwayTech Consultancy & Training portal for candidate and employer services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative min-h-screen  overflow-hidden bg-[#f7fbfd] p-4 sm:p-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-120 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.16),transparent_65%)]" />
        </div>

        <section className="relative  mx-auto grid  w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_90px_-35px_rgba(8,47,73,0.45)] md:grid-cols-[1.05fr_1fr]">
          <aside className="bg-linear-to-br from-slate-900 via-cyan-900 to-emerald-800 p-6 text-white sm:p-8 md:p-10">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              JobwayTech Consultancy & Training
            </p>

            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              One Portal for Careers and Hiring
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cyan-100 sm:text-base">
              Sign in to manage candidate profiles, track interviews, and access
              consultancy training workflows built for fast placements.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-cyan-100">
              <div className="rounded-xl bg-white/10 px-4 py-3">
                Candidate onboarding and profile matching
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                Employer hiring support and interview tracking
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3">
                Practical training and placement assistance
              </div>
            </div>
          </aside>

          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Account access
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {mode === "login"
                ? "Login to continue with JobwayTech services."
                : "Register to start with consultancy and training support."}
            </p>

            <div className="mt-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => handleModeSwitch("login")}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  mode === "login"
                    ? "bg-white text-cyan-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => handleModeSwitch("register")}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  mode === "register"
                    ? "bg-white text-cyan-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
              {mode === "register" && (
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              )}

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Work email"
                required
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
                minLength={6}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

              {mode === "register" && (
                <select
                  value={userType}
                  onChange={(event) => setUserType(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="user">Candidate</option>
                  <option value="admin">Employer</option>
                </select>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="mt-1 rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isLoading
                  ? "Please wait..."
                  : mode === "register"
                    ? "Create account"
                    : "Sign in"}
              </button>
            </form>

            {error && (
              <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            )}
            {message && (
              <p className="mt-3 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm text-cyan-700">
                {message}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default auth;
