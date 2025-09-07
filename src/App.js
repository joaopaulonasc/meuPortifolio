import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Videos from "./pages/Videos";
import Apresentacoes from "./pages/Apresentacoes";

import "./App.css";             // CSS geral do app
import "./pages/Home.css";      // CSS específico para Home
import "./pages/Projetos.css";  // CSS para Projetos
import "./pages/Videos.css";    // CSS para Vídeos
import "./pages/Apresentacoes.css"; // CSS para Apresentações
import "./components/Navbar.css";    // CSS Navbar
import "./components/Footer.css";    // CSS Footer
import "./components/ProjetoCard.css";  // CSS cards projeto
import "./components/VideoCard.css";    // CSS cards vídeo
import "./components/DocumentoCard.css"; // CSS cards doc

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main className="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/apresentacoes" element={<Apresentacoes />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


