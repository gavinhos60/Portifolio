import React, { useState } from "react";
import "../style.css/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={menuOpen ? "menu-open" : ""}>
        <div>
          <div href="" onClick={scrollToTop} className="rafael">&lt;Rafael /&gt;            
          </div>
        </div>
        <div className={`right ${menuOpen ? "show-menu" : ""}`}>
          <h1>Sobre mim</h1>
          <h1>Experiência</h1>
          <h1>Serviço</h1>
          <h1>Portifólio</h1>
          <h1>Contato</h1>
        </div>
        <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  );
};

export default Header;