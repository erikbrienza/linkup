import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import JobOffers from "./pages/JobOffers";  // Importiamo la pagina delle offerte di lavoro
import axios from "axios";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} /> : <Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
        <Route path="/messages" element={user ? <Messages user={user} /> : <Login setUser={setUser} />} />
        <Route path="/job-offers" element={user ? <JobOffers /> : <Login setUser={setUser} />} />  {/* Nuova rotta per le offerte di lavoro */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;