import "./ProjetoCard.css"; // no ProjetoCard.js

function ProjetoCard({ titulo, descricao, link }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
}

export default ProjetoCard;
