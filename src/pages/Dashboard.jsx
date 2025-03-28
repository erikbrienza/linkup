import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const Dashboard = ({ user }) => {
  const [messageStats, setMessageStats] = useState({ sent: 0, received: 0 });

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:8888/linkup/backend/api/getMessagesStats.php?user_id=${user.id}`)
        .then((res) => {
          setMessageStats(res.data);
        })
        .catch((err) => console.error("Errore nel recupero dei dati", err));
    }
  }, [user]);

  const data = [
    { name: "Inviati", value: messageStats.sent },
    { name: "Ricevuti", value: messageStats.received }
  ];

  return (
    <div className="dashboard-container">
      {/* Sezione Profilo */}
      <div className="profile-section">
        <img
          src={`http://localhost:8888/linkup/backend/uploads/${user.photo || "default-avatar.png"}`}
          alt="Foto profilo"
          className="dashboard-profile-img"
        />
        <h2>Ciao, {user.name}!</h2>
        <p>{user.email}</p>
        <Link to="/profile" className="edit-profile-btn">Modifica Profilo</Link>
      </div>

      {/* Link Rapidi */}
      <div className="quick-links">
        <h3>Link Utili</h3>
        <ul>
          <li><Link to="/profile">Modifica Profilo</Link></li>
          <li><Link to="/settings">Impostazioni</Link></li>
          <li><Link to="/help">Supporto</Link></li>
        </ul>
      </div>

      {/* Attività Recenti */}
      <div className="recent-activity">
        <h3>Attività Recenti</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#009FB7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;