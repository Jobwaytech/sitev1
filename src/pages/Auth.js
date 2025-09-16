import React, { useState } from "react";
import axios from "axios";
import "../index.css";


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", process.env.REACT_APP_API_URL);
    const API_URL = process.env.REACT_APP_API_URL;
    console.log("Full env:", process.env);
    console.log("API URL:", API_URL);
    try {
      if (isLogin) {
        const { data } = await axios.post(`${API_URL}/api/auth/login`, {
          email: form.email,
          password: form.password,
          role: form.role,
        });
        console.log("✅ Login Success Response:", data);

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("isMainAdmin", data.isMainAdmin || false);
       

        if (data.role === "admin" && data.isMainAdmin) {
          window.location.href = "/main-admin";
        } else if (data.role === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/dashboard";
        }

      } else {
        await axios.post(`${API_URL}/api/auth/register`, {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        alert("Signup successful! Please login now.");
        setIsLogin(true);
        setForm({ name: "", email: "", password: "", role: "user" });
      }
    } catch (err) {
      console.log("❌ Login Error:", err);
      const msg =
        err.response?.data?.message || err.message || "Something went wrong. Try again.";
      alert(msg);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          src="/JOBWAYTechMain.jpg"
          alt="JOBWAYTechMain Logo"
          className="auth-logo"
        />
        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="password-wrapper">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="show-password">
              <input
                type="checkbox"
                id="showPass"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPass"> Show Password</label>
            </div>
          </div>

          {isLogin && (
            <div className="role-select">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={form.role === "admin"}
                onChange={handleChange}
              />
              <label htmlFor="admin">Admin</label>

              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleChange}
              />
              <label htmlFor="user">Student</label>
            </div>
          )}

          <button type="submit" className="btn-auth">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Signup</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
