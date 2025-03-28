import React, { useState } from 'react';

const Messages = ({ user }) => {
  const [message, setMessage] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!message || !recipientId) {
      return alert("Compila tutti i campi!");
    }

    // Simulazione dell'invio del messaggio (qui potresti collegare un'API)
    const newMessage = {
      recipient: recipientId,
      sender: user.id,
      message: message,
      timestamp: new Date().toLocaleString(),
    };

    // Aggiungiamo il messaggio all'array dei messaggi (per ora in locale)
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    
    // Pulisci il campo dopo l'invio
    setMessage('');
    setRecipientId('');
  };

  return (
    <div className="messages-container">
      <h2>Messaggi</h2>
      
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === user.id ? 'sent' : 'received'}`}>
              <p><strong>{msg.sender === user.id ? 'Tu' : `ID: ${msg.recipient}`}</strong> - {msg.timestamp}</p>
              <p>{msg.message}</p>
            </div>
          ))
        ) : (
          <p>Nessun messaggio disponibile.</p>
        )}
      </div>

      <form onSubmit={handleSendMessage}>
        <div>
          <label>ID destinatario</label>
          <input
            type="text"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            placeholder="ID destinatario"
          />
        </div>
        
        <div>
          <label>Scrivi un messaggio...</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Scrivi un messaggio..."
          />
        </div>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Messages;