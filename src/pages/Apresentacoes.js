import DocumentoCard from '../components/DocumentoCard';
import "./Apresentacoes.css"; // em src/pages/Apresentacoes.js

const docs = [
  {
    titulo: "Redes Computadores PDF",
    link: "/docs/RedesComputadores.pdf",  // Certifique-se que o arquivo esteja em public/docs/
  },
  {
    titulo: "RedesComputadores em PowerPoint",
    link: "/docs/RedesComputadores.pptx", // Idem
  },
  // Se quiser exibir via Google Drive (visualização online):
  // {
  //   titulo: "PowerPoint Online",
  //   link: "https://docs.google.com/gview?url=https://seudominio.com/docs/minha_apresentacao.pptx&embedded=true"
  // }
];

function Apresentacoes() {
  return (
    <section>
      <h2>Apresentações e Documentos</h2>
      <div className="grid">
        {docs.map((d, idx) => (
          <DocumentoCard key={idx} {...d} />
        ))}
      </div>
    </section>
  );
}

export default Apresentacoes;

