import ProjetoCard from '../components/ProjetoCard';
import "./Projetos.css";   // em src/pages/Projetos.js

const projetoList = [
  {
    titulo: "Site Simples",
    descricao: "Um Site Simples",
    link: "https://joaopaulonasc.github.io/myFirstWebsite/"
  },
  // Adicione outros projetos aqui
  {
    titulo: "Site Rifa",
    descricao: "Rifa para ajudar uma gatinha",
    link: "https://joaopaulonasc.github.io/"
  }
];

function Projetos() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <div className="grid">
        {projetoList.map((p, idx) => (
          <ProjetoCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
