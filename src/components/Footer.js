import React from "react";
import "./Footer.css"; // caso opte por CSS separado

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} joaopaulonasc. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
