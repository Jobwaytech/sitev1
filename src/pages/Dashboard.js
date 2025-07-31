import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Dashboard.css';

export default function Dashboard() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const [applications, setApplications] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    if (role === "admin") {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/applications`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const sorted = res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setApplications(sorted);
        })
        .catch((err) => console.error(err));
    }
  }, [role, token]);

  if (role !== "admin") {
    return (
      <div className="container">
        <h2 className="heading">Access Denied</h2>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

    await axios.post(`${process.env.REACT_APP_API_URL}/api/jobs`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Job posted!");
    setForm({ title: "", description: "", location: "", salary: "" });
  };

  // Format date as Today, Yesterday, or full date
  const formatGroupDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const d1 = date.toDateString();
    const d2 = today.toDateString();
    const d3 = yesterday.toDateString();

    if (d1 === d2) return "Today";
    if (d1 === d3) return "Yesterday";

    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Group applications by formatted date
  const groupedApps = applications.reduce((acc, app) => {
    const dateKey = formatGroupDate(app.createdAt);
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(app);
    return acc;
  }, {});

  return (
    <div className="container">
      <h2 className="heading">Admin Dashboard</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
        <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="salary" placeholder="Salary (e.g. 4-6 LPA)" value={form.salary} onChange={handleChange} />
        <input name="experience" placeholder="Experience (e.g. 2+ years)" value={form.experience} onChange={handleChange} />
        <input name="employmentType" placeholder="Employment Type (e.g. Full-time)" value={form.employmentType} onChange={handleChange} />
  
        <input name="department" placeholder="Department (e.g. Engineering)" value={form.department} onChange={handleChange} />
        <input name="education" placeholder="Education Requirement" value={form.education} onChange={handleChange} />
  
        <input name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} />
        <input name="openings" type="number" placeholder="Number of Openings" value={form.openings} onChange={handleChange} />

        <button type="submit">Post Job</button>
      </form>

      <h3 style={{ marginTop: "2rem" }}>📋 Applications</h3>
      {applications.length === 0 && <p>No one applied yet.</p>}

      {Object.entries(groupedApps).map(([date, apps]) => (
        <div key={date}>
          <h4 style={{ marginTop: "2rem", color: "#374151" }}>📅 {date}</h4>
          <div className="table-responsive">
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Job Title</th>
                  <th>Resume</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <tr key={app._id}>
                    <td>{app.name}</td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>
                    <td>{app.jobId?.title || "N/A"}</td>
                    <td>
                      {app.resumeUrl ? (
                        <a
                          href={`${process.env.REACT_APP_API_URL}/${app.resumeUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      ) : (
                        "No Resume"
                      )}
                    </td>
                    <td data-label="Time">
                      {app.createdAt && !isNaN(Date.parse(app.createdAt))
                      ? new Date(app.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short"
                        })
                      : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
