import "./DocumentoCard.css"; // no DocumentoCard.js

function DocumentoCard({ titulo, link }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Baixar/Ver Apresentação
      </a>
    </div>
  );
}

export default DocumentoCard;
