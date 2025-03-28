const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="overlay"></div>
        <div className="content">
          <h1>Connetti. Collabora. Cresci.</h1>
          <p>
            Il social network per professionisti e studenti che vogliono fare networking in modo efficace.
          </p>
          <a href="/register" className="cta-button">Unisciti ora</a>
        </div>
      </div>

      {/* Punti di forza */}
      <section className="features">
        <h2>Perché scegliere LinkUP?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🎯 Networking Smart</h3>
            <p>Trova le persone giuste per collaborare e crescere professionalmente.</p>
          </div>
          <div className="feature">
            <h3>💬 Messaggi Diretti</h3>
            <p>Chatta con altri utenti e crea connessioni reali.</p>
          </div>
          <div className="feature">
            <h3>🚀 Opportunità di Carriera</h3>
            <p>Scopri offerte di lavoro e progetti interessanti nel tuo settore.</p>
          </div>
        </div>
      </section>

      {/* Sezione FAQ */}
      <section className="faq-section">
        <h2>Domande Frequenti</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Come posso iscrivermi a LinkUP?</h3>
            <p>Per iscriverti, clicca sul pulsante "Unisciti ora" e compila il modulo di registrazione.</p>
          </div>
          <div className="faq-item">
            <h3>Quanto costa usare LinkUP?</h3>
            <p>LinkUP è completamente gratuito per tutti gli utenti.</p>
          </div>
          <div className="faq-item">
            <h3>Come posso trovare opportunità di lavoro?</h3>
            <p>Una volta iscritto, potrai accedere alle offerte di lavoro nella sezione dedicata.</p>
          </div>
          <div className="faq-item">
            <h3>Posso modificare il mio profilo?</h3>
            <p>Sì, puoi aggiornare tutte le informazioni del tuo profilo dalla sezione "Profilo".</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    backgroundImage: "url('https://source.unsplash.com/1600x900/?network,people')", // Immagine di sfondo
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "80px",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 159, 183, 0.6)", // Overlay semitrasparente con il colore principale
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "600px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  ctaButton: {
    backgroundColor: "#FED766",
    color: "#333",
    padding: "12px 24px",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  // Aggiungi stili per la nuova sezione
  additionalBenefits: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: "50px 20px",
    borderRadius: "10px",
    marginTop: "30px",
  },
  benefitsContent: {
    flex: 1,
    maxWidth: "600px",
  },
  benefitsImage: {
    flex: 1,
    maxWidth: "500px",
    display: "flex",
    justifyContent: "center",
  },
  benefitsButton: {
    backgroundColor: "#FE4A49",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },
  benefitsImg: {
    width: "50%",
    height: "100vh",
    borderRadius: "8px",
  },
};

export default Home;