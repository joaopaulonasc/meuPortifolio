import React from "react";
import "./Home.css";

// Exemplo de SVG para ícones, ou use bibliotecas como react-icons
const redes = [
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/joao-paulo-nascimento-sec",
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
        <path d="M29,3H3C1.35,3,0,4.35,0,6v20c0,1.65,1.35,3,3,3h26c1.65,0,3-1.35,3-3V6C32,4.35,30.65,3,29,3z M10,26H5V12h5V26z M7.5,10.5  C5.57,10.5,4,8.93,4,7s1.57-3.5,3.5-3.5S11,5.07,11,7S9.43,10.5,7.5,10.5z M28,26h-5v-7c0-1.38-1.12-2.5-2.5-2.5S18,17.62,18,19v7h-5V12  h5v1.8c.81-1.16,2.18-1.8,3.5-1.8C24.09,12,26,14.12,26,17.3V26z" />
      </svg>
    ),
  },
  {
    nome: "GitHub",
    url: "https://github.com/joaopaulonasc",
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
        <path d="M16 2.6C8 2.6 1.4 9.2 1.4 17.2c0 6.4 4.2 11.9 10.1 13.8c0.7 0.1 1-0.3 1-0.7v-2.7c-4.1 0.9-5-2-5-2c-0.7-1.8-1.7-2.3-1.7-2.3c-1.4-1 0.1-1 0.1-1c1.5 0.1 2.3 1.5 2.3 1.5c1.4 2.3 3.6 1.7 4.5 1.3c0.1-1 0.5-1.7 0.9-2.1c-3.3-0.4-6.8-1.7-6.8-7.4c0-1.6 0.6-2.9 1.4-3.9c-0.1-0.4-0.6-2 0.1-4.1c0 0 1.2-0.4 4 1.5c1.1-0.3 2.2-0.5 3.3-0.5c1.1 0 2.2 0.2 3.3 0.5c2.7-1.9 4-1.5 4-1.5c0.8 2.2 0.3 3.7 0.1 4.1c0.9 1 1.4 2.3 1.4 3.9c0 5.7-3.5 7-6.9 7.4c0.5 0.4 1 1.4 1 2.8v4.2c0 0.4 0.3 0.8 1 0.7c5.9-1.9 10.2-7.4 10.2-13.8C30.6 9.2 24 2.6 16 2.6z"/>
      </svg>
    ),
  },
  {
    nome: "Instagram",
    url: "https://instagram.com/seuusuario",
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
        <path d="M16 7.3a8.7 8.7 0 108.7 8.7A8.7 8.7 0 0016 7.3zm0 14.3a5.6 5.6 0 115.5-5.6A5.6 5.6 0 0116 21.6zm8.9-13.4a2 2 0 11-2-2A2 2 0 0124.9 8.2zm5.6 2a5.6 5.6 0 00-1.5-3.8A5.6 5.6 0 0024.9 5a18 18 0 00-8.9-.6 18 18 0 00-8.9.6 5.6 5.6 0 00-3.7 1.4A5.6 5.6 0 001.5 10.2a18 18 0 00-.6 8.9 18 18 0 00.6 8.9 5.6 5.6 0 001.4 3.7A5.6 5.6 0 007.1 29a18 18 0 008.9.6 18 18 0 008.9-.6 5.6 5.6 0 003.7-1.4 5.6 5.6 0 001.4-3.7 18 18 0 00.6-8.9 18 18 0 00-.6-8.9zM28.9 27a3.3 3.3 0 01-1.9 1.9 16.2 16.2 0 01-8 .5 16.2 16.2 0 01-8-.5 3.3 3.3 0 01-1.9-1.9 16.2 16.2 0 01-.5-8 16.2 16.2 0 01.5-8 3.3 3.3 0 011.9-1.9 16.2 16.2 0 018-.5 16.2 16.2 0 018 .5 3.3 3.3 0 011.9 1.9 16.2 16.2 0 01.5 8 16.2 16.2 0 01-.5 8z"/>
      </svg>
    ),
  },
];

function Home() {
  return (
    <section className="home-section">
      <img
        src={`${process.env.PUBLIC_URL}/perfil.jpg`}
        alt="Seu Nome"
        className="foto-perfil anim-avatar"
      />
      <div className="descricao-pessoal">
        <h2>Bem-vindo ao Meu Portfólio</h2>
        <p>
          Olá! Sou <strong>João Paulo</strong>, estudante de Desenvolvimento de Sistemas apaixonado por tecnologia, inovação e aprendizado contínuo. 
          Neste portfólio você encontra meus projetos, vídeos e apresentações. Estou sempre em busca de novos desafios para crescer como desenvolvedor front-end.
        </p>
        <div className="social-links">
          {redes.map(({ nome, url, icon }) => (
            <a
              key={nome}
              href={url}
              className={`icon-link icon-${nome.toLowerCase()}`}
              aria-label={nome}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="/meuPortifolio/docs/CVLinkedin.pdf"  /* coloque o caminho correto do seu CV em /public/docs/ */
          className="btn-cv"
          download
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
}

export default Home;

