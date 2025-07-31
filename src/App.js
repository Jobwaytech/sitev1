import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from "./pages/Auth";
import MainAdmin from './pages/MainAdmin';


// 👇 Import the new pages
import Career from './pages/Career';


function App() {
return (
<Router>
<Navbar />
<Routes>
{/* Existing Routes */}
<Route path="/" element={<Home />} />

<Route path="/auth" element={<Auth />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/main-admin" element={<MainAdmin />} />

{/* ✅ New Routes */}
<Route path="/career" element={<Career />} />
</Routes>
</Router>
);
}

export default App;
