import React from "react";
import "../style.css/header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header>
        <div>
          <div href="" onClick={scrollToTop} className="rafael">&lt;Rafael /&gt;</div>        
        </div>
        <div className="right">
          <h1>Sobre mim</h1>
          <h1>Experiência</h1>
          <h1>Service</h1>
          <h1>Portifólio</h1>
          <h1>Contato</h1>           
        </div>   
      </header>
    </div>
  );
};

export default Header;
