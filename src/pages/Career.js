import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Career.css"; // make sure modal styles are here or in a separate css

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); 
  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/jobs`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("❌ Jobs Fetch Error:", err));
  }, []);

  const handleApplyClick = (jobId) => {
    if (!token) {
      alert("Please login first!");
      window.location.href = "/auth";
      return;
    }
    if (role !== "user") {
      alert("Only students can apply for jobs.");
      return;
    }
    setSelectedJobId(jobId);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleDelete = async (jobId) => {
  if (!window.confirm("Are you sure you want to delete this job?")) return;

  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setJobs(jobs.filter((job) => job._id !== jobId));
    alert("Job deleted.");
  } catch (err) {
    console.error("❌ Delete Error:", err);
    alert("Failed to delete job.");
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJobId) return;

    try {
      const data = new FormData();
      data.append("jobId", selectedJobId);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("resume", formData.resume);

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/apply`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message || "Application submitted!");
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", resume: null });
    } catch (err) {
      console.error("❌ Application Error:", err);
      alert(err.response?.data?.message || "Failed to submit application.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="heading">Careers – Apply for Jobs</h2>
      <div className="job-list">
        {jobs.length === 0 && <p>No jobs available right now.</p>}
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Experience:</strong> {job.experience || "Not specified"}</p>
            <p><strong>Employment Type:</strong> {job.employmentType || "N/A"}</p>
            <p><strong>Department:</strong> {job.department || "N/A"}</p>
            <p><strong>Education:</strong> {job.education || "N/A"}</p>
            <p><strong>Skills:</strong> {job.skills?.join(", ") || "Not specified"}</p>
            <p className="meta">
              <strong>Location:</strong> {job.location} |{" "}
              <strong>Salary:</strong> ₹{job.salary || "N/A"}{" "}
              <strong>Openings:</strong> {job.openings || 1}
            </p>
            <p><strong>Posted on:</strong>{" "}
            {job.postedAt && !isNaN(new Date(job.postedAt))
              ? new Date(job.postedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
                })
              : "Date not available"}
            </p>
            <button className="btn btn-primary" onClick={() => handleApplyClick(job._id)}>
              Apply Now
            </button>
            {role === "admin" && (
              <div style={{ marginTop: "10px" }}>
                <button
                  className="btn btn-outline"
                  onClick={() => setEditForm(job)}
                >
                  Edit
                </button> 
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(job._id)}
                  style={{ marginLeft: "8px" }}
                >
                  Delete
                </button>   
                </div>
            )}          
          </div>
        ))}
      </div>

      {showForm && (
        <div className="apply-modal-overlay">
          <div className="apply-modal-content">
            <h3>Apply for Job</h3>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                required
              />
              <div className="btn-group" >
                <button className="btn btn-primary" type="submit">
                  Submit Application
                </button>
                <button
                  className="btn btn-outline"
                  type="button"
                  style={{ marginLeft: "10px" }}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {editForm && (
  <div className="edit-modal-overlay">
    <div className="edit-modal-content">
      <h3>Edit Job</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const res = await axios.put(
              `${process.env.REACT_APP_API_URL}/api/jobs/${editForm._id}`,
              editForm,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            // Update the job list locally
            setJobs((prev) =>
              prev.map((job) => (job._id === editForm._id ? res.data : job))
            );
            alert("Job updated successfully!");
            setEditForm(null);
          } catch (err) {
            console.error("❌ Edit Error:", err);
            alert("Failed to update job.");
          }
        }}
      >
        <input
          name="title"
          placeholder="Job Title"
          value={editForm.title}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={editForm.company}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={editForm.description}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={editForm.location}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
          required
        />
        <input
          name="salary"
          placeholder="Salary"
          value={editForm.salary || ""}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
        />
        <input
          name="experience"
          placeholder="Experience"
          value={editForm.experience || ""}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
        />
        <input
          name="employmentType"
          placeholder="Employment Type"
          value={editForm.employmentType || ""}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
        />
        <input
          name="department"
          placeholder="Department"
          value={editForm.department || ""}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
        />
        <input
          name="education"
          placeholder="Education"
          value={editForm.education || ""}
          onChange={(e) =>
            setEditForm({ ...editForm, [e.target.name]: e.target.value })
          }
        />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={editForm.skills?.join(", ") || ""}
          onChange={(e) =>
            setEditForm({
              ...editForm,
              skills: e.target.value.split(",").map((s) => s.trim()),
            })
          }
        />
        <input
          name="openings"
          placeholder="Openings"
          type="number"
          value={editForm.openings || 1}
          onChange={(e) =>
            setEditForm({ ...editForm, openings: e.target.value })
          }
        />
        <div style={{ marginTop: "10px" }}>
          <button type="submit" className="btn btn-primary">
            Update Job
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setEditForm(null)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
