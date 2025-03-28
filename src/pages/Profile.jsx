import { useState } from "react";
import axios from "axios";

const Profile = ({ user, setUser }) => {
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(user?.photo ? `http://localhost:8888/linkup/backend/uploads/${user.photo}` : "/default-avatar.png");
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file)); // Mostra anteprima dell'immagine
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (password) formData.append("password", password);
    if (photo) formData.append("photo", photo);

    try {
      const res = await axios.post("http://localhost:8888/linkup/backend/api/update_profile.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        setUser(res.data.user);
        setMessage("Profilo aggiornato con successo!");
      } else {
        setMessage(res.data.error);
      }
    } catch (error) {
      setMessage("Errore nell'aggiornamento del profilo.");
    }
  };

  return (
    <div className="profile-container">
      <h2>Profilo Utente</h2>
      {message && <p className="message">{message}</p>}
      
      <div className="profile-card">
        <img src={preview} alt="Foto profilo" className="profile-img-large" />
        
        <form onSubmit={handleSubmit} className="profile-form">
          <label>📸 Cambia foto profilo</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          <label>📝 Nome</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>📄 Bio</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Scrivi qualcosa su di te..." />

          <label>🔑 Nuova Password (opzionale)</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="update-btn">Aggiorna Profilo</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;