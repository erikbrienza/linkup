import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Sto inviando:", { name, email, password }); // 👈 Debug
  
    try {
      const res = await axios.post("http://localhost:8888/linkup/backend/api/register.php", {
        name,
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      console.log("Risposta dal server:", res.data); // 👈 Debug
  
      if (res.data.success) {
        setMessage("Registrazione completata! Reindirizzamento...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(res.data.error);
      }
    } catch (error) {
      console.error("Errore:", error);
      setMessage("Errore durante la registrazione");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrati</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default Register;