import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Meu Portfólio</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/videos">Vídeos</Link></li>
        <li><Link to="/apresentacoes">Apresentações</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
