import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8888/linkup/backend/api/login.php",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        setUser(res.data.user);  
        localStorage.setItem("user", JSON.stringify(res.data.user)); 
        navigate("/dashboard");
      } else {
        setMessage(res.data.error);
      }
    } catch (error) {
      setMessage("Errore durante il login");
    }
  };

  return (
    <div className="auth-container">
      <h2>Accedi</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default Login;