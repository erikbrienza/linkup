import React from "react";

const JobOffers = () => {
  // Offerte fittizie
  const jobListings = [
    {
      id: 1,
      title: "Sviluppatore Web Front-End",
      company: "TechCorp",
      description:
        "Siamo alla ricerca di uno sviluppatore front-end esperto in React e CSS per un progetto entusiasmante.",
      location: "Milano, Italia",
    },
    {
      id: 2,
      title: "Designer UX/UI",
      company: "DesignersHub",
      description:
        "Unisciti al nostro team per creare esperienze utente straordinarie. Esperienza con Figma richiesta.",
      location: "Roma, Italia",
    },
    {
      id: 3,
      title: "Sviluppatore Back-End (Node.js)",
      company: "WebDev Inc.",
      description:
        "Cerchiamo uno sviluppatore back-end esperto in Node.js per lavorare su un'applicazione scalabile.",
      location: "Torino, Italia",
    },
  ];

  return (
    <div className="job-offers-container">
      <h2>Offerte di Lavoro</h2>
      <div className="job-offers-list">
        {jobListings.map((job) => (
          <div className="job-offer" key={job.id}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <button className="apply-btn">Candidati Ora</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOffers;