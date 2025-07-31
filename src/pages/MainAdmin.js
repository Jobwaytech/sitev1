import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '../css/MainAdmin.css';

const MainAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailUpdating, setEmailUpdating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('name');

  const fetchAdmins = useCallback(async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admins`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(res.data);
    } catch (err) {
      alert('❌ Failed to load admins');
    }
  }, [token]);

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/admins`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.message);
      setForm({ name: '', email: '', password: '' });
      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.message || '❌ Creation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this sub-admin?')) return;
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.message);
      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.message || '❌ Delete failed');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      setChanging(true);
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/admins/update-password`,
        { newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      alert(err.response?.data?.message || '❌ Password update failed');
    } finally {
      setChanging(false);
    }
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();
    try {
      setEmailUpdating(true);
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/admins/update-email`,
        { newEmail },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      setNewEmail('');
      fetchAdmins();
    } catch (err) {
      alert(err.response?.data?.message || '❌ Email update failed');
    } finally {
      setEmailUpdating(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="main-admin-wrapper">
      <header className="admin-header">
        <div className="admin-profile">
          <button onClick={() => setShowDropdown(!showDropdown)} className="profile-btn">
            👤 {userName || 'Profile'}
          </button>

          {showDropdown && (
            <div className="dropdown-panel">
              <button onClick={() => setActiveSection('dashboard')}>🏠 Admin Controls</button>
              <button onClick={() => setActiveSection('profile')}>✏️ Update Profile</button>
              <button onClick={() => setActiveSection('password')}>🔒 Change Password</button>
              <button onClick={() => setActiveSection('email')}>📧 Change Email</button>
              <button onClick={handleLogout} className="logout-btn">🚪 Logout</button>
            </div>
          )}
        </div>
      </header>

      {activeSection === 'dashboard' && (
        <>
          <h2 className="main-title">🛡️ Admin Management</h2>

          <form onSubmit={handleCreate} className="form-section">
            <h4>Create Sub-Admin</h4>
            <input
              className="input-field"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="input-field"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Creating...' : '➕ Add Sub-Admin'}
            </button>
          </form>

          <div className="section">
            <h3>📋 Admin List</h3>
            <ul className="admin-list">
              {admins.map((admin) => (
                <li key={admin._id} className="admin-item">
                  <span>
                    {admin.name} ({admin.email}) - {admin.isMainAdmin ? 'Main' : 'Sub'}
                  </span>
                  {!admin.isMainAdmin && (
                    <button onClick={() => handleDelete(admin._id)} className="btn btn-danger">
                      ❌ Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {activeSection === 'password' && (
        <div className="section">
          <h3>🔐 Change Your Password</h3>
          <form onSubmit={handlePasswordChange}>
            <div className="password-wrapper">
              <input
                className="input-field"
                placeholder="Old Password"
                type={showPassword ? 'text' : 'password'}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <div className="password-wrapper">
              <input
                className="input-field"
                placeholder="New Password"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="toggle-eye">
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <button type="submit" className="btn btn-success" disabled={changing}>
              {changing ? 'Changing...' : '🔁 Change Password'}
            </button>
          </form>
        </div>
      )}

      {activeSection === 'email' && (
        <div className="section">
          <h3>✉️ Change Email</h3>
          <form onSubmit={handleEmailChange}>
            <input
              type="email"
              placeholder="Enter new email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="btn btn-purple" disabled={emailUpdating}>
              {emailUpdating ? 'Updating...' : '✅ Update Email'}
            </button>
          </form>
        </div>
      )}

      {activeSection === 'profile' && (
        <div className="section">
          <h3>📝 Update Profile Info</h3>
          <p>You can later add more profile settings here.</p>
        </div>
      )}
    </div>
  );
};

export default MainAdmin;
