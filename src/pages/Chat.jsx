import { useEffect, useState } from "react";
import axios from "axios";

const Chat = ({ user, contact }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (user && contact) {
      axios
        .get(`http://localhost:8888/linkup/backend/api/getMessages.php?user_id=${user.id}&contact_id=${contact.id}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.error("Errore nel recupero dei messaggi", err));
    }
  }, [user, contact]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await axios.post("http://localhost:8888/linkup/backend/api/sendMessage.php", {
        sender_id: user.id,
        receiver_id: contact.id,
        message: newMessage,
      });

      if (res.data.success) {
        setMessages([...messages, { sender_id: user.id, receiver_id: contact.id, message: newMessage }]);
        setNewMessage("");
      }
    } catch (error) {
      console.error("Errore nell'invio del messaggio", error);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat con {contact.name}</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender_id === user.id ? "sent" : "received"}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Invia</button>
      </div>
    </div>
  );
};

export default Chat;