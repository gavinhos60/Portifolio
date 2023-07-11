import React from "react";
import "../style.css/home.css";

import Avatar from "../image/avatar.png";

const HomePage = () => {
  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rafael-gavinhos/", "_blank");
  };

  const redirectToGitHub = () => {
    window.open("https://github.com/gavinhos60", "_blank");
  };
  

  return (
    <div className="home">
      <div className="frontal">
        <div className="ola">
          <p>Olá, eu sou</p>
        </div>
        <div className="nome">
          <p className="nome-font">Rafael Gavinhos</p>
        </div>
        <div className="dev">
          <p className="nome-dev">Desenvolvedor Full Stack</p>
        </div>
        <div className="div-botoes">
          <button onClick={redirectToLinkedIn} className="botoes">
            LinkedIn
          </button>
          <button onClick={redirectToGitHub} className="botoes">
            GitHub
          </button>
        </div>
        <div className="avatar">
          <img alt="avatar" src={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
