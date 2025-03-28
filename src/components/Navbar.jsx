import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Stato per il menù mobile

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">LinkUP!</Link>
      </div>

      {/* Icona hamburger per il menu mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Menu per dispositivi mobili */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        {user && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/job-offers">Offerte di Lavoro</Link></li>
            <li><Link to="/messages">Posta</Link></li>
            <li>
              <Link to="/profile">
                <img
                  src={`http://localhost:8888/linkup/backend/uploads/${user.photo || "default-avatar.png"}`}
                  alt="Profilo"
                  className="profile-img"
                />
              </Link>
            </li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        )}
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registrati</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;